"use client"
import { useUser } from "@auth0/nextjs-auth0"
import styles from "./Navbar.module.css"
import * as React from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import LogoutButton from "./LogoutButton"
export default function Navbar(){
    const {user}=useUser();
return(<div className={styles.nav}>
  <img className={styles.logo} 
  height={100} src="/logo.jpg" alt="" />
 
  <div className={styles.navigation}>
    <a className={styles.link} href=""> profile</a>
    <a className={styles.link} href=""> home</a>
    <a className={styles.link} href=""> about us</a>

    <DropdownMenu>
  <DropdownMenuTrigger>    <img className={styles.picture} src={user?.picture} alt="" /></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>

    <DropdownMenuItem>Subscription</DropdownMenuItem>
    <DropdownMenuItem> <a href="/auth/logout" className="text-red-600">logout</a></DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
  </div>

</div>)

}