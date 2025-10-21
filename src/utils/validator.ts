import Joi from "joi";
import {EventPayload} from '../types/Event'
import {HttpError} from '../errors/HttpError'

const EventSchema = Joi.object({

    title: Joi.string().required(),
    date: Joi.date().required(),
    image: Joi.string().required(),
    location: Joi.string().required(),
    description: Joi.string().required(),
    attendees:  Joi.array().items(
        Joi.string().required()
    )

})

const AttendeeSchema = Joi.object({
    attendee: 
    Joi.string()
    .required()
    .length(2)
})


export const validateEvent =  (payload: EventPayload) => {

    const  {error, value} = EventSchema.validate(payload, {abortEarly: false})

    

    if (error) {
        const errors = error.details.map(e => e.message).join(", ")
        throw new HttpError(errors, 400)
    } 
    return value 
    

}

export const validateAttendee = (attendee: string) => {
    

    const {error, value} = AttendeeSchema.validate({attendee})

    if (error) {
        const errors = error.details.map(e => e.message).join(", ")
        throw new HttpError(errors, 400)
    } 
    return value 


}
