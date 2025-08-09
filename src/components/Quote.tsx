type QuoteProps = {
  quote: string,
  author: string
}

export default function Quote({ quote, author }: QuoteProps) {
    return (
        <div className="flex justify-center content-center flex-col h-dvh font-serif">
            <div className="w-2/3 m-auto">
                <blockquote>
                    <p className="font-bold text-center text-4xl">
                        {quote}
                    </p>
                </blockquote>
                <div className="block text-right text-2xl">{`-- ${author}`}</div>
            </div>
        </div>
    )
}