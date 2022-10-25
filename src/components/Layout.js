import { Outlet, NavLink } from 'react-router-dom';
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <>
      {/* TODO: Add Sort_it! logo to the page top, left of the nav bar 
      🗑️ icon for the logo
      */}
      <nav className="flex flex-row flex-wrap justify-end bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 mb-2">
        <ul className="flex flex-row flex-wrap justify-end mr-10">
          <li className="mr-3">
            <NavLink
              to="/about"
              className="text-white bg-gradient-to-br from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              About
            </NavLink>
          </li>
          <li className="mr-3">
            <NavLink
              to="/"
              className="text-white bg-gradient-to-br from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Play
            </NavLink>
          </li>
          <li className="mr-3">
            <NavLink
              to="/learn"
              className="text-white bg-gradient-to-br from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Learn
            </NavLink>
          </li>
        </ul>
      </nav>
      <main>
        <div>
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
