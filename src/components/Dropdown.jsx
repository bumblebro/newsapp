import  { useState, useEffect } from "react";

const Dropdown = ({ options, type }) => {
  const [selected, setSelected] = useState([]);
  const [isopen, setIsOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(type);
    if (stored) {
      setSelected(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(type, JSON.stringify(selected));
  }, [selected]);

  const toggleDropdown = () => setIsOpen(!isopen);

  const handleOptionToggle = (option) => {
    if (selected.includes(option)) {
      setSelected(selected.filter((item) => item !== option));
    } else {
      setSelected([...selected, option]);
    }
  };

  return (
    <div className="relative w-full">
      <button
        className="flex items-center justify-between w-full px-4 py-2 text-left bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        onClick={toggleDropdown}
      >
        <span className="text-sm">
          {selected.length > 0 ? selected.join(", ") : "Select options"}
        </span>
        <span className="text-lg">&#9662;</span>
      </button>

      {isopen && (
        <ul className="absolute z-10 w-full mt-1 overflow-auto bg-white border border-gray-300 rounded-md shadow-lg max-h-60">
          {options.map((option, index) => (
            <li
              key={index}
              className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100 focus:bg-blue-100"
              onClick={() => handleOptionToggle(option)}
            >
              <input
                type="checkbox"
                checked={selected.includes(option)}
                onChange={() => handleOptionToggle(option)}
                className="mr-2"
              />
              <span className="text-sm">{option}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
