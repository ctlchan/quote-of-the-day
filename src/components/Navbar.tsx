import Image from "next/image";
import DarkModeToggle from "./DarkModeToggle";
import quote from '@/assets/quote.png'

export default function Navbar() {
    return (
        <div className="flex justify-between items-center top-0 p-2.5 bg-gray-200 opacity-70">
            <Image 
                src={quote} 
                alt="Quote Icon"
                width={50}
                height={50}
                className="ml-3"
            />
            <h1 className="text-2xl font-bold drop-shadow-gray-800 drop-shadow-2xl">
                Quote of the Day
            </h1>
            <DarkModeToggle/>
        </div>
    )
}