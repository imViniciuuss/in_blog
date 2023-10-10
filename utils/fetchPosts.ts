/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Posts } from '@/@types/posts'

export async function getPosts(slug: Posts[]) {
  const response = await fetch(process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      query Posts($slug: String!) {
        posts(where: {slug: $slug}) {
          id
          slug
          title
          subtitle
          datePost
          author {
            name
            photo {
              url
            }
          }
          content {
            raw
          }
        }
      }
      `,
      variables: {
        // eslint-disable-next-line object-shorthand
        slug: slug,
      },
    }),
    next: {
      revalidate: 60 * 60 * 24,
    },
  })

  const data = await response.json()

  // console.log(data.data.posts)
  return data.data.posts
}

export async function generateStaticParams() {
  const posts: Posts[] = await fetch(
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!,
  ).then((res) => res.json())

  return posts.map((post) => ({
    slug: post.id,
  }))
}
