import {Response, Request, NextFunction} from 'express'
import {validateEvent} from '../utils/validator'
import  * as EventServices from '../services/event.service'
import {HttpError} from '../errors/HttpError'

export const newEvent = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    try {
        
        const EventPaylod = validateEvent(req.body)
        const createdEvent = await EventServices.newEventService(EventPaylod)
        res.status(201).json(createdEvent)        
        
    } catch (error) {
      next(error)  
    }

}


export const loadEvents = async (req: Request, res: Response, next: NextFunction): Promise<void> => { 


  try {

    const events = await EventServices.loadEvents(req.body)
    res.status(201).json(events)
    
  } catch (error) {
    next(error)
  }

}

export const getAllEvents = async(req: Request, res: Response, next: NextFunction): Promise<void> => {

    try {

      const events = await EventServices.getAllEvents()
      res.status(200).json(events)
      
    } catch (error) {
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

    
  } catch (error) {
    console.error(error)
    next(error)

  }
}

