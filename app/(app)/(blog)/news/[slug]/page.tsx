import Image from 'next/image'

import { Posts } from '@/@types/posts'
import { getPosts } from '@/utils/fetchPosts'
import { RichText } from '@/components/rich-text'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function Post({ params }: any) {
  const data: Posts[] = await getPosts(params.slug)

  return (
    <section className="w-full h-[calc(100vh-124px)] p-5">
      <article className="h-auto max-w-3xl py-14 mx-auto">
        {data.map((item) => (
          <div key={item.id}>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h1 className="font-bold text-4xl">{item.title}</h1>
                <p className=" text-[#565656]">{item.subtitle}</p>
              </div>
              <div className="flex gap-2 mb-5">
                <div className="flex">
                  <Image
                    src={item.author.photo.url}
                    width={45}
                    height={35}
                    alt="Author post photo"
                    className="rounded-full"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-sm">{item.author.name}</span>
                  <span className="text-xs">{item.datePost}</span>
                </div>
              </div>
              <RichText content={item.content.raw} />
            </div>
          </div>
        ))}
      </article>
    </section>
  )
}
