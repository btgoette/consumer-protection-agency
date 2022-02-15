import Navbar from 'components/common/Navbar'
import Footer from 'components/common/Footer'

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