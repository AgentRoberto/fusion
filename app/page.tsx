/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import Posts from './components/Posts'

export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Hello and Welcome &nbsp;
        <span className="whitespace-nowrap">
          I'm <span className='font-bold'>Rob</span>
        </span>
      </p>
      <Posts />
      <Link href="/about">Go to About Page</Link>
      <Link href="/users">Go to Users Page</Link>

    </main>
  )
}
