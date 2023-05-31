export interface IBlog extends Document {
  title: string;
  text: string;
  image: string;
  author: string;
  category?: {
    title?: string;
  };
  date?: string;
  authorDetails?: {
    role?: string;
    avatar?: string;
  };
}
