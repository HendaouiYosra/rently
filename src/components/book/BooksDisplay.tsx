const categories = ["horror", "romance", "fiction", "science","Space"];

import styles from "@/components/book/BooksDisplay.module.css"
import BookCard from "@/components/book/BookCard"
import BookCategory from "./BookCategoryList";
export default function Books(){

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

{categories.map((category)=>( <div key={categories.indexOf(category)}><h2 className={styles.rowTitle}>{category}</h2>
  <BookCategory key={category} category={category} /> </div>))}



</div>

   
)
}