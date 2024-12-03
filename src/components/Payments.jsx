const Payments = () => {
  return (
    <main className="flex-grow flex-1 p-6 h-full overflow-y-scroll">
      {/* <!-- Payments Management Section --> */}
      <div class="bg-white rounded-lg shadow-md p-6">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-bold text-gray-800">Payments Management</h2>
          <button class="bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition duration-200">
            Add Payment
          </button>
        </div>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Transaction ID
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Payment Method
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              {/* <!-- Example Payments Row --> */}
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  #98765
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Jane Smith
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  $200.00
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Credit Card
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-green-600">
                  Completed
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  2024-12-01
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button class="text-blue-600 hover:text-blue-900">
                    View
                  </button>
                  <button class="ml-4 text-red-600 hover:text-red-900">
                    Delete
                  </button>
                </td>
              </tr>
              {/* <!-- Additional Rows Can Be Added Here --> */}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default Payments;
