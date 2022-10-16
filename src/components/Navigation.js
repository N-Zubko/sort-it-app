const Navigation = () => {
  return (
    <nav>
      <ul className="flex flex-row flex-wrap justify-end mr-10">
        <li className="mr-3">
          <a
            className="inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white"
            href="#"
          >
            Play
          </a>
        </li>
        <li className="mr-3">
          <a
            className="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3 text-gray-400"
            href="#"
          >
            About
          </a>
        </li>
        <li className="mr-3">
          <a
            className="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3 text-gray-400"
            href="#"
          >
            Learn
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
