import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import './globals.css'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: 'Solar Energy',
  description: 'This website is for Solar Energy',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#235c94]">
        <ToastContainer />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
