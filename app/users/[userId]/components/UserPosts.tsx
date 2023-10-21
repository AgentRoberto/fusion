import React from 'react'

type Props = {
  promise: Promise<Post[]>
}

export default async function UserPosts({ promise }: Props) {
  const posts = await promise

  const content = posts.map((post: { id: React.Key | null | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; body: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined }) => {
    return (
      <article key={post.id}>
        <h2>{post.title}</h2>
        <h2>{post.body}</h2>
        <br />
      </article>
    )
  })

  return content
}
