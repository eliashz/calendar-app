import Image from "next/image";
import Link from "next/link";

export default function PublicNavBar() {
    return (
        <nav className="flex justify-between items-center fixed z-50 w-full h-28 bg-gray-500 px-10 gap-4 shadow-2xl">
            <Link href="/login" className="flex items-center gap-1 hover:scale-90 duration-500">
                <Image 
                    src="/assets/logo.svg"
                    width={100}
                    height={100}
                    alt="Calendar logo"
                />
            </Link>
        </nav>
    )
}