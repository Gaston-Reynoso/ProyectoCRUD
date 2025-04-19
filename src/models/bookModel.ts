import mongoose, { Documnet, Schema } from 'mongoose';
import { IBook } from '../interfaces/book.interface';


// Esquema del libro
const bookSchema = new mongoose.Schema<IBook>({
  ISBN: { type: Number, required: true, unique: true},
  title: {type: String, required: true, trim: true},
  author: {type: String, required: true, trim: true},
  publishedYear: {type: Number},
  genre: {type: String, trim: true},
  available: {type: Boolean, default: true},
});

// Exportamos el modelo
const Book = mongoose.model<IBook>('Book', bookSchema);
export default Book;
