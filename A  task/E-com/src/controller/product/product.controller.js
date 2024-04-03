import db from "../../model/index.js";
import RESPONSE from "../../helper/response.js";
import Validator from "validatorjs";
import uploadFile from "../../middleware/uploadImage/image.js";
import deleteFile from "../../helper/deleteFile/delete.file.js";
import path from "path";
import query from "express"

const Product = db.product
const ProductImage = db.productImage

const getallProducts = async (req, res) => {
    try {
        const { user: { role } } = req
        if (role != 'user') {
            return RESPONSE.error(res, 1110)
        }

        let findProduct = await Product.findAll({
            include: [
                {
                    model: ProductImage,
                }]
        });

        return RESPONSE.success(res, 1004, findProduct)
    } catch (err) {
        console.log("The err in get all product from user side is ", err);
        return RESPONSE.error(res, err)
    }
}


const findOwnProduct = async (req, res) => {
    try {
        const { user: { id, role } } = req
        if (role != "seller") {
            return RESPONSE.error(res, 1010)
        };
        const findOwnProduct = await Product.findAll({
            where: { sellerId: id },
            include: [
                {
                    model: ProductImage,
                }]
        });

        return RESPONSE.success(res, 1004, findOwnProduct)
    } catch (err) {
        console.log("The err in find seller own product is ", err);
        return RESPONSE.error(res, 1012, err)
    }
}

async function fileValidation(file) {
    let response = {
        success: true
    }
    try {
        const fileTypes = ["image/jpeg", "image/jpg", "image/png"]
        if (file.length > 5) {
            response.success = false;
            response.message = 'You can only upload up to 5'
        };
        for (const obj of file) {
            if (!fileTypes.includes(obj.mimetype)) {
                response.success = false;
                response.message = "File type not supported, please upload image file type like jpeg,jpg,png"
            };
            if (obj.size > 2 * 1024 * 1024) {
                response.success = false;
                response.message = 'Image must be less than 2MB'
            }
        }
    } catch (error) {
        response.success = false;
        response.message = "Somethig went wrong in file validation.", error
    } finally {
        return response;
    }
}

const addProduct = async (req, res) => {

    const validation = new Validator(req.body, {
        title: "required|string",
        description: "required|string",
        price: "required|numeric",
        category: "required|string|in:phone,computer,electronic",
        discount: "required|numeric",
    });
    if (validation.fails()) {
        let firstMessage = Object.keys(validation.errors.all())[0];
        return RESPONSE.error(res, 9000, validation.errors.first(firstMessage), 400)
    }
    const t = await db.sequelize.transaction();
    try {
        const { user: { id: sellerId, role }, body: { title, description, price, category, discount } } = req
        if (role != "seller") {
            return RESPONSE.error(res, 1010)
        };

        const file = req.files;
        // console.log(file);
        if (!file.length) {
            return RESPONSE.error(res, 1016)
        }

        const creatProduct = await Product.create({ sellerId, title, description, price, category, discount }, {
            transaction: t
        })

        if (!creatProduct) {
            return RESPONSE.error(res, 1008)
        }

        const validationResponse = await fileValidation(file);
        if (!validationResponse.success) {
            return res.status(422).json({
                success: false,
                message: validationResponse.message
            });
        }
        const images = await uploadFile(file, "productImage");

        for (const image of images) {
            // console.log(image);
            let upload = await ProductImage.create({
                productId: creatProduct.id,
                image: image
            }, { transaction: t });
            if (!upload) {
                return RESPONSE.error(res, 1017)
            }
        }

        await t.commit();
        return RESPONSE.success(res, 1001)
    } catch (err) {
        await t.rollback();
        console.log("The err in add seller product is ", err);
        return RESPONSE.error(res, 1008, err)
    }
}

const updateProduct = async (req, res) => {
    const validation = new Validator(req.body, {
        productId: "required",
        title: "string",
        description: "string",
        price: "numeric",
        category: "string|in:phone,computer,electronic",
        discount: "numeric",
    });

    if (validation.fails()) {
        let firstMessage = Object.keys(validation.errors.all())[0];
        return RESPONSE.error(res, 9000, validation.errors.first(firstMessage), 400)
    }
    const t = await db.sequelize.transaction();
    try {

        // Get The Data From req.body
        const { user: { role, id }, body: { productId, title, description, price, category, discount, imageId } } = req;

        if (role != "seller") {
            return RESPONSE.error(res, 1014)
        };
        // Find product base on id
        const findProduct = await Product.findOne({
            where: {
                id: productId,
                sellerId: id
            }
        });

        if (!findProduct) {
            return RESPONSE.error(res, 1006)
        }

        const file = req.files
        console.log(file);

        if (!file.length) {
            return RESPONSE.error(res, 1016)
        }

        const validationResponse = await fileValidation(file);
        if (!validationResponse.success) {
            return res.status(422).json({
                success: false,
                message: validationResponse.message
            });
        }

        const updateProduct = await Product.update({ title, description, price, category, discount }, {
            where: {
                id: findProduct.id
            }
        }, { transaction: t });

        if (!updateProduct) {
            return RESPONSE.error(res, 1021)
        }

        // Find image base on id
        if (imageId) {
            for (const value of imageId) {
                console.log(value);
                let findImage = await ProductImage.findOne({
                    where: {
                        id: value,
                        productId: findProduct.id
                    },

                });
                console.log(findImage);
                if (!findImage) {
                    return RESPONSE.error(res, 1901);
                }

                const destroyFile = await ProductImage.destroy({
                    where: {
                        id: findImage.id
                    }
                }, { t });
                if (!destroyFile) {
                    return RESPONSE.error(res, 1902)
                }
                await deleteFile(path.basename(findImage.image), "productImage")
            }
        }

        const images = await uploadFile(file, "productImage");

        for (const image of images) {
            let upload = await ProductImage.create({
                productId: findProduct.id,
                image: image
            }, { transaction: t });
            if (!upload) {
                return RESPONSE.error(res, 1017)
            }
        }
        await t.commit();
        return RESPONSE.success(res, 1002)

    } catch (err) {
        await t.rollback();
        console.log("The err in update product is ", err);
        return RESPONSE.error(res, 1009, err)
    }
}

const deleteProduct = async (req, res) => {
    const validation = new Validator(req.body, {
        productId: "required",
    });

    if (validation.fails()) {
        let firstMessage = Object.keys(validation.errors.all())[0];
        return RESPONSE.error(res, 9000, validation.errors.first(firstMessage), 400)
    }
    const t = await db.sequelize.transaction();
    try {
        const { user: { role, id }, body: { productId } } = req
        if (role != "seller") {
            return RESPONSE.error(res, 1014)
        };


        const findProduct = await Product.findOne({
            where: {
                id: productId,
                sellerId: id
            },
        });

        if (!findProduct) {
            return RESPONSE.error(res, 1006)
        }


        const findImage = await ProductImage.findAll({
            where: {
                productId: findProduct.id
            }
        });

        if (!findImage) {
            return RESPONSE.error(res, 1020)
        }

        const deleteProduct = await Product.destroy({
            where: {
                id: findProduct.id
            }
        }, { transaction: t });

        if (!deleteProduct) {
            return RESPONSE.error(res, 1023)
        }
        const deleteImage = await ProductImage.destroy({
            where: {
                productId: findProduct.id
            }
        }, { transaction: t });
        if (!deleteImage) {
            return RESPONSE.error(res, 1024)
        }

        findImage.forEach(async (element) => {
            await deleteFile(path.basename(element.image), "productImage")
        });

        await t.commit();
        return RESPONSE.success(res, 1003)
    } catch (err) {
        await t.rollback();
        console.log("The err in delete product is ", err);
        return RESPONSE.error(res, 1109, err)
    }
}

export default { getallProducts, findOwnProduct, addProduct, updateProduct, deleteProduct };