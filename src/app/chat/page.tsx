"use client"
import { Message } from "@/types/chat";
import ReactMarkdown from "react-markdown";
import Navbar from "@/components/navbar/navbar";
import remarkGfm from "remark-gfm";
import styles from "@/app/chat/page.module.css"
import { isDynamicPostpone } from "next/dist/server/app-render/dynamic-rendering";
import { useState } from "react"
import History from "@/components/chat/History";
export default  function Chat(){
   const [prompt, setPrompt]= useState("");
   const [modelResponse,setModelResponse]=useState("");
   const [isLoading, setIsLoading]=useState(false);
   const [messages,setMessages]= useState<Message[]>([]);
  async function handleSend(e:React.FormEvent){
e.preventDefault();
setIsLoading(true);
setMessages((prev)=>[...prev,{role:"user",content: prompt }]);
setPrompt("");

try{    const response= await fetch("/api/chat",
  {method: "POST", 
    headers:{"Content-type":"application/json"},
    body:JSON.stringify({prompt})

})
    const data=await response.json();
    setModelResponse(data.text)
    console.log("console before appending the result",modelResponse)
    setMessages((prev)=>[...prev,{role:"assistant",content:data.text }]);
    console.log(messages)
}
finally{setIsLoading(false);}


  }

    return (
    <div >

      <Navbar></Navbar>
    <div className={styles.page}>
      
      <History></History>
  <div className={styles.holder}>
    <div className={styles.messages}>
      {messages.map((m, i) => (
        <div
          key={i}
          className={
            m.role === "user"
              ? styles.userMessage
              : styles.assistantMessage
          }
        > <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {m.content}
          </ReactMarkdown>b  
        </div>
      ))}

      {isLoading && (
        <div className={styles.assistantMessage}>Typing…</div>
      )}
    </div>

    <form onSubmit={handleSend} className={styles.form}>
      <input
        className={styles.input}
        type="text"
        placeholder="How can I help you?"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button className={styles.sendBtn} type="submit">
        Send
      </button>
    </form>
  </div> </div></div>
);

}