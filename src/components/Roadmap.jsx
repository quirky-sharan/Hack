import { useEffect, useRef, useState } from "react"

export default function Roadmap() {
  const ref = useRef(null)
  const [progress, setProgress] = useState(0)

  const steps = [
    {
      title: "List what you want to donate",
      desc: "Add clothes, food, recyclables or household items in seconds.",
    },
    {
      title: "NGOs review & accept",
      desc: "Verified partners confirm availability and schedule logistics.",
    },
    {
      title: "Pickup or drop",
      desc: "Seamless transfer with tracking and notifications.",
    },
    {
      title: "Impact delivered",
      desc: "You see where your donation reached and who it helped.",
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return

      const rect = ref.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      const total = rect.height
      const visible = windowHeight - rect.top
      const percent = Math.min(Math.max(visible / total, 0), 1)

      setProgress(percent)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section ref={ref} className="relative py-40 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        
        {/* LEFT — PROGRESS LINE */}
        <div className="relative hidden md:block">
          
          {/* base line */}
          <div className="absolute left-4 top-0 w-[2px] h-full bg-white/10" />

          {/* progress */}
          <div
            className="absolute left-4 top-0 w-[2px] bg-green-400 transition-all duration-200"
            style={{ height: `${progress * 100}%` }}
          />

          {/* checkpoints */}
          <div className="space-y-32">
            {steps.map((_, i) => {
              const active = progress > i / steps.length
              return (
                <div key={i} className="relative flex items-center">
                  <div
                    className={`w-8 h-8 flex items-center justify-center rounded-full border text-sm transition-all ${
                      active
                        ? "bg-green-400 text-black border-green-300 shadow-glow"
                        : "bg-brand-surface text-white/60 border-white/10"
                    }`}
                  >
                    {i + 1}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* RIGHT — CONTENT */}
        <div className="space-y-32">
          {steps.map((step, i) => {
            const active = progress > i / steps.length
            return (
              <div
                key={i}
                className={`transition-all duration-700 ${
                  active
                    ? "opacity-100 translate-y-0"
                    : "opacity-30 translate-y-6"
                }`}
              >
                <div className="text-green-400 text-sm mb-3">
                  Step {i + 1}
                </div>
                <h3 className="text-2xl font-semibold text-white/90 mb-3">
                  {step.title}
                </h3>
                <p className="text-white/70">
                  {step.desc}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
