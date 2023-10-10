import Link from 'next/link'

interface ILinkNavItems {
  name: string
  route: string
}

const LinkItems: ILinkNavItems[] = [
  {
    name: 'Featured',
    route: '/',
  },
  {
    name: 'Pricing',
    route: '/',
  },
  {
    name: 'Contact',
    route: '/',
  },
]

export default function NavItems() {
  return (
    <div className="flex gap-10">
      {LinkItems.map((link) => (
        <Link key={link.name} href={link.route}>
          <ul className="cursor-pointer">
            <li className="text-white">{link.name}</li>
          </ul>
        </Link>
      ))}
    </div>
  )
}
