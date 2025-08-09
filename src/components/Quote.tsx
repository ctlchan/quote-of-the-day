type QuoteProps = {
  quote: string,
  author: string
}

export default function Quote({ quote, author }: QuoteProps) {
    return (
        <div className="flex justify-center content-center flex-col h-screen font-serif">
            <div className="w-2/3 m-auto">
                <blockquote>
                    <p className="font-bold text-center text-4xl">
                        {quote}
                    </p>
                </blockquote>
                <div className="block text-right text-3xl mt-3">{`-- ${author}`}</div>
            </div>
        </div>
    )
}