function Filter({ setStartDate, setEndDate, setCategory, setSource, news }) {
  return (
    <div className="max-w-[800px] mx-auto mt-6 bg-gray-100 p-6 rounded-lg shadow-md">
      <div className="flex flex-col gap-4 mb-4 sm:flex-row">
        <input
          type="date"
          name="startDate"
          id="startDate"
          onChange={(e) => {
            setStartDate(e.target.value);
          }}
          className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg sm:w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500"
        />
        <input
          type="date"
          name="endDate"
          id="endDate"
          onChange={(e) => {
            setEndDate(e.target.value);
          }}
          className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg sm:w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500"
        />
      </div>
      <div className="flex flex-col gap-4 sm:flex-row">
        <select
          name="Category"
          id="category"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg sm:w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500"
        >
          <option disabled selected>
            Select Category
          </option>
          {[...new Set(news.map((item) => item.section))].map((sec, i) => (
            <option key={i} value={sec}>
              {sec}
            </option>
          ))}
        </select>
        <select
          name="Source"
          id="source"
          onChange={(e) => {
            setSource(e.target.value);
          }}
          className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg sm:w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500"
        >
          <option disabled selected>
            Select source
          </option>
          <option value="guardian">Guardian</option>
          <option value="newsapi">NewAPI</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;
