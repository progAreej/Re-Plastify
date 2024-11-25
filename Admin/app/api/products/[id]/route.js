// File: app/api/products/[id]/route.js

import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Product from '@/models/Product';
import { writeFile } from 'fs/promises';
import path from 'path';

export async function GET(request, { params }) {
    try {
        await connectDB();
        const { id } = params;
        const product = await Product.findById(id);
        if (!product) {
            return NextResponse.json(
                { error: 'Product not found' },
                { status: 404 }
            );
        }
        return NextResponse.json(product, { status: 200 });
    } catch (error) {
        console.error('Error in GET /api/products/[id]:', error);
        return NextResponse.json(
            { error: 'Failed to fetch product' },
            { status: 500 }
        );
    }
}

export async function PUT(request, { params }) {
    try {
        await connectDB();

        const { id } = params;
        const formData = await request.formData();

        const productData = {
            name: formData.get('name'),
            description: formData.get('description'),
            price: parseFloat(formData.get('price')),
            quantity: parseInt(formData.get('quantity')),
        };

        const file = formData.get('image');
        if (file) {
            const imageUrl = await uploadFile(formData);
            productData.image = imageUrl;
        }

        const updatedProduct = await Product.findByIdAndUpdate(id, productData, { new: true });
        
        if (!updatedProduct) {
            return NextResponse.json(
                { error: 'Product not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(updatedProduct, { status: 200 });
    } catch (error) {
        console.error('Error in PUT /api/products/[id]:', error);
        return NextResponse.json(
            { error: 'Failed to update product' },
            { status: 500 }
        );
    }
}

export async function DELETE(request, { params }) {
    try {
        await connectDB();

        const { id } = params;
        const deletedProduct = await Product.findByIdAndDelete(id);
        
        if (!deletedProduct) {
            return NextResponse.json(
                { error: 'Product not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({ message: 'Product deleted successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error in DELETE /api/products/[id]:', error);
        return NextResponse.json(
            { error: 'Failed to delete product' },
            { status: 500 }
        );
    }
}

// Helper function to process file upload (same as in the main route file)
async function uploadFile(formData) {
    const file = formData.get('image');
    if (!file) {
        throw new Error('No file uploaded');
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const filename = `${Date.now()}-${file.name}`;
    const uploadDir = path.join(process.cwd(), 'public/uploads');
    const filepath = path.join(uploadDir, filename);

    await writeFile(filepath, buffer);
    return `/uploads/${filename}`;
}