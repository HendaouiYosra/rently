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
export default async function BookSearch({query}){

const response= fetch(`https://openlibrary.org/search.json?q=${query}`);
const data = (await response).json()

    const  books :Book[] = data.docs.flat();
    return(
  
  <div className={styles.holder}>
  <div className={styles.hero}>
    <h1 className={styles.heroTitle}>Browse Our Collection</h1>
    <p className={styles.heroSubtitle}>
      600+ books • Multiple categories • New finds every day
    </p>

    <div className={styles.tags}>
      <span className={styles.tag}>Trending</span>
      <span className={styles.tag}>Top Rated</span>
      <span className={styles.tag}>Short Reads</span>
      <span className={styles.tag}>Classics</span>
    </div>
    <SearchBar></SearchBar>
  </div>
<div className={styles.list}> 
{books?.map((book)=> <BookCard key={book.key} book={book}/>)}
</div>
 </div>)}


