import { Button } from "@/components/ui/button";
import { SignIn, SignInButton, SignUpButton } from "@clerk/nextjs";
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
            <section className="sticky top-0 flex justify-between">
                <div className="flex flex-1 max-sm:gap-0 sm:gap-6">
                    <SignInButton>
                        <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 cursor-pointer rounded-xl shadow-2xl">
                            Login
                        </Button>
                    </SignInButton>
                    <SignUpButton>
                        <Button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 cursor-pointer rounded-xl shadow-2xl" variant={"ountline"}>
                            Register
                        </Button>
                    </SignUpButton>
                </div>
            </section>
        </nav>
    )
}