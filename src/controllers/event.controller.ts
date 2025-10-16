import {Response, Request, NextFunction} from 'express'

export const newEvent = async (req: Request, res: Response, next: NextFunction) => {

    try {
        
        const {title, date, image, location, description, attendees} =  req.body 

        
        
    } catch (error) {
        
    }

}