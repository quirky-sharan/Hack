import { useState } from "react"

export default function Hero() {
  const [hover, setHover] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-6 pt-40 overflow-hidden">
      
      {/* ambient green light */}
      <div className="absolute w-[700px] h-[700px] bg-green-500/10 rounded-full blur-[160px]" />

      {/* floating supporting images */}
      <img
        src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09"
        className="hidden lg:block absolute left-16 top-40 w-48 rounded-2xl opacity-60 hover:opacity-100 transition"
      />
      <img
        src="https://images.unsplash.com/photo-1527549993586-dff825b37782"
        className="hidden lg:block absolute right-16 bottom-32 w-52 rounded-2xl opacity-60 hover:opacity-100 transition"
      />

      <div className="relative z-10 max-w-4xl">
        
        {/* headline */}
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Sustainable Giving  
          <span className="block text-green-400">
            Made Effortless
          </span>
        </h1>

        {/* sub */}
        <p className="mt-6 text-gray-400 text-lg">
          Donate unused goods, reduce waste, and create measurable impact
          through verified NGOs near you.
        </p>

        {/* circle CTA */}
        <div className="mt-14 flex justify-center">
          <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden cursor-pointer transition-all duration-500 ${
              hover ? "scale-105 shadow-[0_0_80px_#22c55e66]" : ""
            }`}
          >
            <img
              src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="text-white font-semibold text-xl">
                Start Donating
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
