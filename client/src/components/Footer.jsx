export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white py-12 mt-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        
        <div>
          <h3 className="font-bold text-lg mb-3">EcoGive</h3>
          <p className="text-sm opacity-80">
            Making donations simple, transparent and impactful.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Links</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li>How it works</li>
            <li>NGOs</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Legal</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li>Privacy</li>
            <li>Terms</li>
          </ul>
        </div>

      </div>
    </footer>
  )
}
