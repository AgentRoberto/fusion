import './globals.css'
import NavBar from './components/NavBar'
import ProfilePic from './components/ProfilePic'

export const metadata = {
  title: "Rob's profile",
  description: "Created by Rob"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="dark:bg-slate-800">
        <NavBar />
        <ProfilePic />
        {children}
      </body>
    </html>
  )
}
