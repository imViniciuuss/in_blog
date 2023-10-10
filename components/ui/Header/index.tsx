import NavItems from '@/components/ui/Header/Nav-Items'
import Link from 'next/link'

export default function Header() {
  return (
    <nav className="w-full py-10 px-5 bg-[#5E79F2]">
      <div className="flex flex-col h-auto items-center container md:flex-row md:justify-between">
        <Link href={'/'}>
          <h1 className="text-4xl text-white font-bold">BLOG!</h1>
        </Link>
        <NavItems />
      </div>
    </nav>
  )
}
