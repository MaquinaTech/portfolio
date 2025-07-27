import Head from 'next/head'
import NavBar from './NavBar'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Head>
        <title>Nicolas Lopez - Portfolio</title>
        <meta name="description" content="Portfolio of Nicolas Lopez de Lerma" />
      </Head>
      <NavBar />
      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
      <footer className="text-center py-4 text-gray-500">&copy; {new Date().getFullYear()} Nicolas Lopez</footer>
    </div>
  )
}
