const categories = ["horror", "romance", "fiction", "science","Space"];

import styles from "@/components/book/BooksDisplay.module.css"
import BookCard from "@/components/book/BookCard"
import BookCategory from "./BookCategoryList";
import SearchBar from "../SearchBar/SearchBar";
import HeaderSearch from "./HeaderSearch";
export default async function Books(){


return(

  <div className={styles.holder}>

{categories.map((category)=>( <div key={categories.indexOf(category)}><h2 className={styles.rowTitle}>{category}</h2>
  <BookCategory key={category} category={category} /> </div>))}

</div>

   
)
}