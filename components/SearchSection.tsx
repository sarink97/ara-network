export const SearchSection = () => (
  <div className="bg-white rounded-lg shadow-lg p-8">
    <h3 className="text-xl font-semibold mb-4">Search by Country</h3>
    <div className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Search country..."
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
        Find Resellers
      </button>
    </div>
    <p className="mt-4 text-gray-600">
      Don't see your country? Fill out our contact form and we'll connect you
      with the nearest reseller.
    </p>
  </div>
);
