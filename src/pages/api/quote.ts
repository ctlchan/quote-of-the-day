import { fetchQuote, QuoteResponseData } from "@/lib/fetchQuote";
import { NextApiRequest, NextApiResponse } from "next"



export default function handler(req: NextApiRequest, res: NextApiResponse<QuoteResponseData>) {
    fetchQuote()
        .then((quote) => {
            res.status(200).json(quote);
        })
        .catch((error) => {
            res.status(500).json(error);
        });
}