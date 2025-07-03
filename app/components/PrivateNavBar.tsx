'use client'
import Image from "next/image";
import Link from "next/link";
import { PrivateNavLinks } from "../constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { SignedIn, UserButton } from "@clerk/nextjs";

export default function PrivateNavBar() {
    const pathname = usePathname() 
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
                    return (
                        <Link 
                            href={item.route}
                            key={item.label}
                            className={
                                cn('flex gap-4 items-center p-4 rounded-lg justify-start', isActive && 'text-indigo-900')
                            }
                        >
                            <Image 
                                src={item.imgURL}
                                alt={item.label}
                                width={30}
                                height={30}
                            />
                            <p className={cn("text-lg font-semibold mx-lg:hidden",)}> 
                                {item.label}
                            </p>
                        </Link>
                    )
                    })}
                </div>
            </section>
            <div>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </nav>
    )
}