import { generateText,streamText } from "ai";

import { google } from '@ai-sdk/google';

export async function POST(req : Request){
    const {prompt} =await req.json();
    const {text}=await generateText(
    {model:google('gemini-flash-latest'),
    prompt:prompt,
 });
console.log(text);
 return Response.json({text});
}