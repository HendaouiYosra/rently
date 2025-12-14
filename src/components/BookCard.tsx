import styles from "@/components/BookCard.module.css";

export default function BookCard({ book }) {
  return (
    <div className={styles.bookCard}>
      <div className={styles.imageWrapper}>
        <img
          className={styles.bookCover}
          src={`https://covers.openlibrary.org/b/olid/${book.cover_edition_key}.jpg`}
          alt={book.title}
        />
      </div>

      <h2 className={styles.title}>{book.title}</h2>
      <p className={styles.author}>{book.author_name?.[0]}</p>
    </div>
  );
}
