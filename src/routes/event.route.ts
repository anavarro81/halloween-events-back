import  express  from 'express'
import  {newEvent, loadEvents, getAllEvents, getEventById, newAttendee} from '../controllers/event.controller'

const eventRouter = express.Router()

eventRouter.post('/', newEvent)
eventRouter.post('/loadEvents', loadEvents)
eventRouter.get('/', getAllEvents)
eventRouter.get('/:id', getEventById)
eventRouter.put('/newAttendee/:id', newAttendee)

export default eventRouter

