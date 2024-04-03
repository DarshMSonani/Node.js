import sharp from "sharp";

async function getMetadata(file) {
    try {
        const metadata = await sharp(file).metadata();

        console.log(metadata);
    } catch (err) {
        console.log("The err in get meta data is ", err);
    }
}

export default getMetadata 