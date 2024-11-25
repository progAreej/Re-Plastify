// models/AwardedPrize.js
import mongoose from 'mongoose';

const awardedPrizeSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  prizeId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Prize', 
    required: true 
  },
  awardedAt: { 
    type: Date, 
    default: Date.now 
  }
});

export default mongoose.models.AwardedPrize || mongoose.model('AwardedPrize', awardedPrizeSchema);