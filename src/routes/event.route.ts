import  express  from 'express'
import  {newEvent, loadEvents} from '../controllers/event.controller'

const eventRouter = express.Router()

eventRouter.post('/', newEvent)
eventRouter.post('/loadEvents', loadEvents)

export default eventRouter

