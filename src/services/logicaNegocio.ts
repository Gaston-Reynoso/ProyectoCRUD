import { IBook } from '../interfaces/book.interface';
import Book from '../models/bookModel';


const createBook = async (newBook: IBook) => {
    try {
      const book: IBook = new Book(newBook)
      const newBookOnDb = await book.save() // ins{ a: 1 }ertOne()
      return { sucess: true, data: newBookOnDb, message: "Libro creado" }
    } catch (error: any) {
      return { sucess: false, message: error.message }
    }
  }