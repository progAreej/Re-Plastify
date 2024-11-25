import mongoose from 'mongoose'

const PrizeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pointsRequired: { type: Number, required: true },
  imageUrl: { type: String, required: true },
})

export default mongoose.models.Prize || mongoose.model('Prize', PrizeSchema)