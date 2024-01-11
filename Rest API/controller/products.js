const { query } = require("express");
const product = require("../model/ProductModel");

const getAllProducts = async (req, res) => {

    const { company, name, featured, sort, select } = req.query

    const queryObject = {}

    if (company) {
        queryObject.company = company
    }

    if (name) {
        queryObject.name = { $regex: name, $options: "i" };
    }

    if (featured) {
        queryObject.featured = featured
    }

    let apiData = product.find(queryObject);

    if (sort) {
        let sortFix = sort.split(",").join(" ");
        apiData = apiData.sort(sortFix)
    }

    if (select) {
        let selectFix = select.split(",").join(" ")
        apiData = apiData.select(selectFix)
    }

    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 15;

    let skip = (page - 1) * limit;
    apiData = apiData.skip(skip).limit(limit);

    console.log(queryObject);
    let myProducts = await apiData;
    res.status(200).json({ myProducts, nbHits: myProducts.length });
    console.log(req.query);
};

const getAllProductsTesting = async (req, res) => {
    let data = await product.find(req.query).select("name company");
    res.status(200).json({ data });
};

module.exports = {
    getAllProducts,
    getAllProductsTesting
};