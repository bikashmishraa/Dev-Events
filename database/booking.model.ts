import { Schema, model,models ,Document } from 'mongoose';

import Event from './event.model'

const BookingSchema = new Schema(
 {
  eventId:{
   type: Schema.Types.ObjectId,
   ref: 'Event',
   required: [true, 'Please add an event ID'],
  },
  email:{
   type: String,
   required: [true, 'Please add an email'],
  },
  createdAt:{
   type: Date,
   default: Date.now,
  },
  updatedAt:{
   type:Date,
   default: Date.now,
  }
 }
)

const Booking = models.Booking || model('Booking', BookingSchema);
export default Booking;