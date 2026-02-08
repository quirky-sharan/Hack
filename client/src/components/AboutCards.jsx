export default function AboutCards() {
  const data = [
    { title: "Donate Goods", desc: "Clothes, food, recyclables and essentials." },
    { title: "Verified NGOs", desc: "Trusted partners with transparency." },
    { title: "Track Impact", desc: "See where your help goes." },
  ]

  return (
    <section className="py-24 px-6 bg-brand-surface">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {data.map((item, i) => (
          <div
            key={i}
            className="p-7 rounded-2xl border border-brand-border bg-brand-bg hover:-translate-y-2 transition"
          >
            <h3 className="text-xl font-bold text-brand-text mb-3">
              {item.title}
            </h3>
            <p className="text-gray-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
