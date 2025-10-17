import  express  from 'express'
import  {newEvent, loadEvents, getAllEvents} from '../controllers/event.controller'

const eventRouter = express.Router()

eventRouter.post('/', newEvent)
eventRouter.post('/loadEvents', loadEvents)
eventRouter.get('/', getAllEvents)

export default eventRouter

