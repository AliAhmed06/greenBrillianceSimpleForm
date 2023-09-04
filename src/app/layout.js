import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import './globals.css'

export const metadata = {
  title: 'Solar Energy',
  description: 'This website is for Solar Energy',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#235c94]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
