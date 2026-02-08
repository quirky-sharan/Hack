import { useEffect, useState } from "react"

export default function Header() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setTimeout(() => setShow(true), 100)
  }, [])

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 pt-6">
      
      {/* glow */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[500px] h-[120px] bg-green-500/20 blur-[120px] rounded-full" />
      </div>

      {/* glass navbar */}
      <div
        className={`max-w-7xl mx-auto transition-all duration-700 ${
          show ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
        }`}
      >
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-8 py-4 flex items-center justify-between">
          
          {/* LEFT — Logo */}
          <div className="flex items-center gap-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Green_circle.svg"
              className="w-9 h-9"
            />
            <span className="text-white font-semibold text-lg">
              DonateBridge
            </span>
          </div>

          {/* CENTER — links */}
          <div className="hidden md:flex gap-10 text-gray-300 text-sm">
            <a className="hover:text-green-400 transition cursor-pointer">
              About
            </a>
            <a className="hover:text-green-400 transition cursor-pointer">
              How it works
            </a>
            <a className="hover:text-green-400 transition cursor-pointer">
              Causes
            </a>
            <a className="hover:text-green-400 transition cursor-pointer">
              Contact
            </a>
          </div>

          {/* RIGHT — auth */}
          <div className="flex gap-3">
            <button className="text-gray-300 hover:text-white transition">
              Login
            </button>
            <button className="bg-green-500 text-black px-4 py-2 rounded-lg font-semibold hover:scale-105 transition">
              Sign up
            </button>
          </div>

        </div>
      </div>
    </header>
  )
}
