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
} from "@/components/navbar/dropdown-menu"

export default function Navbar(){
    const {user}=useUser();
return(<div className={styles.nav}>
  <img className={styles.logo}  src="/logo.png" alt="Logo" />

  <div className={styles.navigation}>
    <a className={styles.link} href="">ChatBot</a>
    <a className={styles.link} href="">Profile</a>
    <a className={styles.link} href="">Home</a>
    <a className={styles.link} href="">About</a>

    <DropdownMenu>
      <DropdownMenuTrigger className={styles.userTrigger}>
        <img className={styles.picture} src={user?.picture} alt="My Account" />
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
        <DropdownMenuItem>
          <a href="/auth/logout" className="text-red-600">logout</a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</div>)

}