export interface QuoteResponseData {
    quote: string,
    author: string,
}

export async function fetchQuote() {
    const url: string = "https://zenquotes.io/api/random";
    console.log("fetchQuote()");
    
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Received a ${response.statusText} response.`)
        }

        const data = await response.json();

        // Even though its just one quote, API returns an array
        if (!Array.isArray(data) || !data[0]?.q || !data[0]?.a) {
            throw new Error('Unexpected response format');
        }

        return {
            quote: data[0].q,
            author: data[0].a,
        }
        
    } catch (error) {
        console.error('Failed to fetch quote: ' + error)
        return {
            quote: 'An error occured while trying to fetch a quote.',
            author: 'Error',
        }
    }
}
