const Order = () => {
  return (
    <main classNameName="flex-grow flex-1 p-6 h-full overflow-y-scroll">
      <div class="rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Order Management</h1>

        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-200 text-gray-600 text-left">
                <th className="px-4 py-2">Order ID</th>
                <th className="px-4 py-2">Customer Name</th>
                <th className="px-4 py-2">Product</th>
                <th className="px-4 py-2">Quantity</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-200">
                <td className="px-4 py-2">#12345</td>
                <td className="px-4 py-2">John Doe</td>
                <td className="px-4 py-2">Wireless Headphones</td>
                <td className="px-4 py-2">2</td>
                <td className="px-4 py-2">$120.00</td>
                <td className="px-4 py-2">
                  <span className="px-3 py-1 text-green-600 bg-green-100 rounded-full">
                    Shipped
                  </span>
                </td>
                <td className="px-4 py-2">
                  <button className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-700">
                    View
                  </button>
                  <button className="px-4 py-2 text-white bg-yellow-500 rounded-lg hover:bg-yellow-700 ml-2">
                    Mark as Shipped
                  </button>
                </td>
              </tr>

              <tr className="border-t border-gray-200">
                <td className="px-4 py-2">#12346</td>
                <td className="px-4 py-2">Jane Smith</td>
                <td className="px-4 py-2">Smartphone</td>
                <td className="px-4 py-2">1</td>
                <td className="px-4 py-2">$799.99</td>
                <td className="px-4 py-2">
                  <span className="px-3 py-1 text-yellow-600 bg-yellow-100 rounded-full">
                    Pending
                  </span>
                </td>
                <td className="px-4 py-2">
                  <button className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-700">
                    View
                  </button>
                  <button className="px-4 py-2 text-white bg-yellow-500 rounded-lg hover:bg-yellow-700 ml-2">
                    Mark as Shipped
                  </button>
                </td>
              </tr>

              <tr className="border-t border-gray-200">
                <td className="px-4 py-2">#12347</td>
                <td className="px-4 py-2">Robert Brown</td>
                <td className="px-4 py-2">Laptop</td>
                <td className="px-4 py-2">1</td>
                <td className="px-4 py-2">$1200.00</td>
                <td className="px-4 py-2">
                  <span className="px-3 py-1 text-red-600 bg-red-100 rounded-full">
                    Cancelled
                  </span>
                </td>
                <td className="px-4 py-2">
                  <button className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-700">
                    View
                  </button>
                  <button className="px-4 py-2 text-white bg-yellow-500 rounded-lg hover:bg-yellow-700 ml-2">
                    Mark as Shipped
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default Order;
