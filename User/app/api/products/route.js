import { join } from "path";
import { promises as fs } from "fs";
import dbConnect from "../../../lib/mongodb";
import Product from "../../../models/Product";

export async function GET(req) {
  await dbConnect();

  try {
    const products = await Product.find();

    // Map over the products to handle image paths
    const productsWithImages = await Promise.all(
      products.map(async (product) => {
        const productObj = product.toObject();

        // Check if the image path is relative
        if (productObj.image && productObj.image.startsWith("/uploads/")) {
          // Construct the full path to the image
          const imagePath = join(
            process.cwd(),
            "..",
            "Admin",
            "public",
            productObj.image
          );

          try {
            // Check if the file exists
            await fs.access(imagePath);

            // If it exists, we'll use a data URL
            const imageBuffer = await fs.readFile(imagePath);
            const base64Image = imageBuffer.toString("base64");
            const mimeType = "image/jpeg"; // Adjust if you have different image types
            productObj.image = `data:${mimeType};base64,${base64Image}`;
          } catch (error) {
            console.error(
              `Image not found for product ${productObj._id}: ${error.message}`
            );
            productObj.image = null; // Or set to a default image URL
          }
        }

        return productObj;
      })
    );

    return new Response(JSON.stringify(productsWithImages), { status: 200 });
  } catch (error) {
    console.error("Error fetching products:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch products" }), {
      status: 500,
    });
  }
}