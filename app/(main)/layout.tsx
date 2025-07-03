import { currentUser } from "@clerk/nextjs/server"

export default async function MainLayout({
        children: React.ReactNode
}) {
    const user = await currentUser()
    return (
        <main className="relative">
            { user ? <PrivateNavBar /> : <PublicNavBar />}
            <section className="pt-36">
                {children}
            </section>
        </main>
    )
}