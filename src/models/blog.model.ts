import { Schema, model } from "mongoose";
import { IBlog } from "../types/blog.type";
const BlogSchema = new Schema<IBlog>(
  {
    title: { type: String, required: true, trim: true },
    text: { type: String, required: true, trim: true },
    author: { type: String, required: true },
    image: { type: String, required: true },
    date: { type: String },
    category: { title: { type: String } },
    authorDetails: { role: { type: String }, avatar: { type: String } },
  },
  { timestamps: true }
);
export const BlogModel = model<IBlog>("blog", BlogSchema);
