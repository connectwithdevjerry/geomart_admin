import React from "react";

const Product = () => {
  return (
    <main className="flex-grow flex-1 p-6 h-full overflow-y-scroll">
      <div class="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Product Management
          </h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition duration-200">
            Add New Product
          </button>
        </div>

        {/* <!-- Table Section --> */}
        <div className="bg-white rounded-lg overflow-hidden">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Stock
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {/* <!-- Product Row 1 --> */}
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Product 1
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Category A
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  $50.00
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  100
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900">
                    Edit
                  </button>
                  <button className="ml-4 text-red-600 hover:text-red-900">
                    Delete
                  </button>
                </td>
              </tr>
              {/* <!-- Product Row 2 --> */}
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Product 2
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Category B
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  $75.00
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  50
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900">
                    Edit
                  </button>
                  <button className="ml-4 text-red-600 hover:text-red-900">
                    Delete
                  </button>
                </td>
              </tr>
              {/* <!-- More Product Rows can be added here --> */}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default Product;
