import { NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Prize from '@/models/Prize'

export async function GET() {
  await dbConnect()
  const prizes = await Prize.find({})
  return NextResponse.json(prizes)
}

export async function POST(request) {
  await dbConnect()
  const data = await request.json()
  const prize = await Prize.create(data)
  return NextResponse.json(prize)
}