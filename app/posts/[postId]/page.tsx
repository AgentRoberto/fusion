import React from 'react'
import { getPostData, getSortedPostsData } from 'api/lib/posts'
import { notFound } from 'next/navigation'
import getFormattedDate from 'api/lib/getFormattedDate'
import Link from 'next/link'

export function generateMetadata( {params } : {params: {postId: string}}) {
  const posts = getSortedPostsData() // Deduped!
  const { postId } = params

  const post = posts.find(post => post.id === postId)
  
  if(!post) {
    return {
      title: 'Post Not Found'
    }
  }
  return {
    title: post?.title,
  }
}

export default async function Post( {params } : {params: {postId: string}}) {
  const posts = getSortedPostsData() // Deduped!
  const { postId } = params

  if(!posts.find(post => post.id === postId)) {
    return notFound()
  }

  const {title, date, contentHtml} = await getPostData(postId)

  const formattedDate = getFormattedDate(date)

  return (
    <main className='px-6 prose prsoe-xl prose-slate dark:prose-invert mx-auto'>
      <h1 className='text-3xl mt-4 mb-0'>{title}</h1>
      <p className='mt-0'>{formattedDate}</p>
      <article>
        <section dangerouslySetInnerHTML={{ __html: contentHtml}} />
        <p>
          <Link href="/">Back to home</Link>
        </p>
      </article>
    </main>
  )
}
