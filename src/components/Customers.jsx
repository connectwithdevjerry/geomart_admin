import React from "react";

const Customers = () => {
  return (
    <main className="flex-grow flex-1 p-6 h-full overflow-y-scroll">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold text-gray-800">Customer Management</h1>
        <button class="bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition duration-200">
          Add New Customer
        </button>
      </div>

      {/* <!-- Table Section --> */}
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Customer Name
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Phone
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total Orders
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            {/* <!-- Customer Row 1 --> */}
            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                John Doe
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                john.doe@example.com
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                +1234567890
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                15
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button class="text-blue-600 hover:text-blue-900">Edit</button>
                <button class="ml-4 text-red-600 hover:text-red-900">
                  Delete
                </button>
              </td>
            </tr>
            {/* <!-- Customer Row 2 --> */}
            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Jane Smith
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                jane.smith@example.com
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                +9876543210
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                25
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button class="text-blue-600 hover:text-blue-900">Edit</button>
                <button class="ml-4 text-red-600 hover:text-red-900">
                  Delete
                </button>
              </td>
            </tr>
            {/* <!-- Add more rows as needed --> */}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Customers;
