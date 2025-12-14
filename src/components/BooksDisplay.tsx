type book={
    id : string,
    title:string
    image: string,
    author: string,
    rating: number,
    

}
import styles from "@/components/BooksDisplay.module.css"
export default async function Books(){
 const response = await fetch(`https://api.bigbookapi.com/search-books?api-key=${process.env.BOOK_API_KEY}&query=romance`);
console.log(`https://api.bigbookapi.com/search-books?api-key=${process.env.BOOK_API_KEY}&query=romance`)
const data=await response.json();
const books = data.books.flat();
console.log(books)
return(
    <div className={styles.holder}>
        {books?.map((book)=> (<div key={book.id} className={styles.bookCard}>
            <img className={styles.bookCover} src={book.image} ></img>

            <h1>{book.title}</h1>
            
            <h3> {book.rating.average}</h3>
        </div>))}
        
    </div>
)
}