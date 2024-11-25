import { NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Prize from '@/models/Prize'

export async function GET() {
  await dbConnect()
  const prizes = await Prize.find({})
  return NextResponse.json(prizes)
}