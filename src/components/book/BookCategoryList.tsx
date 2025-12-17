import BookCard from "./BookCard";
import styles from '@/components/book/BookCategoryList.module.css'
export default async function BookCategory({category}){

    const response= await fetch(`https://openlibrary.org/search.json?q=${category}&limit=20&page=1`);
    const data= await response.json();
    const books = data.docs.flat();
console.log( 'cateeeeeeeeeeeeeeeeeeeeg',books)
return(<div className={styles.list}> 
{books?.map((book)=> <BookCard key={book.key} book={book}/>)}
</div>)

}