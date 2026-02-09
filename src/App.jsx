import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Donate from "./pages/Donate"
import Login from "./pages/Login"
import Signup from "./pages/Signup"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  )
}
