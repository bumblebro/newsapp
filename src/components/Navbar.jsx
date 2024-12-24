function Navbar({ setSettings }) {
  return (
    <div className="flex items-center justify-between p-2 bg-gray-100 rounded-lg shadow-md sm:mx-10 sm:flex-row">
      <h1 className="text-lg font-bold text-center text-blue-700 sm:text-2xl sm:mb-0">
        News Web
      </h1>
      <div className="flex gap-1 lg:gap-4">
        <button
          className="px-2 py-1 text-white transition-all bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={() => {
            location.reload();
          }}
        >
          Home
        </button>
        <button
          className="px-2 py-1 text-gray-800 transition-all bg-gray-200 rounded-lg shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
          onClick={() => {
            console.log("PRESSED");
            setSettings((prev) => !prev);
          }}
        >
          Set Preference
        </button>
      </div>
    </div>
  );
}

export default Navbar;
