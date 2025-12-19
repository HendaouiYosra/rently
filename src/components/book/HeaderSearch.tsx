import styles from "@/components/book/HeaderSearch.module.css"
import SearchBar from "../SearchBar/SearchBar"
export default function HeaderSearch(){

    return( <div className={styles.hero}>
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
  </div>)
}