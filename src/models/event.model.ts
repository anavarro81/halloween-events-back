import mongoose, {Schema} from "mongoose";


const eventSchema = new Schema({
    title: {type: String, required: true, maxlenght: 20, trim:true}, 
    date: {type: Date, required: true},
    image: {type: String, required: true, trim:true},   
    location: {type: String, required: true, trim:true},   
    description: {type: String, required: true, trim:true},   
    attendees: [{type: String, trim: true}]

})

const Event = mongoose.model('Event', eventSchema)

export default Event
    


