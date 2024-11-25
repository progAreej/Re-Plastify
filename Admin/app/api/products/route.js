// // app/api/products/route.js

// import { NextResponse } from 'next/server';
// import connectDB from '@/lib/mongodb';
// import Product from '@/models/Product';

// export async function POST(request) {
//     try {
//         await connectDB();
        
//         const body = await request.json();
//         const product = await Product.create(body);
        
//         return NextResponse.json(product, { status: 201 });
//     } catch (error) {
//         return NextResponse.json(
//             { error: 'Failed to create product' },
//             { status: 500 }
//         );
//     }
// }








// app/api/products/route.jط
import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Product from '@/models/Product';
import multer from 'multer';
import path from 'path';
import { writeFile } from 'fs/promises';
import { headers } from 'next/headers';

// Configure multer for file upload
const upload = multer({
    storage: multer.memoryStorage(),
    fileFilter: function (req, file, cb) {
        const filetypes = /jpeg|jpg|png|gif/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        
        if (mimetype && extname) {
            return cb(null, true);
        }
        cb(new Error('Error: Images Only!'));
    },
});




export async function GET() {
    try {
        await connectDB();
        console.log('Connected to MongoDB');

        const products = await Product.find({}).sort({ createdAt: -1 });
        console.log(`Retrieved ${products.length} products`);

        return NextResponse.json(products, { status: 200 });
    } catch (error) {
        console.error('Error in GET /api/products:', error);
        return NextResponse.json(
            { error: 'Failed to fetch products' },
            { status: 500 }
        );
    }
}




// Helper function to process upload
async function uploadFile(formData) {
    const file = formData.get('image');
    if (!file) {
        throw new Error('No file uploaded');
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create unique filename
    const filename = `${Date.now()}-${file.name}`;
    const uploadDir = path.join(process.cwd(), 'public/uploads');
    const filepath = path.join(uploadDir, filename);

    await writeFile(filepath, buffer);
    return `/uploads/${filename}`;
}

export async function POST(request) {
    try {
        await connectDB();

        const formData = await request.formData();
        const imageUrl = await uploadFile(formData);

        const productData = {
            name: formData.get('name'),
            description: formData.get('description'),
            price: parseFloat(formData.get('price')),
            quantity: parseInt(formData.get('quantity')),
            image: imageUrl,
        };

        const product = await Product.create(productData);
        
        return NextResponse.json(product, { status: 201 });
    } catch (error) {
        console.error('Error in POST /api/products:', error);
        return NextResponse.json(
            { error: 'Failed to create product' },
            { status: 500 }
        );
    }
}

export const config = {
    api: {
        bodyParser: false,
    },
};