import db from "../../model/index.js";
import RESPONSE from "../../helper/response.js";
import Validator from "validatorjs";
import { where } from "sequelize";

const User = db.User;
const Product = db.product;
const ProductImage = db.productImage;
const Cart = db.cart


const addCart = async (req, res) => {
    const validation = new Validator(req.body, {
        productId: "required|numeric",
        quantity: "numeric",
    });
    if (validation.fails()) {
        let firstMessage = Object.keys(validation.errors.all())[0];
        return RESPONSE.error(res, 9000, validation.errors.first(firstMessage), 400)
    }
    try {
        let { user: { role, id }, body: { productId, quantity } } = req
        if (role != "user") {
            return RESPONSE.error(res, 1505)
        };

        const findProduct = await Product.findOne({
            where: {
                id: productId
            }
        });

        if (!findProduct) {
            return RESPONSE.error(res, 1510)
        };

        const createCartProduct = await Cart.create({
            userId: id,
            productId: findProduct.id,
            quantity: quantity == null ? quantity = 1 : quantity
        });

        return RESPONSE.success(res, 1501)
    } catch (err) {
        console.log("The err in add item into cart is ", err);
        return RESPONSE.error(res, 1506, err);
    }
}

const getAllProductFromCart = async (req, res) => {
    try {
        const { user: { id, role } } = req

        if (role != "user") {
            return RESPONSE.error(res, 1505);
        };

        const getAllProducts = await Cart.findAll({
            where: {
                userId: id
            },
            include: [
                {
                    model: Product,
                    include: [
                        {
                            model: ProductImage,
                        }
                    ]
                },
            ]
        });

        if (!getAllProducts) {
            return RESPONSE.error(res, 1504)
        }

        return RESPONSE.success(res, 1511, getAllProducts);

    } catch (err) {
        console.log("The err in get all product from cart is ", err);
        return RESPONSE.error(res, 1509, err)
    }
}


const updateCart = async (req, res) => {
    const validation = new Validator(req.body, {
        cartId: "required|numeric",
        quantity: "numeric",
    });
    if (validation.fails()) {
        let firstMessage = Object.keys(validation.errors.all())[0];
        return RESPONSE.error(res, 9000, validation.errors.first(firstMessage), 400)
    }
    try {
        let { user: { role, id }, body: { cartId, quantity } } = req
        if (role != "user") {
            return RESPONSE.error(res, 1505)
        };

        const findProduct = await Cart.findOne({
            where: {
                id: cartId,
                userId: id
            }
        });

        if (!findProduct) {
            return RESPONSE.error(res, 1510)
        };

        const updateCartProduct = await Cart.update({ quantity }, {
            where: {
                id: findProduct.id
            }
        });

        return RESPONSE.success(res, 1502)
    } catch (err) {
        console.log("The err in update cart is ", err);
        return RESPONSE.error(res, 1507, err)
    }
}

const deleteCart = async (req, res) => {
    const validation = new Validator(req.body, {
        cartId: "required|numeric"
    });
    if (validation.fails()) {
        let firstMessage = Object.keys(validation.errors.all())[0];
        return RESPONSE.error(res, 9000, validation.errors.first(firstMessage), 400)
    }
    try {
        const { user: { role, id }, body: { cartId } } = req;
        if (role != "user") {
            return RESPONSE.error(res, 1505)
        }
        const findProduct = await Cart.findOne({
            where: {
                id: cartId,
                userId: id
            }
        });

        if (!findProduct) {
            return RESPONSE.error(res, 1510)
        }

        const deleteProduct = await Cart.destroy({
            where: {
                id: findProduct.id
            }
        });
        return RESPONSE.success(res, 1503)
    } catch (err) {
        console.log("The err in delete cart is ", err);
        return RESPONSE.error(res, 1508, err)
    }
}

export default { addCart, getAllProductFromCart, updateCart, deleteCart }