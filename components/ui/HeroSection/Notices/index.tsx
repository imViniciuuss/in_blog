import { Posts } from '@/@types/posts'
import { getAllPosts } from '@/utils/fetchAllPosts'
import Image from 'next/image'
import Link from 'next/link'

export default async function Notices() {
  const getAllPostsData: Posts[] = await getAllPosts()

  return (
    <>
      {getAllPostsData.length === 0 ? (
        <div className="flex w-full justify-center items-center ">
          <h1 className="text-xl">Sem notícia disponível 😓</h1>
        </div>
      ) : (
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {getAllPostsData.map((post) => (
            <Link key={post.id} href={`/news/${post.slug}`} className="w-full">
              <div
                key={post.id}
                className="flex w-full p-5 border border-[#5E5E5E] rounded-[20px] cursor-pointer transition hover:scale-105"
              >
                <div className="w-full flex flex-col gap-[25px] bg-contain">
                  <Image
                    src={post.postImg.url}
                    width={319}
                    height={174}
                    className="h-full w-full"
                    alt="Post Image"
                  />
                  <div className="flex flex-col gap-[38px]">
                    <p className="font-bold line-clamp-2">{post.title}</p>

                    <div className="flex justify-between">
                      <span className="font-bold">
                        <span className="text-[#585858] font-bold">By</span>{' '}
                        {post.author.name}
                      </span>
                      <span className="text-[#585858] font-bold">
                        {post.datePost}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
