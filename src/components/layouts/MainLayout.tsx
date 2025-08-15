import { Outlet } from "react-router-dom"
import Header from "../Header"
import { Footer } from "../Footer"

function MainLayout() {
    return (
        <div className="border-gray-50">
            <Header />
            <main className="min-h-[calc(100vh-120px)] flex flex-col mx-auto w-full max-w-screen-2xl px-4">
                <Outlet />
            </main>
            <Footer />
        </div>

    )
}

export default MainLayout