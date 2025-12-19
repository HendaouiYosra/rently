type Book = {
    key: string;
  title: string;
  author_name: string;
  first_publish_year: string;
  languages: string[];
};

import BookCard from "./BookCard";
import styles from "@/components/book/BooksDisplay.module.css"
import SearchBar from "../SearchBar/SearchBar"
import HeaderSearch from "./HeaderSearch";
export default async function BookSearch({query}){

const response= await fetch(`https://openlibrary.org/search.json?q=${query}`);
const data = await response.json()
console.log(data);
    const  books :Book[] = data.docs;
    
    return(
  
  <div className={styles.holder}>

   

<div className={styles.list}> 
{books?.map((book)=> <BookCard key={book.key} book={book}/>)}
</div>
 </div>)}


