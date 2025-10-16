import {Response, Request, NextFunction} from 'express'
import {validateEvent} from '../utils/validator'
import  * as EventServices from '../services/event.service'

export const newEvent = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    try {

        console.log('newEvent')
        
        const EventPaylod = validateEvent(req.body)

        console.log('EventPaylod ', EventPaylod)

        const createdEvent = await EventServices.newEventService(EventPaylod)

        console.log('createdEvent ', createdEvent)

        res.status(201).json(createdEvent)

        
        
    } catch (error) {
      next(error)  
    }

}