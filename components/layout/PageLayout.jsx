import Navbar from 'components/layout/Navbar'
import Footer from 'components/layout/Footer'

export default function PageLayout({ children }) {
    return (
        <>
            <Navbar />
            <main className="page-wrapper min-h-screen">
                {children}
            </main>
            <Footer />
        </>
    )
}