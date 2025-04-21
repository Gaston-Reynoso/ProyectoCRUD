import mongoose from 'mongoose';

process.loadEnvFile()
const mongoURI = process.env.mongoURI || ""
const connectDB = async () => {
  try {
       await mongoose.connect(mongoURI);
    console.log('Conectado a MongoDB con éxito');
  } catch (error) {
    console.error('Error al conectar con MongoDB:', error);
   
  }
};

export  { connectDB }