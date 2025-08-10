import Image from "next/image";
import DarkModeToggle from "./DarkModeToggle";
import { DarkModeToggleProps } from "./DarkModeToggle";
import quote from '@/assets/quote.png'

export default function Navbar({isDarkMode, setIsDarkMode}: DarkModeToggleProps) {
    return (
        <div className="flex justify-between items-center top-0 p-2.5 bg-sage dark:bg-mist">
            <Image 
                src={quote} 
                alt="Quote Icon"
                width={50}
                height={50}
                className="ml-3"
            />
            <h1 className="text-3xl font-bold">
                Quote of the Day
            </h1>
            <DarkModeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
        </div>
    )
}