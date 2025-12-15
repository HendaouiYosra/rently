import styles from "./BookDetails.module.css";

function getDescription(desc: any) {
  if (!desc) return "";
  if (typeof desc === "string") return desc;
  if (typeof desc === "object" && "value" in desc) return desc.value;
  return "";
}

export default async function BookDetails({ params, searchParams }: { params: { book: string }, searchParams : { cover: string }}) {
  const { book } =  await params;
  const {cover} = await searchParams;
  console.log("boook",book);
  

const response= await fetch(`https://openlibrary.org/works/${book}.json`);
const details=await response.json();
const descriptionText = getDescription(details.description);
console.log("coverrrrrrr",cover);
console.log(details);
console.log(details.subjects);
   return (
   <div className={styles.page}>
  <div className={styles.hero}>
    {/* background overlay netflix */}
    <div className={styles.heroBg}>
      <div className={styles.heroOverlay} />
      <div className={styles.heroBottomFade} />
    </div>

    <div className={styles.heroInner}>
      <div className={styles.coverWrap}>
        <img
          className={styles.cover}
          src={`https://covers.openlibrary.org/b/olid/${cover}.jpg`}
          alt={details.title}
        />
      </div>

      <div className={styles.content}>
        <div className={styles.badgeRow}>
          <span className={styles.badge}>B • BOOK</span>
          <span className={styles.badgeLight}>TRENDING</span>
        </div>

        <h1 className={styles.title}>{details.title}</h1>

        {details.subtitle ? (
          <p className={styles.subtitle}>{details.subtitle}</p>
        ) : null}

        {/* buttons netflix-like */}
        <div className={styles.actions}>
          <button className={styles.primaryBtn}>＋ Ma liste</button>
          <button className={styles.secondaryBtn}>＋ reviews</button>
          <button className={styles.iconBtn} aria-label="More info">
            i
          </button>
        </div>

        {descriptionText ? (
          <p className={styles.description}>{descriptionText}</p>
        ) : (
          <p className={styles.descriptionMuted}>No description available.</p>
        )}

        {Array.isArray(details.subjects) && details.subjects.length > 0 ? (
          <div className={styles.tagsWrap}>
            <div className={styles.tagsTitle}>Genres / Tags</div>
            <div className={styles.tags}>
              {details.subjects.slice(0, 18).map((tag: string) => (
                <span className={styles.tag} key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  </div>
</div>

  );
}
