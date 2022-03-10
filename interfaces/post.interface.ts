import { IAuthor } from "./user.interface";

export interface IPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  imageUrl: string;
  numberofComments: number;
  numberofLikes: number;
  user: IAuthor;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  imageUrl: string;
  numberofComments: number;
  numberofLikes: number;
  createdAt: Date;
  updatedAt: Date;
}
