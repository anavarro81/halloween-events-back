import  express  from 'express'
import  {newEvent, loadEvents, getAllEvents, getEventById} from '../controllers/event.controller'

const eventRouter = express.Router()

eventRouter.post('/', newEvent)
eventRouter.post('/loadEvents', loadEvents)
eventRouter.get('/', getAllEvents)
eventRouter.get('/:id', getEventById)

export default eventRouter

