import React from 'react'
import getUser from 'api/lib/getUser'
import getUserPosts from 'api/lib/getUserPosts'
import { Suspense } from 'react'
import UserPosts from './components/UserPosts'
import type { Metadata } from 'next'
import getAllUsers from 'api/lib/getAllUsers'
import { notFound } from 'next/navigation'

type Params ={
  params: {
    userId: string
  }
}

export async function generateMetadata({ params: {userId} }: Params): Promise<Metadata> {
  // Next will automatically deduplicate fetched data
  const userData: Promise<User> = getUser(userId)
  const user: User = await userData

  if(!user.name) {
    return {
      title: "User Not Found"
    }
  }

  return {
    title: user.name,
    description: `This is the page of ${user.name}`
  }

}

export default async function UserPage({params: {userId}}: Params) {
  const userData: Promise<User> = getUser(userId)
  const userPostsData: Promise<Post[]> = getUserPosts(userId)
  const user = await userData

  if(!user.name) notFound()
  /*const [user, userPosts] = await Promise.all([
    userData,
    userPostsData,
  ])*/

  return (
    <>
      <h2>{user.name}</h2>
      <br />
      <Suspense fallback={<h2>Loading ...</h2>}>
        <UserPosts promise={userPostsData} />
      </Suspense>
    </>
  )
}
 // Forcing SSG by setting what the params will be in advance
 // without the SSR
export async function generateStaticParams() {
  const usersData: Promise<User[]> = getAllUsers()
  const users = await usersData

  return users.map((user) => ({
    userId: user.id.toString()
  }))
}
