import mongoose, { Document, Schema } from "mongoose";
import { connectDB } from '../dataBase/connect';
connectDB()
// Interfaz que representa un libro
export interface IBook extends Document {
  ISBN: number;
  title: string;
  author: string;
  publishedYear?: number;
  genre?: string;
  available: boolean;
}