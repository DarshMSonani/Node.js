const MESSAGES = {
    // Product Items
    1001: 'Product added successfully',
    1002: 'Product updated successfully',
    1003: 'Product deleted successfully',
    1004: 'Product get successfully',
    1005: 'Product already exits',
    1006: 'Product does not exits',
    1007: 'Product quantity not available',
    1008: "Something  went wrong in add product.",
    1009: "Something  went wrong in update product.",
    1010: "You are not authorized to perform this action",
    1011: "Please upload an image",
    1012: "Something  went wrong in find seller own product.",
    1013: "Image is does not exits",
    1014: 'You are not authorized to perform this action',
    1015: "Image can update one at a time",
    1016: "Please upload image",
    1017: "Something went wrong in add image",
    1018: "Please upload valid image type like jpeg, jpg, png",
    1019: "Please upload valid size image, size of image is 2 mb",
    1020: "Image is does not exits for this product",
    1021: "Something went wrong in update image",
    1022: "Something went wrong in add new image in update image section",
    1023: "Something went wrong in delete product",
    1024: "Something went wrong in delete product image",

    // User management
    1101: 'User created sucessfully',
    1102: "Something went wrong in register",
    1103: 'Email alredy  exists',
    1104: 'User logged in successfully',
    1105: "User does not exists",
    1106: "User alredy login",
    1107: 'Password is incorrect',
    1108: 'Token has expired. Please login again',
    1109: "Something went wrong in token verification",
    1110: 'You are not authorized to perform this action',
    1111: "Something went wrong in get all product from user side",

    // Add Seller by admin
    1201: 'Seller created Successfully',
    1202: "The seller email was alredy exists",
    1203: "Somethin went wrong in add seller by admin",

    // Update User Profile
    1301: 'Profile Updated Succesfully',
    1302: "Something went wrong in update profile",

    // Admin managment
    1401: "Admin can't change this",

    // Cart management
    1501: "Product was add to cart successfully",
    1502: "Product updated in the cart successfully",
    1503: "Product deleted from the cart successfully",
    1504: "Cart data not found.",
    1505: "You are not authorized to perform this action",
    1506: "Something went wrong in add product into cart.",
    1507: "Something went wrong in update product into cart.",
    1508: "Something went wrong in delete product into cart.",
    1509: "Something went wrong in get all product into cart.",
    1510: "Product does not exits in your cart, please enter valid product id.",
    1511: "Get all product successfully in cart",

    // WhishLIst management
    1601: "Product was add to whishlist successfully ",
    1602: "Get all product from whishlist is  successfully",
    1603: "Product deleted from the whishlist successfully",
    1604: "Your whishlist has no any data, please add data in your whish list.",
    1605: "You are not authorized to perform this action",
    1606: "Something went wrong in add product in whishlist",
    1607: "Something went wrong in get all product in whishlist",
    1608: "Something went wrong in delete product in whishlist",
    1609: "Product does not exits in your whishlist, please enter valid product id.",

    // Order management
    1701: "Order was created  successfully",
    1702: "Order does not exits, please enter valid order id.",
    1703: "You are not authorized to perform this action",
    1704: "Something went wrong in creat order ",
    1705: "Something went wrong in get all order ",
    1706: "Something went wrong in cancel order ",
    1707: "Order was canceled successfully",
    1708: "No orders found",
    1709: "All Order get successfully from custmor side.",
    1710: "Something went wrong in update order ",
    1711: "Order was updated successfully",
    1712: "Order was alredy canceled by user",
    1713: "Something went wrong in update order by seller",
    1714: "Order was alredy canceled by seller",
    1715: "Order was delivered to the custmor",
    1716: "Something went wrong in get all order from seller side",
    1717: "All Order get successfully from seller side.",
    1718: "Something went wrong in creat orderdetails ",

    // Stripe management
    1801: "Payment successfull. Your order will be shipped soon.",
    1802: "Stripe coustmor was created sucessfully",
    1803: "Payment card was add sucessfully in to stripe",
    1804: "Something went wrong in add coustmor in stripe.",
    1805: "Something went wrong in add card in stripe.",
    1806: "You are not authorized to perform this action",

    // Image management
    1901: "Image does not found for this product",
    1902: "Somethin went wrong in delete image",
    1903: "Upload maximum 5 image, not above 5",

    // Sharp Managment
    2000: "Something went wrong in sharp , get meta data",

    // Common
    9000: 'Please enter valid data!',
    9999: 'Something went wrong!',
};

// Function to get message from message code
const getMessage = messageCode => {
    if (isNaN(messageCode)) {
        return messageCode;
    }
    return messageCode ? MESSAGES[messageCode] : '';
};

// exporting getMessage Function
export default getMessage;
