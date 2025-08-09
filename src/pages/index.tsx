import Attribution from "@/components/Attribution";
import Navbar from "@/components/Navbar";
import Quote from "@/components/Quote";
import { QuoteResponseData } from "@/lib/fetchQuote";
import { useEffect, useState } from "react";


function dateToSimpleString(date: Date): string {
  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
}


export default function Home() {
  const [quote, setQuote] = useState<QuoteResponseData>({
      quote: "",
      author: ""
  });

  useEffect(() => {

      async function getQuote() {
        const url = "http://localhost:3000/api/quote"
        const response = await fetch(url)

        if (!response.ok) {
          console.error("Failed to fetch quote.");
          return;
        }
        else {
          const data: QuoteResponseData = await response.json();
          setQuote(data);
        }
      }

      const storedQuote = localStorage.getItem("quote");
      const storedAuthor = localStorage.getItem("author");

      // Need to update state once on mount
      if (storedQuote || storedAuthor) {
        setQuote({
          quote: storedQuote ?? "",
          author: storedAuthor ?? "",
        });
      }

      const accessDay: string | null = localStorage.getItem("accessDay");
      const now = dateToSimpleString(new Date());


      if (accessDay == null || accessDay != now) {
        console.log("updating...");
        getQuote();
        localStorage.setItem("accessDay", now);
      }
      else {
        console.log("getting quote from storage...");
      }

  }, [])

  useEffect(() => {
    if (quote.quote != "" && quote.author != "") {
      localStorage.setItem("author", quote.author);
      localStorage.setItem("quote", quote.quote);
    }
  }, [quote])


  return (
    <div className="flex flex-col h-dvh">
      <Navbar/>
      <Quote quote={quote.quote} author={quote.author}/>
      <Attribution/>
    </div>
  );
}
