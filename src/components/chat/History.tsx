'use Client'

import styles from "@/components/chat/History.module.css"
import { Conversation } from "@/types/chat";
import { useState } from "react";
export default function History(){  
    const [open, setOpen] = useState(true);
    const [history, setHistory]=useState<Conversation[]>([ {
   
  
        id: "conv-001",
        title: "Bug fix session",
        createdAt: "2025-12-20T10:15:00.000Z",
        updatedAt: "2025-12-20T10:20:00.000Z",
        messages: [
          { role: "user", content: "My Two Sum solution returns the wrong index sometimes." },
          { role: "assistant", content: "That happens when you use index() and duplicates exist—use a map for indices." },
          { role: "user", content: "Okay, can you show me the clean approach?" },
        ],
      },
   
  
    
      {
        id: "conv-002",
        title: "Next.js UI ideas",
        createdAt: "2025-12-21T14:05:00.000Z",
        updatedAt: "2025-12-21T14:12:00.000Z",
        messages: [
          { role: "user", content: "I want a chat UI with a history sidebar like ChatGPT." },
          { role: "assistant", content: "Use a conversations list + activeConversationId and render messages for the selected one." },
          { role: "user", content: "How do I name the component and CSS module files?" },
        ],
      },
  
  
      {
        id: "conv-003",
        title: "Book search feature",
        createdAt: "2025-12-22T09:30:00.000Z",
        updatedAt: "2025-12-22T09:38:00.000Z",
        messages: [
          { role: "user", content: "Search Open Library by title + author + subject—best practice?" },
          { role: "assistant", content: "Build a query string and debounce input; cache results with React Query or SWR." },
          { role: "user", content: "Nice—also how can I limit rendered books?" },
        ],
     
  },]);
 
 return (
    <div className={styles.historyWrapper}>
      

      {open && (
        <div className={styles.historyPanel}>
          <p className={styles.historyTitle}>Conversations</p>

          <div className={styles.historyList}>
            {history.map((conversation) => (
              <div key={conversation.id} className={styles.historyItem}>
                {conversation.title}
              </div>
            ))}
          </div>
        </div>
      )}
      
    </div>
  );
}