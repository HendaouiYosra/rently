type Book = {
    key: string;
  title: string;
  author_name: string;
  first_publish_year: string;
  languages: string[];
};


import BookCard from "./BookCard";
import styles from '@/components/book/BookCategoryList.module.css'
export default async function BookCategory({category}){

    const response= await fetch(`https://openlibrary.org/search.json?q=${category}&limit=20&page=1`);
    const data= await response.json();
    const  books :Book[] = data.docs.flat();

return(<div className={styles.list}> 
{books?.map((book)=> <BookCard key={book.key} book={book}/>)}
</div>)

}