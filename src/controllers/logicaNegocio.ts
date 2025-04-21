import mongoose, { Document, Schema } from "mongoose";
import {connectDB} from '../dataBase/connect';
connectDB()


//Interface de libro (esto aplica a mi sistema)
export interface bookInterface extends Document {
  ISBN: number;
  title: string;
  author: string;
  publishedYear?: number;
  genre?: string;

}

// Esquema del libro (esto es una forma que necesita mongoose) Va a validar las propiedades que le envie.
const bookSchema = new Schema<bookInterface>({
  ISBN: { type: Number, required: true, unique: true},
  title: {type: String, required: true, trim: true},
  author: {type: String, required: true, trim: true},
  publishedYear: {type: Number},
  genre: {type: String, trim: true},
}, {timestamps:false, versionKey: false}); //Para evitar que me aparezca el objet id y la version.

bookSchema.set("strict", true) //Para evitar que valide otras props que no esten en el schema.
const Book = mongoose.model<bookInterface>("book", bookSchema)//Para acceder a los libros debo de pasar por el esquema.

export const createBook = async (newBook: object) => {
    try {
      const book: bookInterface = new Book(newBook)
      const newBookOnDb = await book.save()  //Para guardar.
      return { success: true, data: newBookOnDb, message: "Libro creado" }
      
    } catch (error: any) {
      return { success: false, message: `Errror al crear libro: ${error.message}` }
    }
  }

  export const getBook = async () => {
    try {
      const books = await Book.find()
      console.log(books)
      return { success: true, data: books, message: "Libros: " }
    } catch (error: any) {
      return { success: false, message: error.message }
    }
  }

  const getBookById = async (id: string) => {
    try {
      const book = await Book.findById(id);
  
      if (!book) {
        return { success: false, message: "Usuario no existente" }
      } else {
        return { success: true, data: book, message: "Usuario filtrado por id" }
      }
    } catch (error: any) {
      return { success: false, message: error.message }
    }
  };

