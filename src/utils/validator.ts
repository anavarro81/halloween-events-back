import Joi from "joi";
// import {EventPayload} from '../types/event'

const EventSchema = Joi.object({

    title: Joi.string().required(),
    data: Joi.date().required(),
    image: Joi.string().required(),
    location: Joi.string().required(),
    description: Joi.string().required(),
    attendees:  Joi.array().items(
        Joi.string().required()
    )

})


// export const validateEvent =  (payload: EventPayload) => {

//     const  {error, value} = EventSchema.validate(payload, {abortEarly: false})

//     if (error) {

//     } else {
//         return value 
//     }

// }

