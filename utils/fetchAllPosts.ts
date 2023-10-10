export async function getAllPosts() {
  const response = await fetch(process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      query MyQuery {
        posts {
          id
          slug
          title
          datePost
          author {
            name
          }
          postImg{
            url
          }
        }
      }
      `,
    }),
    next: {
      revalidate: 60 * 60 * 24,
    },
  })

  const result = await response.json()

  return result.data.posts
}
