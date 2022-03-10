import Image from "next/image";
import Link from "next/link";
import React, { FunctionComponent } from "react";
import { IPost } from "../interfaces/post.interface";

const Article: FunctionComponent<IPost> = (props: IPost) => {
  return (
    <div className="flex flex-auto flex-col items-center rounded-lg p-2">
      <div className="flex items-center space-x-2">
        <div className="h-16 w-16 rounded-full">
          {props.imageUrl ? (
            <Image
              src={props.imageUrl}
              alt={props.title}
              layout="fill"
              className="h-full w-full rounded-full object-cover"
            />
          ) : (
            <span className="capitalize font-bold">
              {props.user.firstName[0] + props.user.lastName[0]}
            </span>
          )}
        </div>
        <div className="flex flex-col text-left">
          <Link href={`/${props.user.userName}`}>
            <a className="hover:underline text-black">
              {`${props.user.firstName} ${props.user.lastName}`}.
              <span className="text-gray-600">{props.createdAt}</span>
            </a>
          </Link>
          <strong>
            <em>{props.user.userName}</em>
          </strong>
        </div>
      </div>
      <div className="flex flex-nowrap flex-auto items-center">
        <div className="block">
          <div>
            <Link href={`/article/${props.slug}`} passHref>
              <h3 className="text-xl text-black font-bold hover:text-sky-600">
                <a className="hover:no-underline">{props.title}</a>
              </h3>
            </Link>
          </div>
          <p className="text-lg text-gray-700">
            {props.content.length > 40
              ? `${props.content.slice(0, 41)}...`
              : props.content}
          </p>
        </div>
        <div className="block">
          <Link href={props.imageUrl} passHref>
            <Image src={props.imageUrl} alt="cover image" layout="fill" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Article;
