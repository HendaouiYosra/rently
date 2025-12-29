import { z } from "zod";

export const searchBooks = {
  description:
    "Search books using Open Library. Use when the user asks for books by title, author, or general query.",

  inputSchema: z.object({
    q: z.string().min(1).describe("Search query like book title or author"),
  }),


execute: async ({ q }: { q: string }) => {
  console.log("search tool hit with ", q)
  const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(q)}`;
  const res = await fetch(url);
  const data = await res.json();
console.log("result ", (data.docs ).map((book: any) => book.title))
  // ✅ Only book names
  return (data.docs ).map((book: any) => book.title)
 
}

};
