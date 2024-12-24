function NewsList({ news, type }) {
  return (
    <div className="grid max-w-5xl grid-cols-1 gap-6 p-2 mx-auto mt-6 rounded-lg shadow-md sm:grid-cols-2 lg:grid-cols-3 bg-gray-50">
      {type == "search" && (
        <h1 className="text-lg font-semibold text-center text-gray-800 col-span-full">
          Search results: {news.length}
        </h1>
      )}

      {news.map((item, i) => (
        <div
          key={i}
          className="flex flex-col p-6 transition-shadow bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl"
        >
          <h2 className="mb-2 text-lg font-bold text-gray-800 truncate">
            {item.title}
          </h2>
          <p className="mb-2 text-sm text-gray-500">
            <span className="font-semibold text-gray-600">Published on:</span>{" "}
            {new Date(item.datePublished).toLocaleDateString()}
          </p>
          <p className="mb-2 text-sm text-gray-500">
            <span className="font-semibold text-gray-600">Section:</span>{" "}
            {item.section}
          </p>
          <p className="mb-2 text-sm text-gray-500">
            <span className="font-semibold text-gray-600">Source:</span>{" "}
            {item.source}
          </p>
          <p className="mb-4 text-sm text-gray-500">
            <span className="font-semibold text-gray-600">Author:</span>{" "}
            {item.author || "Unknown"}
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={item.url}
            className="mt-auto text-sm font-medium text-blue-600 hover:underline"
          >
            Read More →
          </a>
        </div>
      ))}
    </div>
  );
}

export default NewsList;
