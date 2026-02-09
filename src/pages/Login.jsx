import Header from "../components/Header"

export default function Login() {
  return (
    <div className="min-h-screen bg-brand-bg text-white">
      <Header />

      <section className="pt-40 px-6 pb-20 relative flex justify-center">
        
        {/* glow */}
        <div className="absolute inset-0 flex justify-center pointer-events-none">
          <div className="w-[700px] h-[300px] bg-green-500/10 blur-[140px] rounded-full" />
        </div>

        <div className="relative w-full max-w-md backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
          
          {/* heading */}
          <h1 className="text-3xl font-semibold mb-2">
            Welcome back
          </h1>

          <p className="text-white/60 mb-8">
            Continue your journey of impact.
          </p>

          {/* FORM */}
          <div className="space-y-4">
            <input
              placeholder="Email"
              className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-green-400 transition"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-green-400 transition"
            />
          </div>

          {/* forgot */}
          <div className="mt-3 text-right text-sm">
            <span className="text-green-400 hover:underline cursor-pointer">
              Forgot password?
            </span>
          </div>

          {/* MAIN CTA */}
          <button className="mt-6 w-full bg-green-500 text-black py-3 rounded-lg font-semibold hover:scale-[1.02] transition shadow-glow">
            Login
          </button>

          {/* divider */}
          <div className="my-8 flex items-center gap-4 text-white/30 text-sm">
            <div className="flex-1 h-px bg-white/10" />
            or continue with
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* GOOGLE */}
          <button className="w-full flex items-center justify-center gap-3 py-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              className="w-5 h-5"
            />
            <span className="text-white/80">Login with Google</span>
          </button>

          {/* signup redirect */}
          <div className="mt-8 text-center text-sm text-white/50">
            New here?{" "}
            <span className="text-green-400 hover:underline cursor-pointer">
              Create an account
            </span>
          </div>

        </div>
      </section>
    </div>
  )
}
