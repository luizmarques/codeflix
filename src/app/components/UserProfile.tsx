import Image from "next/image";

export const UserProfile = () => (
    <div className="flex items-center space-x-2 md:space-x-8">
        <p className="hidden cursor-not-allowed lg:inline">Kids</p>
        <Image 
            src="/Netflix-avatar.png"
            alt="profile"
            width={35} 
            height={35}
            className="cursor-pointer "
        />
    </div>
)