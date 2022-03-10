import { IUserPost } from "./post.interface";

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  imageUrl: string;
  isVerified: boolean;
  userRole: string;
  posts: IUserPost[];
}

export interface IAuthor {
  id: string;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  imageUrl: string;
  isVerified: boolean;
  userRole: string;
}
