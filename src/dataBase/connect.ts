import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const mongoURI = 'mongodb://127.0.0.1:27017/crud-libros'; // Nombre de la DB: crud-libros
    await mongoose.connect(mongoURI);
    console.log('Conectado a MongoDB con éxito');
  } catch (error) {
    console.error('Error al conectar con MongoDB:', error);
   
  }
};