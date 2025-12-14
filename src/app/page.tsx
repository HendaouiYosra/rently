import Books from "@/components/BooksDisplay";
import { auth0 } from "../lib/auth0";
import LoginButton from "@/components/LoginButton";
import LogoutButton from "@/components/LogoutButton";
import Navbar from "@/components/navbar";
import Profile from "@/components/Profile";
import { redirect } from "next/navigation";


export default async function Home() {
  
  const session = await auth0.getSession();
  const user = session?.user;
 if (!session) {
    redirect("/auth/login");
  }
  return (<>
   
    <div className="app-container">
       <Navbar/>
      <div className="w-full" >
        
        
          {user ? (
            <div className="logged-in-section">
              <Books/>
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