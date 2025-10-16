import  express  from 'express'
import  {newEvent} from '../controllers/event.controller'

const eventRouter = express.Router()

eventRouter.post('/', newEvent)

export default eventRouter

