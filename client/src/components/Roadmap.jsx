export default function Roadmap() {
  const steps = ["List items", "NGO accepts", "Pickup / Delivery", "Impact created"]

  return (
    <section className="py-20 bg-brand-light px-6">
      <h2 className="text-3xl font-bold text-center text-brand-dark mb-12">
        How It Works
      </h2>

      <div className="max-w-4xl mx-auto space-y-6">
        {steps.map((s, i) => (
          <div
            key={i}
            className="p-5 bg-white rounded-xl shadow-md hover:translate-x-2 transition"
          >
            {i + 1}. {s}
          </div>
        ))}
      </div>
    </section>
  )
}
