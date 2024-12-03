const Reports = () => {
  return (
    <main className="flex-grow flex-1 p-6 h-full overflow-y-scroll">
      <div class="flex justify-between items-center">
        <h1 class="text-2xl font-bold text-gray-800">Reports</h1>
        <button class="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition duration-200">
          Export CSV
        </button>
      </div>

      {/* <!-- Filters Section --> */}
      <div class="bg-white rounded-lg shadow-md p-4 mt-5">
        <h2 class="text-lg font-semibold text-gray-700 mb-4">Filters</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label
              for="date-from"
              class="block text-sm font-medium text-gray-700"
            >
              From Date
            </label>
            <input
              type="date"
              id="date-from"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              for="date-to"
              class="block text-sm font-medium text-gray-700"
            >
              To Date
            </label>
            <input
              type="date"
              id="date-to"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              for="category"
              class="block text-sm font-medium text-gray-700"
            >
              Category
            </label>
            <select
              id="category"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option>All</option>
              <option>Sales</option>
              <option>Expenses</option>
              <option>Revenue</option>
            </select>
          </div>
        </div>
        <button class="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition duration-200">
          Apply Filters
        </button>
      </div>

      {/* <!-- Summary Section --> */}
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
        <div class="bg-white p-4 rounded-lg shadow">
          <h3 class="text-gray-500 text-sm">Total Sales</h3>
          <p class="text-xl font-bold text-gray-800">$50,000</p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow">
          <h3 class="text-gray-500 text-sm">Total Expenses</h3>
          <p class="text-xl font-bold text-gray-800">$20,000</p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow">
          <h3 class="text-gray-500 text-sm">Net Revenue</h3>
          <p class="text-xl font-bold text-gray-800">$30,000</p>
        </div>
      </div>

      {/* <!-- Reports Table --> */}
      <div class="bg-white rounded-lg shadow-md overflow-hidden mt-5">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            {/* <!-- Report Row 1 --> */}
            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                2024-12-01
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Sales
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Product A
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                $1,000
              </td>
            </tr>
            {/* <!-- Report Row 2 --> */}
            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                2024-12-02
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Expenses
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Marketing
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                $500
              </td>
            </tr>
            {/* <!-- More Report Rows can be added here --> */}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Reports;
