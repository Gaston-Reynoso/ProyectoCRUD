import mongoose, { Document, Schema } from "mongoose";
import {connectDB} from '../dataBase/connect';
connectDB()


//Interface
export interface bookInterface extends Document {
  ISBN: number;
  title: string;
  author: string;
  publishedYear?: number;
  genre?: string;
  available: boolean;
}

// Esquema del libro
const bookSchema = new Schema<bookInterface>({
  ISBN: { type: Number, required: true, unique: true},
  title: {type: String, required: true, trim: true},
  author: {type: String, required: true, trim: true},
  publishedYear: {type: Number},
  genre: {type: String, trim: true},
  available: {type: Boolean, default: true},
});

const Book = mongoose.model<bookInterface>("book", bookSchema)

export const createBook = async (newBook: object) => {
    try {
      const book: bookInterface = new Book(newBook)
      const newBookOnDb = await book.save() 
      console.log("Libro creado")
      return { success: true, data: newBookOnDb, message: "Libro creado" }
      
    } catch (error: any) {
      return { success: false, message: `Errror al crear libro: ${error.message}` }
    }
  }


