export default function AboutCards() {
  const data = [
    {
      icon: "🎁",
      title: "Donate Goods",
      desc: "Give clothes, food, recyclables and essentials a second life while helping communities.",
    },
    {
      icon: "✅",
      title: "Verified NGOs",
      desc: "Every organization is reviewed for legitimacy and real world impact.",
    },
    {
      icon: "📊",
      title: "Track Impact",
      desc: "Follow your contribution and see transparent outcomes.",
    },
  ]

  return (
    <section className="relative py-32 px-6">
      
      {/* ambient glow */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[800px] h-[300px] bg-green-500/10 blur-[150px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {data.map((item, i) => (
          <div
            key={i}
            className="group relative rounded-2xl p-[1px] bg-gradient-to-b from-white/20 to-white/5 hover:from-green-400/40 hover:to-green-600/20 transition duration-500"
          >
            {/* glass body */}
            <div className="h-full backdrop-blur-xl bg-white/[0.04] border border-white/10 rounded-2xl p-8 hover:-translate-y-2 transition-all duration-500 hover:shadow-glow">
              
              {/* icon */}
              <div className="text-3xl mb-6">
                {item.icon}
              </div>

              {/* title */}
              <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
                {item.title}
              </h3>

              {/* description */}
              <p className="text-brand-muted leading-relaxed">
                {item.desc}
              </p>

              {/* small link feel */}
              <div className="mt-6 text-sm text-green-400 opacity-0 group-hover:opacity-100 transition">
                Learn more →
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
