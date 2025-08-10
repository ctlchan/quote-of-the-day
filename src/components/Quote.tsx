type QuoteProps = {
  quote: string,
  author: string
}

export default function Quote({ quote, author }: QuoteProps) {
    return (
        <div className="flex justify-center items-center flex-col h-screen font-serif bg-sand dark:bg-charcoal">
            <div className="w-2/3 m-auto">
                <blockquote>
                    <p className="font-bold text-center text-5xl">
                        {quote}
                    </p>
                </blockquote>
                <div className="block text-right text-4xl mt-3">{`-- ${author}`}</div>
            </div>
        </div>
    )
}