import { Home, Users, Utensils, ShoppingCart } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md p-5">
        <h1 className="text-xl font-bold text-orange-500 mb-8">
          FoodLinners
        </h1>

        <nav className="space-y-4 text-gray-600">
          <div className="flex items-center gap-3 hover:text-orange-500 cursor-pointer">
            <Home size={18}/> Dashboard
          </div>
          <div className="flex items-center gap-3 hover:text-orange-500 cursor-pointer">
            <Users size={18}/> Chefs
          </div>
          <div className="flex items-center gap-3 hover:text-orange-500 cursor-pointer">
            <Utensils size={18}/> Meals
          </div>
          <div className="flex items-center gap-3 hover:text-orange-500 cursor-pointer">
            <ShoppingCart size={18}/> Orders
          </div>
        </nav>
      </div>

      {/* Main */}
      <div className="flex-1 p-6">

        {/* Topbar */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Dashboard</h2>
          <input
            type="text"
            placeholder="Search..."
            className="border px-3 py-2 rounded-lg"
          />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">

          <div className="bg-white p-5 rounded-xl shadow">
            <p className="text-gray-500">Total Orders</p>
            <h3 className="text-xl font-bold mt-2">1,200</h3>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <p className="text-gray-500">Active Chefs</p>
            <h3 className="text-xl font-bold mt-2">85</h3>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <p className="text-gray-500">Customers</p>
            <h3 className="text-xl font-bold mt-2">540</h3>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <p className="text-gray-500">Revenue</p>
            <h3 className="text-xl font-bold mt-2">₹45,000</h3>
          </div>

        </div>

        {/* Analytics Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-semibold mb-4">Order Analytics</h3>
            <div className="h-40 flex items-center justify-center text-gray-400">
              (Graph coming soon)
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-semibold mb-4">Revenue Growth</h3>
            <div className="h-40 flex items-center justify-center text-gray-400">
              (Chart coming soon)
            </div>
          </div>

        </div>

        {/* Table */}
        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="font-semibold mb-4">Recent Orders</h3>

          <table className="w-full text-sm text-left">
            <thead className="text-gray-500 border-b">
              <tr>
                <th className="py-2">Order ID</th>
                <th>Chef</th>
                <th>Customer</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td className="py-2">#1234</td>
                <td>Ravi Kitchen</td>
                <td>John</td>
                <td>₹250</td>
                <td className="text-green-500">Delivered</td>
              </tr>

              <tr className="border-b">
                <td className="py-2">#1235</td>
                <td>Home Taste</td>
                <td>Alice</td>
                <td>₹180</td>
                <td className="text-yellow-500">Pending</td>
              </tr>

            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}