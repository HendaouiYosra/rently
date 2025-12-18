"use client"

import { useState } from "react"
import { useRouter } from "next/navigation";
export default function SearchBar(){
    const [query, setQuery]=useState("");
  const router = useRouter();
 function onSubmit(e){
         e.preventDefault();
        const q = query.trim();
        console.log("queryyyyy",q);
    router.push("/?q=" + query);
    
    }
    return(
 <form onSubmit={onSubmit} >   
    <input value={query} onChange={(e)=> setQuery(e.target.value)}></input>
<button type="submit" className="rounded-xl px-4 py-2 bg-white/10 text-white" > validate</button>

</form>)
}