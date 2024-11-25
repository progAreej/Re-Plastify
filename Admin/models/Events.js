import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  title: {
    type: String,
    required: [true, 'Please provide an event title'],
  },
  date: {
    type: Date,
    required: [true, 'Please provide the event date'],
  },
  description: {
    type: String,
    required: [true, 'Please provide an event description'],
  },
  location: {
    type: String,
    required: [true, 'Please provide the event location'],
  },
  eventType: {
    type: String,
    enum: ['online', 'local'], // Specifies allowed values
    required: [true, 'Please specify if the event is online or local'],
  },
}, { timestamps: true });

export default mongoose.models.Event || mongoose.model('Event', EventSchema);