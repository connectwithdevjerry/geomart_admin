import SalesChart from "./SalesChart";

const Dashboard = () => {
  return (
    <main className="flex-grow flex-1 p-6 h-full overflow-y-scroll">
      {/* <!-- Top Bar --> */}
      <div className="flex justify-between items-center bg-white p-4 rounded shadow mb-6">
        <h2 className="text-2xl font-semibold">Dashboard</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Logout
        </button>
      </div>

      {/* <!-- Metrics --> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-bold">Total Sales</h3>
          <p className="text-2xl mt-2">$12,345</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-bold">Orders</h3>
          <p className="text-2xl mt-2">245</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-bold">Products</h3>
          <p className="text-2xl mt-2">56</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-bold">Customers</h3>
          <p className="text-2xl mt-2">1,234</p>
        </div>
      </div>

      {/* <!-- Recent Orders --> */}
      <div className="bg-white mt-6 p-4 rounded shadow">
        <h3 className="text-xl font-bold mb-4">Recent Orders</h3>
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="px-4 py-2">Order ID</th>
              <th className="px-4 py-2">Customer</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2">#001</td>
              <td className="px-4 py-2">John Doe</td>
              <td className="px-4 py-2">$123</td>
              <td className="px-4 py-2 text-green-500">Completed</td>
            </tr>
            <tr>
              <td className="px-4 py-2">#002</td>
              <td className="px-4 py-2">Jane Smith</td>
              <td className="px-4 py-2">$456</td>
              <td className="px-4 py-2 text-yellow-500">Pending</td>
            </tr>
            <tr>
              <td className="px-4 py-2">#003</td>
              <td className="px-4 py-2">Sam Wilson</td>
              <td className="px-4 py-2">$789</td>
              <td className="px-4 py-2 text-red-500">Cancelled</td>
            </tr>
          </tbody>
        </table>
      </div>
      <SalesChart />
    </main>
  );
};

export default Dashboard;
