type QuoteProps = {
  quote: string,
  author: string
}

export default function Quote({ quote, author }: QuoteProps) {
    return (
        <div className="flex justify-center content-center">
            <div className="block">
                {quote}
            </div>
            <div className="block">{`- ${author}`}</div>
        </div>
    )
}