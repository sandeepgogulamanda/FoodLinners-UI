import { Home, Users, Utensils, ShoppingCart } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#2b1d0e] text-white">

      {/* Sidebar */}
      <div className="w-64 bg-white/5 backdrop-blur-xl border-r border-white/10 p-6">

        <h1 className="text-xl font-bold text-orange-400 mb-8">
          FoodLinners
        </h1>

        <nav className="space-y-4 text-gray-300">
          <div className="flex items-center gap-3 hover:text-orange-400 cursor-pointer">
            <Home size={18}/> Dashboard
          </div>
          <div className="flex items-center gap-3 hover:text-orange-400 cursor-pointer">
            <Users size={18}/> Chefs
          </div>
          <div className="flex items-center gap-3 hover:text-orange-400 cursor-pointer">
            <Utensils size={18}/> Meals
          </div>
          <div className="flex items-center gap-3 hover:text-orange-400 cursor-pointer">
            <ShoppingCart size={18}/> Orders
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">

        {/* Topbar */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Dashboard</h2>
          <input
            type="text"
            placeholder="Search..."
            className="bg-white/10 border border-white/20 px-3 py-2 rounded-lg text-sm"
          />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">

          <div className="bg-white/10 p-5 rounded-xl border border-white/10">
            <p className="text-gray-400">Total Orders</p>
            <h3 className="text-xl font-bold mt-2">1,200</h3>
          </div>

          <div className="bg-white/10 p-5 rounded-xl border border-white/10">
            <p className="text-gray-400">Active Chefs</p>
            <h3 className="text-xl font-bold mt-2">85</h3>
          </div>

          <div className="bg-white/10 p-5 rounded-xl border border-white/10">
            <p className="text-gray-400">Customers</p>
            <h3 className="text-xl font-bold mt-2">540</h3>
          </div>

          <div className="bg-white/10 p-5 rounded-xl border border-white/10">
            <p className="text-gray-400">Revenue</p>
            <h3 className="text-xl font-bold mt-2">₹45,000</h3>
          </div>

        </div>

        {/* Table */}
        <div className="bg-white/10 p-5 rounded-xl border border-white/10">
          <h3 className="mb-4 font-semibold">Recent Orders</h3>

          <table className="w-full text-sm border-collapse">
  <thead className="text-gray-400 border-b border-white/10">
    <tr>
      <th className="py-3 text-left w-[15%]">Order ID</th>
      <th className="text-left w-[25%]">Chef</th>
      <th className="text-left w-[25%]">Customer</th>
      <th className="text-right w-[15%]">Amount</th>
      <th className="text-right w-[20%]">Status</th>
    </tr>
  </thead>

  <tbody>
    <tr className="border-b border-white/10">
      <td className="py-3">#1234</td>
      <td>Sandeep's Kitchen</td>
      <td>Bobi</td>
      <td className="text-right">₹250</td>
      <td className="text-right text-green-400">Delivered</td>
    </tr>

    <tr>
      <td className="py-3">#1235</td>
      <td>Home Taste</td>
      <td>Chocolate</td>
      <td className="text-right">₹180</td>
      <td className="text-right text-yellow-400">Pending</td>
    </tr>
  </tbody>
</table>
        </div>

      </div>
    </div>
  );
}
