'use client'
import { useUser } from "@auth0/nextjs-auth0";
import styles from "@/components/profile/ProfileCard.module.css"
const preferences=["fantazy", "style"]
export default function ProfileCard(){
 const {user}=useUser();
    console.log(user);
  return  (
    <div className="
  h-[80vh]
  w-full
  max-w-[420px]
  lg:max-w-[360px]
  xl:max-w-[380px]
  overflow-y-auto
  overflow-x-hidden
  p-4 sm:p-6
  flex
  justify-center
  scrollbar-hide
">

      <div className={styles.card}>

        <div className={styles.avatarWrap}>
          <img
            src={user?.picture}
            alt={user?.name}
            className={styles.avatar}
          />
        </div>

        <h2 className={styles.title}>{user?.name}</h2>

        <p className={styles.subtitle}>
          {user?.nickname || user?.email}
        </p>

        <p className={styles.description}>
          A passionate book lover who enjoys exploring new stories and ideas.
          Reading is a daily ritual, often finishing at least one book.
        </p>

        <div className={styles.tags}>
          {preferences.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>

      </div>
    </div>
  );

}