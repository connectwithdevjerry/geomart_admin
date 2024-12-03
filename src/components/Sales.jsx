import React from "react";

const Sales = () => {
  return (
    <main className="flex-grow flex-1 p-6 h-full overflow-y-scroll">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold text-gray-800">
          Sales and Discount Management
        </h1>
        <button class="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition duration-200">
          Add New Discount
        </button>
      </div>

      {/* <!-- Sales and Discount Table --> */}
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Product Name
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Original Price
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Discount (%)
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Discounted Price
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            {/* <!-- Row 1 --> */}
            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Product 1
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                $100.00
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                20%
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                $80.00
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Active
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button class="text-blue-600 hover:text-blue-900">Edit</button>
                <button class="ml-4 text-red-600 hover:text-red-900">
                  Delete
                </button>
              </td>
            </tr>
            {/* <!-- Row 2 --> */}
            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Product 2
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                $50.00
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                10%
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                $45.00
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                  Inactive
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button class="text-blue-600 hover:text-blue-900">Edit</button>
                <button class="ml-4 text-red-600 hover:text-red-900">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Sales;
