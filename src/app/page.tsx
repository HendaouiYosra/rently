import Books from "@/components/book/BooksDisplay";
import { auth0 } from "../lib/auth0";
import LoginButton from "@/components/LoginButton";
import LogoutButton from "@/components/LogoutButton";
import Navbar from "@/components/navbar/navbar"
import Profile from "@/components/Profile";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import BookSearch from "@/components/book/BookSearch";
import HeaderSearch from "@/components/book/HeaderSearch";


export default async function Home({searchParams}:{searchParams:{q: string}}) {
  const {q}=await searchParams;
  console.log(q)
  const session = await auth0.getSession();
  const user = session?.user;
 if (!session) {
    redirect("/auth/login");
  }
  return (<>
   
    <div className="app-container">
       <Navbar/>
      <div className="flex-1 min-h-0 overflow-y-auto" >
        
        
          {user ? ( 
            <div className="logged-in-section">
 <HeaderSearch></HeaderSearch>
              {q?(<BookSearch query={q}></BookSearch>):( <Suspense fallback={<p className="flex items-center justify-center min-h-screen text-white">Loading ...</p>}><Books/></Suspense>)}
           
              
            </div>
          ) : (
            <>
              <p className="action-text">
                Welcome! Please log in to access your protected content.
              </p>
              <LoginButton />
            </>
          )}
        </div>
      </div>
    
    </>
  );
}