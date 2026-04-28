import { useState } from "react";
import './App.css'
import { useNavigate } from "react-router-dom";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        navigate("/dashboard");
      } else {
        setMessage("❌ " + data.message);
      }
    } catch (err) {
      setMessage("⚠️ Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
 <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#2b1d0e]">

      {/* Glow Effects */}
      <div className="absolute w-[400px] h-[400px] bg-orange-500/20 rounded-full blur-3xl top-0 left-0 -translate-x-1/2 -translate-y-1/2"></div>

      <div className="absolute w-[300px] h-[300px] bg-orange-400/10 rounded-full blur-2xl bottom-0 right-0 translate-x-1/2 translate-y-1/2"></div>

      {/* Login Card */}
      <div className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 w-full max-w-md text-white shadow-2xl">
        
        <h2 className="text-2xl font-semibold text-center mb-2">
          Admin Login 🔐
        </h2>

        <p className="text-center text-gray-400 text-sm mb-6">
          Manage kitchens, chefs & orders
        </p>

        <form onSubmit={handleLogin} className="space-y-4">
          
          <input
            type="email"
            placeholder="admin@example.com"
            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="••••••••"
            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 py-2 rounded-lg hover:opacity-90 transition"
          >
            Secure Login
          </button>
        </form>
      </div>
    </div>
  );
}
