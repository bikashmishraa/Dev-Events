import { Schema, model,models,Document  } from "mongoose";
import { unique } from "next/dist/build/utils";

const EventSchema = new Schema(
 {
   title:{
    type: String,
    required: [true, 'Please add a title'],
   },
   slug:{
    type:String,
    required: [unique,true],
   },
   description:{
    type:String,
    required: [true, 'Please add a description'],
   },
   overview:{
    type: String,
    required: [true, 'Please add an overview'],
   },
   image:{
    type: String,
    required: [true, 'Please add an image'],
   },
   venue:{
    type: String,
    required: [true, 'Please add a venue'],
   },
   location:{
    type: String,
    required: [true, 'Please add a location'],
   },
   date:{
    type: Date,
    required: [true, 'Please add a date'],
   },
   time:{
    type: String,
    required: [true, 'Please add a time'],
   },
   mode:{
    type: String,
    enum: ['online', 'offline', 'hybrid'],
    required: [true, 'Please add a mode'],
   },
   audience:{
    type: String,
    required: [true, 'Please add an audience'],
   },
   agenda:{
    type:[String],
    required: [true, 'Please add an agenda'],
   },
   organizer:{
    type: String,
    required: [true, 'Please add an organizer'],
   },
   tags:{
    type:[String],
    required: [true, 'Please add tags'],
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
const Event = models.Event || model('Event', EventSchema);
export default Event;