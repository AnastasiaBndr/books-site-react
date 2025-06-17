import type { Route } from "./+types/books";
import booksAPIComponent from "~/API/booksAPI-component";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function clientLoader({ params, }: Route.ClientLoaderArgs) {
    const booksApi = new booksAPIComponent();

    const books = await booksApi.fetchBooksbyName(booksAPIComponent.links.searchUrl,"Harry Potter");
    return books;
}

export default function Book({ loaderData, }: Route.ComponentProps) {
    const { items } = loaderData;
    console.log(items[0])
    return (
        <div>
            <ul>
              {items.map((item:any) => (
                  <li key={item.id}>
                      <h1>{item.volumeInfo.title}</h1>
                      <p>Publisher: {item.volumeInfo.publisher}</p>
                      <p>Pages: {item.volumeInfo.pageCount}</p>
                      <p>Published date: {item.volumeInfo.publishedDate}</p>
                      {(items.volumeInfo?.authors ?? []).length > 0 ? (
  <AuthorsList authors={items.volumeInfo.authors!} />
) : (
  <></>)}
                      <img src={item.volumeInfo.imageLinks.smallThumbnail} alt="" />
                      <p>{item.volumeInfo.description}</p> 
                      <div>
                      
                          
                      </div>
                      
            </li>
          ))}  
            </ul>
          
        </div>
      );
      
}


function AuthorsList({ authors }: { authors: string[] }) {
    return (
      <p>
        {authors.length > 1 ? "Authors: " : "Author: "}
        {authors.map((author) => (
          <span key={author}>{author} </span>
        ))}
      </p>
    );
  }