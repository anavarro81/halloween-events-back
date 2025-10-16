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


export const validateEvent =  (payload: EventPayload) => {

    const  {error, value} = EventSchema.validate(payload, {abortEarly: false})

    console.log ('error al validar ', error)

    if (error) {
        const errors = error.details.map(e => e.message).join(", ")

        console.log('errors >> ', errors)

        throw new HttpError(errors, 400)

    } 
    return value 
    

}

