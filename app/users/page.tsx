import React from 'react'
import type { Metadata } from "next";
import getAllUsers from 'api/lib/getAllUsers';
import Link from 'next/link';

export const metadat: Metadata ={
  title: 'Users',
}


export default async function UsersPage() {
  const usersData: Promise<User[]> = getAllUsers()
  const users = await usersData
  console.log('hello')
  const content =(
    <section>
      <h2>
        <Link href="/">Back to Home</Link>
      </h2>
      <br />
      {users.map(user => {
        return(
          <>
            <p key={user.id}>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </p>
            <br/>
          </>
        )
      })}
    </section>
  )

  return content
}
