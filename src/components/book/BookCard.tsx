

import styles from "@/components/book/BookCard.module.css"
import Link from "next/link";

export default function BookCard({ book }) {
  const varId=book.key
  const id=varId.split("/").pop();
 
  return (
    <Link href={`/${id}?cover=${book.cover_edition_key}`}>
    <div className={styles.bookCard} >
      <div className={styles.imageWrapper}>
        <img
          className={styles.bookCover}
          src={`https://covers.openlibrary.org/b/olid/${book.cover_edition_key}.jpg`}
          alt={book.title}         
        />
      </div>

      <h2 className={styles.title}>{book.title}</h2>
      <p className={styles.author}>{book.author_name?.[0]}</p>
      <p className={`${styles.author} ${styles.year}`}>
  {book.first_publish_year}
</p>


    <div className={styles.languages}>
  {book.language?.slice(0, 3)?.map((language) => (
    <span key={language} className={styles.languageTag}>
      {language.toUpperCase()}
    </span>
  ))}
  {book.language?.length > 3 && (
    <span className={styles.languageMore}>
      +{book.language.length - 3}
    </span>
  )}
</div>

    </div></Link>
  );
}
