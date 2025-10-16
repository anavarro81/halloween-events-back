import {EventPayload} from '../types/Event'
import Event from '../models/event.model'
import { HttpError } from '../errors/HttpError'

export const newEventService = async (event: EventPayload) => {

    try {
        return await Event.create(event)        
    } catch (error: any) {
        throw new HttpError (error.message ? error.message : "Error al crear el evento ", 500)
    }

}