type book={
    key : string,
    title:string
    image: string,
    author: string[],
    cover: number,

}

import styles from "@/components/book/BooksDisplay.module.css"
import BookCard from "@/components/book/BookCard"
import BookCategory from "./BookCategoryList";
export default async function Books(){
 const response = await fetch(`https://openlibrary.org/search.json?q=Romance`);
 const data=await response.json();
const books = data.docs.flat();
console.log(books)
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
  </div>

  <h2 className={styles.rowTitle}>Horror</h2>
  <BookCategory key={"horror"} category={"horror"} />

  <h2 className={styles.rowTitle}>Romance</h2>
  <BookCategory key={"romance"} category={"romance"} />

  <h2 className={styles.rowTitle}>Fiction</h2>
  <BookCategory key={"Fiction"} category={"Fiction"} />

  <h2 className={styles.rowTitle}>Science</h2>
  <BookCategory key={"Science"} category={"Science"} />
</div>

   
)
}