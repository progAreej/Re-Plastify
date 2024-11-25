import { NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Prize from '@/models/Prize'

export async function PUT(request, { params }) {
  await dbConnect()
  const { id } = params
  const data = await request.json()
  const prize = await Prize.findByIdAndUpdate(id, data, { new: true })
  return NextResponse.json(prize)
}

export async function DELETE(request, { params }) {
  await dbConnect()
  const { id } = params
  await Prize.findByIdAndDelete(id)
  return NextResponse.json({ message: 'Prize deleted successfully' })
}