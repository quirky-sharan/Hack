import { useEffect, useRef, useState } from "react"

export default function Mission() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const [hover, setHover] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
  }, [])

  return (
    <section
      ref={ref}
      className="relative py-36 px-6 text-center overflow-hidden"
    >
      {/* ambient light */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[900px] h-[400px] bg-green-500/10 blur-[160px] rounded-full" />
      </div>

      <div
        className={`relative max-w-4xl mx-auto transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* label */}
        <div className="text-green-400 text-sm tracking-[0.3em] uppercase mb-6">
          Our Mission
        </div>

        {/* headline */}
        <h2 className="text-3xl md:text-5xl font-bold text-white/90 leading-tight">
          Build a world where  
          <span className="text-green-400"> giving replaces waste</span>
        </h2>

        {/* description */}
        <p className="mt-8 text-white/70 text-lg leading-relaxed">
          We connect households with verified NGOs to redirect usable goods
          toward people who truly need them — reducing landfill, increasing
          dignity, and creating measurable social impact.
        </p>

        {/* interactive chips */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {[
            "Transparent process",
            "Community powered",
            "Sustainable future",
          ].map((chip, i) => (
            <div
              key={i}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
              className={`px-5 py-2 text-sm rounded-full border transition-all duration-300 ${
                hover === i
                  ? "bg-green-500/90 text-black border-green-400 shadow-glow"
                  : "bg-white/5 text-white/70 border-white/10"
              }`}
            >
              {chip}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
