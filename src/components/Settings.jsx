const Settings = () => {
  return (
    <main className="flex-grow flex-1 p-6 h-full overflow-y-scroll">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold text-gray-800">Admin Settings</h1>
        <button class="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition duration-200">
          Save Changes
        </button>
      </div>

      {/* <!-- Settings Sections --> */}
      <div class="bg-white shadow-md rounded-lg p-6">
        {/* <!-- Profile Settings --> */}
        <div class="mb-8">
          <h2 class="text-lg font-semibold text-gray-800 mb-4">
            Profile Settings
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* <!-- Full Name --> */}
            <div>
              <label
                class="block text-sm font-medium text-gray-600 mb-2"
                for="full-name"
              >
                Full Name
              </label>
              <input
                type="text"
                id="full-name"
                class="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="John Doe"
              />
            </div>
            {/* <!-- Email Address --> */}
            <div>
              <label
                class="block text-sm font-medium text-gray-600 mb-2"
                for="email"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                class="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="admin@example.com"
              />
            </div>
          </div>
        </div>

        {/* <!-- Account Settings --> */}
        <div class="mb-8">
          <h2 class="text-lg font-semibold text-gray-800 mb-4">
            Account Settings
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* <!-- Username --> */}
            <div>
              <label
                class="block text-sm font-medium text-gray-600 mb-2"
                for="username"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                class="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="admin"
              />
            </div>
            {/* <!-- Password --> */}
            <div>
              <label
                class="block text-sm font-medium text-gray-600 mb-2"
                for="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                class="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="••••••••"
              />
            </div>
          </div>
        </div>

        {/* <!-- Notification Settings --> */}
        <div>
          <h2 class="text-lg font-semibold text-gray-800 mb-4">
            Notification Preferences
          </h2>
          <div class="space-y-4">
            {/* <!-- Email Notifications --> */}
            <div class="flex items-center">
              <input
                type="checkbox"
                id="email-notifications"
                class="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                for="email-notifications"
                class="ml-2 text-sm font-medium text-gray-600"
              >
                Receive email notifications
              </label>
            </div>
            {/* <!-- SMS Notifications --> */}
            <div class="flex items-center">
              <input
                type="checkbox"
                id="sms-notifications"
                class="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                for="sms-notifications"
                class="ml-2 text-sm font-medium text-gray-600"
              >
                Receive SMS notifications
              </label>
            </div>
            {/* <!-- Push Notifications --> */}
            <div class="flex items-center">
              <input
                type="checkbox"
                id="push-notifications"
                class="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                for="push-notifications"
                class="ml-2 text-sm font-medium text-gray-600"
              >
                Receive push notifications
              </label>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Settings;
