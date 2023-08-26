import './globals.css'

export const metadata = {
  title: 'Solar Energy',
  description: 'This website is for Solar Energy',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#8157fc]">
        {children}
      </body>
    </html>
  )
}
