"use client"

import { useEffect, useRef } from "react"

export default function HomePage() {
  const video1Ref = useRef<HTMLVideoElement>(null)
  const video2Ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Ensure videos play on mount
    if (video1Ref.current) {
      video1Ref.current.play().catch((err) => console.log("[v0] Video 1 autoplay prevented:", err))
    }
    if (video2Ref.current) {
      video2Ref.current.play().catch((err) => console.log("[v0] Video 2 autoplay prevented:", err))
    }
  }, [])

  return (
    <main className="relative">
      {/* First Section - Hero */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Video */}
        <video ref={video1Ref} autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover">
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Primero-hqlz0cxPV6DRlCLbIU0EG49KKqEitJ.mp4" type="video/mp4" />
        </video>

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col items-end justify-start pt-20 md:pt-24 px-8 md:px-16 lg:px-24 text-right">
          <img src="/images/logo.png" alt="IHOP Logo" className="mb-6 w-[500px] max-w-[80vw] drop-shadow-2xl" />
          <img
            src="/images/bnb-chain.png"
            alt="由 BNB 链驱动"
            className="mb-4 w-[400px] max-w-[70vw] drop-shadow-2xl"
          />
          <p className="mt-4 font-semibold text-white text-xl md:text-2xl drop-shadow-lg">CA SOON</p>
        </div>

        {/* Scrolling Text Banner */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden bg-yellow-400 py-4">
          <div className="animate-marquee whitespace-nowrap">
            <span className="mx-4 inline-block font-bold text-gray-900 text-4xl">
              我跃 我跃 我跃 我跃 我跃 我跃 我跃 我跃 我跃 我跃 我跃 我跃
            </span>
          </div>
        </div>
      </section>

      {/* Second Section - Join Us */}
      <section className="relative min-h-screen w-full overflow-hidden">
        {/* Background Video */}
        <video ref={video2Ref} autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover">
          {/* Placeholder - waiting for second video */}
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Segundo-S5sdsAPABmWvwBOxBKSodaGqCbzGgs.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Content */}
        <div className="relative z-10 flex min-h-screen flex-col items-start justify-center gap-12 px-8 md:px-16 lg:px-24 py-20">
          <img src="/images/join-us.png" alt="加入我们" className="w-[600px] max-w-[90vw] drop-shadow-2xl" />

          {/* Description Box */}
          <div className="max-w-3xl rounded-3xl bg-yellow-400 p-8 shadow-2xl border-4 border-white">
            <p className="font-bold text-gray-900 text-xl md:text-2xl leading-relaxed">
              极致氛围。
              我们的宗旨是拥抱轻松生活、悠然自得、保持酷飒——就像我们那只慵懒的黑兔。不赶时间，没有压力，只传递美好频率。准备好加入松弛小队了吗？一起让生活多一分从容自在。
            </p>
          </div>

          {/* Supply Section */}
          <div className="flex flex-col items-start gap-4">
            <img src="/images/supply.png" alt="供应" className="w-[400px] max-w-[80vw] drop-shadow-2xl" />
            <div className="rounded-2xl bg-yellow-400 px-8 py-4 shadow-xl border-4 border-white">
              <p className="font-bold text-gray-900 text-3xl md:text-4xl">1.000.000.000</p>
            </div>
          </div>
        </div>
      </section>

      <a
        href="https://x.com/MASA_Animelove"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 transition-transform hover:scale-110 active:scale-95"
      >
        <img src="/images/x-button.png" alt="X/Twitter" className="h-16 w-16 md:h-20 md:w-20 drop-shadow-2xl" />
      </a>
    </main>
  )
}
