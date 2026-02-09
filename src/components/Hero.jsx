import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Hero() {
  const [spin, setSpin] = useState(false)
  const navigate = useNavigate()

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-6 pt-40 overflow-hidden">
      
      {/* ambient light */}
      <div className="absolute w-[800px] h-[800px] bg-green-500/10 rounded-full blur-[180px]" />

      {/* SIDE IMAGES */}
      <img
        src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09"
        className="hidden lg:block absolute left-20 top-44 w-40 h-40 object-cover rounded-full border border-white/10 opacity-70 hover:opacity-100 transition"
      />
      <img
        src="https://images.unsplash.com/photo-1527549993586-dff825b37782"
        className="hidden lg:block absolute right-20 bottom-36 w-44 h-44 object-cover rounded-full border border-white/10 opacity-70 hover:opacity-100 transition"
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

        {/* CTA CIRCLE */}
        <div className="mt-14 flex justify-center">
          <div
            onClick={() => navigate("/donate")}
            onMouseEnter={() => setSpin(true)}
            onAnimationEnd={() => setSpin(false)}
            className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden cursor-pointer ${
              spin ? "animate-spinFast shadow-[0_0_100px_#22c55e88]" : ""
            }`}
          >
            <img
              src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="text-white font-semibold text-xl">
                Donate
              </span>
            </div>
          </div>
        </div>

        {/* TRUST BADGES */}
        <div className="mt-12 text-sm text-gray-500">
          Trusted by donors • Verified NGOs
        </div>

        {/* STATS */}
        <div className="mt-10 grid grid-cols-3 gap-6 text-white">
          <div>
            <p className="text-2xl font-bold text-green-400">12K+</p>
            <p className="text-xs text-gray-400">Households</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-green-400">320+</p>
            <p className="text-xs text-gray-400">NGOs</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-green-400">18 Cities</p>
            <p className="text-xs text-gray-400">Reached</p>
          </div>
        </div>

      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-10 flex flex-col items-center text-gray-500 text-xs">
        <span>Scroll</span>
        <div className="w-[2px] h-6 bg-gray-600 mt-2 animate-bounce" />
      </div>

    </section>
  )
}
