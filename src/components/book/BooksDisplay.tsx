type book={
    key : string,
    title:string
    image: string,
    author: string[],
    cover: number,

}

import styles from "@/components/book/BooksDisplay.module.css"
import BookCard from "@/components/book/BookCard"
export default async function Books(){
 const response = await fetch(`https://openlibrary.org/search.json?q=Romance`);
 const data=await response.json();
const books = data.docs.flat();
console.log(books)
return(
    <div className={styles.holder}>
        {books?.map((book)=> <BookCard key={book.key} book={book}/>)}

    </div>
)
}