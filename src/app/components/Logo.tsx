import Image from "next/image";

export const Logo = () => (
    <Image 
        src= "/Netflix_2015_logo.svg" 
        alt="logo" 
        width={120} 
        height={120}
        className="cursor-pointer"
    />
)