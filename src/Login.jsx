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
      const res = await fetch(${import.meta.env.VITE_API_URL}/api/login`, {
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
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{
        backgroundImage: "url('/admin-bg.png')",
      }}
    >
      {/* Dark overlay for admin feel */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* LEFT CONTENT (Brand + Vision) */}
      <div className="hidden md:flex flex-col justify-center text-white max-w-lg px-10 relative z-10">
        <h1 className="text-5xl font-bold leading-tight mb-4">
          Real Kitchens.
          <br />
          Real Homemade.
          <span className="text-orange-400"> Real Good.</span>
        </h1>

        <p className="text-gray-300 mb-6">
          Empowering home chefs to deliver authentic meals.
          Manage kitchens, monitor quality, and scale trust.
        </p>

        <div className="flex gap-6 text-sm">
          <div>🍲 Home Chefs</div>
          <div>🧼 Quality Control</div>
          <div>🚚 Delivery Ops</div>
        </div>
      </div>

      {/* LOGIN CARD */}
      <div className="relative z-10 bg-white/10 backdrop-blur-lg border border-white/20 text-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
        
        <h2 className="text-2xl font-semibold text-center mb-6">
          Admin Login 🔐
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          
          <input
            type="email"
            placeholder="admin@example.com"
            className="w-full px-4 py-2 rounded-lg bg-white/20 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="••••••••"
            className="w-full px-4 py-2 rounded-lg bg-white/20 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 py-2 rounded-lg hover:bg-orange-600 transition"
          >
            {loading ? "Authenticating..." : "Secure Login"}
          </button>
        </form>

        {message && (
          <p className="mt-4 text-center text-sm">{message}</p>
        )}
      </div>
    </div>
  );
}
