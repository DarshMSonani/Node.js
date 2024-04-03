import db from "../../model/index.js";
import RESPONSE from "../../helper/response.js";
import Validator from "validatorjs";
import { where, Sequelize } from "sequelize"

const Product = db.product
const ProductImage = db.productImage
const Order = db.order
const OrderDetail = db.orderDetail;


const createOrder = async (req, res) => {

    const validation = new Validator(req.body, {
        productId: "[productId]",
        quantity: "[quantity]",
    });
    if (validation.fails()) {
        let firstMessage = Object.keys(validation.errors.all())[0];
        return RESPONSE.error(res, 9000, validation.errors.first(firstMessage), 400)
    }
    const t = await db.sequelize.transaction();
    try {
        let { user: { role, id, address, phoneNumber }, body: { order, deliveryAddress } } = req
        if (role != "user") {
            return RESPONSE.error(res, 1703);
        }

        if (!deliveryAddress) {
            deliveryAddress = address
        }

        const result = [];
        for (const value of order) {
            const findProduct = await Product.findOne({
                where: {
                    id: value.productId
                }
            });
            if (!findProduct) {
                RESPONSE.error(res, 1702);
            }

            let quantity = value.quantity;
            const obj = { productId: findProduct.id, price: findProduct.price, quantity: quantity };
            result.push(obj);
        }

        let totalAmount = 0;
        result.forEach(element => {
            totalAmount += element.price * element.quantity;
        });

        const createOrder = await Order.create({ userId: id, deliveryAddress, totalAmount },
            { transaction: t })

        if (!createOrder) {
            return RESPONSE.error(res, 1704)
        }

        let orderDetail;
        result.forEach(async (element) => {
            const productId = element.productId;
            const quantity = element.quantity
            const amount = element.price * element.quantityy
            orderDetail = await OrderDetail.create({
                userId: id,
                orderId: createOrder.id,
                productId: productId,
                quantity: quantity,
                amount: amount,
                status: "pending"
            }, { transaction: t });
            if (!orderDetail) {
                return RESPONSE.error(res, 1718)
            }
        });

        await t.commit();

        return RESPONSE.success(res, 1701);
    } catch (err) {
        await t.rollback();
        console.log("The err in create order is ", err);
        return RESPONSE.error(res, 1704, err)
    }
}

const getAllOrder = async (req, res) => {
    try {
        const { user: { id, role } } = req

        if (role != "user") {
            return RESPONSE.error(res, 1703)
        }

        const findOrder = await Order.findAll({
            where: {
                userId: id
            },
            include: [
                {
                    model: OrderDetail,
                    include: [
                        {
                            model: Product,
                            include: [
                                {
                                    model: ProductImage
                                }
                            ]
                        },

                    ],

                }
            ]
        });

        if (!getAllOrder) {
            return RESPONSE.error(res, 1708);
        }

        return RESPONSE.success(res, 1709, findOrder)
    } catch (err) {
        console.log("The err in get all orders is ", err);
    }
}

const updateOrderByCustmor = async (req, res) => {

    const validation = new Validator(req.body, {
        orderId: "required|numeric",
        deliveryAddress: "string",
        status: "in:cancelByUser"
    });

    if (validation.fails()) {
        let firstMessage = Object.keys(validation.errors.all())[0];
        return RESPONSE.error(res, 9000, validation.errors.first(firstMessage), 400)
    }
    const t = await db.sequelize.transaction();
    try {
        const { user: { id, role }, body: { orderId, deliveryAddress, status } } = req;
        if (role != "user") {
            return RESPONSE.error(res, 1703)
        }

        const findOrder = await Order.findOne({
            where: {
                id: orderId,
                userId: id
            }
        });

        if (!findOrder) {
            return RESPONSE.error(res, 1702)
        }

        const updateOrder = await Order.update({ deliveryAddress }, {
            where: {
                id: findOrder.id
            }
        }, { transaction: t });

        if (!updateOrder) {
            return RESPONSE.error(res, 1709);
        }

        if (status) {
            let findOrderDetails = await OrderDetail.findAll({
                where: {
                    orderId: findOrder.id
                }
            })

            if (!findOrderDetails) {
                return RESPONSE.error(res, 1702)
            }

            findOrderDetails.forEach(async (element) => {
                if (element.status == "cancelByUser") {
                    return RESPONSE.error(res, 1712)
                }
                if (element.status == "cancelBySeller") {
                    return RESPONSE.error(res, 1714)
                }

                const updateOrderDetails = await OrderDetail.update({ status }, {
                    where: {
                        id: element.id
                    }
                }, { transaction: t });
                if (!updateOrderDetails) {
                    return RESPONSE.error(res, 1709)
                }
            });

        }
        await t.commit();
        return RESPONSE.success(res, 1711)

    } catch (err) {
        await t.rollback();
        console.log("The err in update order is ", err);
        return RESPONSE.error(res, 1710, err)
    }
}


const updateOrderBySeller = async (req, res) => {
    const validation = new Validator(req.body, {
        orderId: "required",
        status: "required|string|in:accepted,packed,shiped,delivered,cancelBySeller"
    });
    if (validation.fails()) {
        let firstMessage = Object.keys(validation.errors.all())[0];
        return RESPONSE.error(res, 9000, validation.errors.first(firstMessage), 400)
    }
    const t = await db.sequelize.transaction();
    try {
        const { user: { id, role }, body: { orderId, status } } = req;
        if (role != "seller") {
            return RESPONSE.error(res, 1703)
        }

        const findOrderDetails = await OrderDetail.findOne({
            where: {
                id: orderId,
            }
        });

        if (!findOrderDetails) {
            return RESPONSE.error(res, 1702)
        }

        if (findOrderDetails.status == "cancelBySeller") {
            return RESPONSE.error(res, 1714)
        }

        if (findOrderDetails.status == "cancelByUser") {
            return RESPONSE.error(res, 1712)
        }

        if (findOrderDetails.status == "delivered") {
            return RESPONSE.error(res, 1715);
        }

        const findProduct = await Product.findOne({
            where: {
                id: findOrderDetails.productId,
                sellerId: id
            }
        });

        if (!findProduct) {
            return RESPONSE.error(res, 1702)
        }

        const updateOrderDetails = await OrderDetail.update({ status }, {
            where: {
                productId: findProduct.id
            }
        }, { transaction: t });
        if (!updateOrderDetails) {
            return RESPONSE.error(res, 1713)
        }
        await t.commit();
        return RESPONSE.success(res, 1711)

    } catch (err) {
        await t.rollback();
        console.log("The err in update order by seller is ", err);
        return RESPONSE.error(res, 1713)
    }
}

const getAllSellerOrder = async (req, res) => {
    try {
        const { user: { id, role } } = req;
        if (role != "seller") {
            return RESPONSE.error(res, 1703)
        }

        const findProduct = await Product.findAll({
            where: {
                sellerId: id
            },
        });

        if (!findProduct) {
            return RESPONSE.error(res, 1006)
        }
        let findOrderDetails = []
        findProduct.forEach(async (element) => {
            let orderDetails = await OrderDetail.findAll({
                where: {
                    productId: element.id
                },
                include: [
                    {
                        model: Product,
                        include: [
                            {
                                model: ProductImage
                            }
                        ]
                    }
                ]
            });
            return findOrderDetails.push(orderDetails)
        });
        return RESPONSE.success(res, 1717, findOrderDetails)
    } catch (err) {
        console.log("The err in get all oder from seller is ", err);
        return RESPONSE.error(res, 1716, err)
    }
}


export default { createOrder, getAllOrder, updateOrderByCustmor, updateOrderBySeller, getAllSellerOrder } 