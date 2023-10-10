import Notices from './Notices'

export default function HeroSection() {
  return (
    <section className="w-full h-[calc(auto-120px)] p-5 md:p-20">
      <div className="w-full container flex flex-col gap-14 ">
        <h1 className="text-center text-4xl text-[#3D3D3D]">Popular News</h1>
        <Notices />
      </div>
    </section>
  )
}
