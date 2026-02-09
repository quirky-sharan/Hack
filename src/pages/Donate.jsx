import { useEffect, useState } from "react"
import Header from "../components/Header"

export default function Donate() {
  const [visible, setVisible] = useState(false)
  const [selected, setSelected] = useState(null)
  const [loadedImages, setLoadedImages] = useState({})

  useEffect(() => {
    setTimeout(() => setVisible(true), 100)
  }, [])

  const categories = [
    {
      title: "Clothes",
      icon: "👕",
      desc: "Wearables, blankets, footwear.",
      image:
        "https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg",
    },
    {
      title: "Food",
      icon: "🍱",
      desc: "Cooked or packaged meals.",
      image:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    },
    {
      title: "Plastic",
      icon: "♻️",
      desc: "Reusable or recyclable plastic.",
      image:
        "https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg",
    },
    {
      title: "Metals",
      icon: "🔩",
      desc: "Utensils, scrap, containers.",
      image:
        "https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg",
    },
    {
      title: "Paper",
      icon: "📄",
      desc: "Books, newspapers, cartons.",
      image:
        "https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg",
    },
    {
      title: "Electronics",
      icon: "💻",
      desc: "Phones, laptops, appliances.",
      image:
        "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg",
    },
    {
      title: "Miscellaneous",
      icon: "📦",
      desc: "Other usable household items.",
      image:
        "https://images.pexels.com/photos/4246112/pexels-photo-4246112.jpeg",
    },
  ]

  return (
    <div className="min-h-screen bg-brand-bg text-white">
      <Header />

      <section className="pt-40 px-6 pb-28 relative overflow-hidden">
        
        {/* ambient */}
        <div className="absolute inset-0 flex justify-center pointer-events-none">
          <div className="w-[900px] h-[300px] bg-green-500/10 blur-[140px] rounded-full" />
        </div>

        <div className="relative max-w-6xl mx-auto text-center">
          
          <h1 className="text-4xl md:text-5xl font-bold">
            Choose what you want to donate
          </h1>

          <p className="text-white/60 mt-4 mb-16">
            Select a category and we’ll connect you with the right NGO.
          </p>

          {/* GRID */}
          <div className="grid md:grid-cols-3 gap-10">
            {categories.map((item, i) => (
              <div
                key={i}
                onClick={() => setSelected(i)}
                className={`group relative rounded-2xl p-[1px] transition duration-500 cursor-pointer ${
                  selected === i
                    ? "bg-green-500 shadow-glow"
                    : "bg-gradient-to-b from-white/20 to-white/5 hover:from-green-400/40 hover:to-green-600/20"
                }`}
                style={{
                  transitionDelay: `${i * 80}ms`,
                  transform: visible ? "translateY(0)" : "translateY(20px)",
                  opacity: visible ? 1 : 0,
                }}
              >
                {/* body */}
                <div className="relative overflow-hidden backdrop-blur-xl bg-white/[0.04] border border-white/10 rounded-2xl p-10 h-full hover:-translate-y-2 transition-all duration-500">
                  
                  {/* ripple */}
                  <span className="absolute inset-0 rounded-2xl overflow-hidden">
                    <span className="absolute w-0 h-0 bg-white/20 rounded-full group-active:w-[400px] group-active:h-[400px] group-active:opacity-0 transition-all duration-700" />
                  </span>

                  {/* skeleton */}
                  {!loadedImages[i] && (
                    <div className="absolute inset-0 bg-white/5 animate-pulse" />
                  )}

                  {/* blur-up */}
                  <img
                    src={item.image}
                    onLoad={() =>
                      setLoadedImages((prev) => ({ ...prev, [i]: true }))
                    }
                    onError={() =>
                      setLoadedImages((prev) => ({ ...prev, [i]: false }))
                    }
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                      loadedImages[i]
                        ? "opacity-10 blur-0 scale-100"
                        : "opacity-0 blur-xl scale-110"
                    } group-hover:opacity-10`}
                  />

                  {/* overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40" />

                  {/* content */}
                  <div className="relative">
                    <div className="text-4xl mb-5 transform group-hover:scale-110 transition">
                      {item.icon}
                    </div>

                    <h3 className="text-xl font-semibold text-white/90 mb-2">
                      {item.title}
                    </h3>

                    <p className="text-white/60 text-sm">
                      {item.desc}
                    </p>

                    <div className="mt-6 text-green-400 text-sm flex items-center gap-2 opacity-0 group-hover:opacity-100 transition">
                      Continue
                      <span className="group-hover:translate-x-1 transition">
                        →
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  )
}
