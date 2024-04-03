import db from "../../model/index.js";
import RESPONSE from "../../helper/response.js";
import Validator from "validatorjs";
import { where } from "sequelize";

const Product = db.product;
const ProductImage = db.productImage;
const WhishLIst = db.whishList

const addProductToWhishList = async (req, res) => {
    const validation = new Validator(req.body, {
        productId: "required|numeric",
    });
    if (validation.fails()) {
        let firstMessage = Object.keys(validation.errors.all())[0];
        return RESPONSE.error(res, 9000, validation.errors.first(firstMessage), 400)
    }
    try {
        const { user: { role, id }, body: { productId } } = req
        if (role != "user") {
            return RESPONSE.error(res, 1605)
        }
        // check the product is exist or not

        const getProduct = await Product.findOne({
            where: {
                id: productId
            }
        });

        if (!getProduct) {
            return RESPONSE.error(res, 1609)
        }

        const addProduct = await WhishLIst.create({ userId: id, productId: getProduct.id });
        return RESPONSE.success(res, 1601)

    } catch (err) {
        console.log("The err in add products to whishlist is ", err);
        return RESPONSE.error(res, 1606, err)
    }
}

const getAllWhistListProduct = async (req, res) => {
    try {
        const { user: { role, id } } = req

        if (role != "user") {
            return RESPONSE.error(res, 1605)
        }

        const findProduct = await WhishLIst.findAll({
            where: {
                userId: id
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

        if (!findProduct) {
            return RESPONSE.error(res, 1604)
        }
        return RESPONSE.success(res, 1602, findProduct)
    } catch (err) {
        console.log("The err in get all product from whishlist is ", err);
        return RESPONSE.error(res, 1607, err)
    }
}

const deleteWhishlistProduct = async (req, res) => {
    const validation = new Validator(req.body, {
        whishlistId: "required|numeric",
    });
    if (validation.fails()) {
        let firstMessage = Object.keys(validation.errors.all())[0];
        return RESPONSE.error(res, 9000, validation.errors.first(firstMessage), 400)
    }
    try {
        const { user: { role, id }, body: { whishlistId } } = req

        if (role != "user") {
            return RESPONSE.error(res, 1605)
        }

        const findProduct = await WhishLIst.findOne({
            where: {
                id: whishlistId,
                userId: id
            }
        })

        if (!findProduct) {
            return RESPONSE.error(res, 1609)
        }

        const deleteProduct = await WhishLIst.destroy({
            where: {
                id: findProduct.id
            }
        });

        return RESPONSE.success(res, 1603)

    } catch (err) {
        console.log("The err in delete whishlist  product is : ", err);
        return RESPONSE.error(res, 1608, err)
    }
}

export default { addProductToWhishList, getAllWhistListProduct, deleteWhishlistProduct };