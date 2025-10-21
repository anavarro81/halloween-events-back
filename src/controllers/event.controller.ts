import {Response, Request, NextFunction} from 'express'
import {validateEvent, validateAttendee} from '../utils/validator'
import  * as EventServices from '../services/event.service'
import {HttpError} from '../errors/HttpError'

export const newEvent = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    try {
        
        const EventPaylod = validateEvent(req.body)
        const createdEvent = await EventServices.newEventService(EventPaylod)
        res.status(201).json(createdEvent)        
        
    } catch (error:any) {
      error.context = {controller: 'event.controller', function: 'newEvent' }
      next(error)  
    }

}


export const loadEvents = async (req: Request, res: Response, next: NextFunction): Promise<void> => { 


  try {

    const events = await EventServices.loadEvents(req.body)
    res.status(201).json(events)
    
  } catch (error: any) {
    error.context = {controller: 'event.controller', function: 'loadEvents' }
    next(error)
  }

}

export const getAllEvents = async(req: Request, res: Response, next: NextFunction): Promise<void> => {

    try {

      const events = await EventServices.getAllEvents()
      res.status(200).json(events)
      
    } catch (error: any) {
      error.context = {controller: 'event.controller', function: 'getAllEvents' }
      next(error)
    }

}

export const getEventById = async(req: Request, res: Response, next: NextFunction): Promise<void> => { 

  try {

    const {id} = req.params

    if (!id) {
      throw new HttpError("id no informado", 400)      
    }

    const event = await EventServices.getEventById(id)

    res.status(200).json(event)

    
  } catch (error: any) {
    error.context = {controller: 'event.controller', function: 'getEventById' }
    next(error)

  }
}


export const newAttendee = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

  try {
    
    const {id} = req.params

    let {attendee} = req.body
    if (!attendee || !id) {
      throw new HttpError("Datos para actualizar el asistente no validos", 400)      
    }   

    validateAttendee(attendee)   

    const event = await EventServices.newAttendee(attendee, id)

    res.status(200).json(event)
    
  } catch (error: any) {
    error.context = {controller: 'event.controller', function: 'newAttendee' }
    next(error)
  }

}
