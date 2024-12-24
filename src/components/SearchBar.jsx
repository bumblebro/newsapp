function SearchBar({ setInput, setButton, searchByKeyword, button }) {
  return (
    <form
      className="max-w-[800px]  sm:mx-auto mt-4 bg-gray-100  shadow-md flex items-center justify-center transition-all border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500"
      onSubmit={(e) => {
        e.preventDefault();
        setButton(false);
        searchByKeyword();
      }}
    >
      <input
        onChange={(e) => {
          setButton(true);
          setInput(e.target.value);
        }}
        className="w-full px-4 py-2 m-1 text-gray-800 placeholder-gray-500 rounded-lg"
        type="search"
        name=""
        id=""
        placeholder="Search for articles..."
      />
      <button
        className={`${
          !button && "hidden"
        } bg-white  font-semibold py-2 px-2 rounded-lg shadow-sm hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400   transition-all mr-1 text-blue-600 `}
      >
        Submit
      </button>
    </form>
  );
}

export default SearchBar;
