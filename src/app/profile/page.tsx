import BookCategory from "@/components/book/BookCategoryList"
import Books from "@/components/book/BooksDisplay"
import ProfileCard from "@/components/profile/ProfileCard"
import styles from "@/app/profile/profile.module.css"
import Navbar from "@/components/navbar/navbar"
export default function Profile(){
    return(
    <div>
        <Navbar></Navbar>
        <div className={styles.holder}>
        
        <ProfileCard></ProfileCard>
        <div className="h-[80vh] w-[80vw]"><Books ></Books></div>
        

    </div></div>)
}