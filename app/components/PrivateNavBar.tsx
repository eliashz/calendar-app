import { Button } from "@/components/ui/button";
import { SignIn, SignInButton, SignUpButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { PrivateNavLinks } from "../constants";

export default function PrivateNavBar() {
    return (
        <nav className="flex justify-between items-center fixed z-50 w-full h-28 bg-gray-200 px-10 gap-4 shadow-2x mb-28">
            <Link href="/events" className="flex items-center gap-1 hover:scale-90 duration-500">
                <Image 
                    src="/assets/logo.svg"
                    width={100}
                    height={100}
                    alt="Calendar logo"
                />
            </Link>
            <section className="sticky top-0 flex justify-between text-black">
                <div className="flex flex-1 max-sm:gap-0 sm:gap-6">
                    {PrivateNavLinks.map(item => {
                        const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
                    })}

                </div>

            </section>
        </nav>
    )
}