import { generateText,streamText, stepCountIs} from "ai";
import { searchBooks } from "@/lib/tools/searchBooks";
import { google } from '@ai-sdk/google';

export async function POST(req : Request){
    const {prompt} =await req.json();
    const {text}=await generateText(
    {model:google('gemini-flash-latest'),
         tools: {
      searchBooks,
    },
      
      system: `
You are a helpful assistant.
If the user asks for books, call "searchBooks". The tool returns an array of titles. Reply with the titles in a structured way and clear separation and linking
    `,
    prompt:prompt, 
stopWhen: stepCountIs(5),
 });
console.log(text);
 return Response.json({text});
}