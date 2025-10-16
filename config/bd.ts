import mongoose from "mongoose";

export const connectBD = async () => {

    try {

        if (!process.env.BD_URI) throw new Error ('BD_URI no definida')

        const connection = await mongoose.connect(process.env.BD_URI)

        console.log('Conexion a la base de datos realizada correctamente')
        
    } catch (error) {

        console.error('Error conectando a la base de datos ', error)
        process.exit(1)
        
    }

}

export default connectBD