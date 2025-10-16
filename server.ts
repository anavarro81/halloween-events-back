import express from 'express';

// Carga las variables de entorno. Se pueden usar en todo el proyecto. 
import 'dotenv/config'
// Carga la conexion a la bbdd
import connectBD from './config/bd'
import cors from 'cors';
import {corsConfig} from './config/cors'
import helmet from 'helmet';
import ErrorMiddleware from './src/middlewares/error.middleware'
import eventRouter from './src/routes/event.route'

const app = express()

connectBD();
app.use(cors(corsConfig))
app.use(helmet())
// Permite leer los datos que vienen de un formulario
app.use(express.json())

app.use('/event',  eventRouter)



app.use('/', (req, res) => {
    res.send('Server is running...')
})



app.use(ErrorMiddleware)

export default app; 
