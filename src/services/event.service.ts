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

export const loadEvents = async (events: EventPayload[]) => {
    try {        
        return await Event.insertMany(events)               
    } catch (error: any) {        
        console.error(error)
        throw new HttpError (error.message ? error.message : "Error al cargar los eventos ", 500)        
    }
}

export const getAllEvents = async () => {

    try {

        return await Event.find({})
        
    } catch (error: any) {
      console.error(error)  
      throw new HttpError (error.message ? error.message : "Error al obtener los eventos ", 500)
    }

}

export const getEventById = async (id: string) => {

    try {

        return await Event.findById(id)
        
    } catch (error: any) {
        console.error(error)  
        throw new HttpError (error.message ? error.message : "Error al obtener los eventos ", 500)
    }

}


export const newAttendee = async (attendee: string, id: string) => {

    try {

        const event = await Event.findByIdAndUpdate(
            id, 
            { $addToSet: { attendees: attendee } },
            { new: true }
        ) 

        return event
        
    } catch (error: any) {
        console.error(error)  
        throw new HttpError (error.message ? error.message : "Error al dar de alta el asistente ", 500)

    }

}
