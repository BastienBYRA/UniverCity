import React from "react";
import "./../App.css";

class Header extends React.Component {
  render() {
    return (
      <header className="">
        <nav className="bg-gray-600 px-2 sm:px-4 py-2.5">
          <div className="container flex flex-wrap items-center justify-between mx-auto">
            <a href="/" className="flex items-center">
              <img
                src="logo_univercity.png"
                alt="Univercity Logo"
                className="w-32"
              />
            </a>

            <div className="w-full md:block md:w-auto" id="navbar-default">
              <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 font-medium">
                <li className="group">
                  <a
                    href="/description"
                    className="block py-2 pl-3 text-gray-200 group-hover:text-rose-400 no-underline text-base"
                    aria-current="page"
                  >
                    <p>Description</p>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 text-gray-200 hover:text-rose-400 no-underline text-base"
                    aria-current="page"
                  >
                    Formations
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 text-gray-200 hover:text-rose-400 no-underline text-base"
                    aria-current="page"
                  >
                    Enseignants
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 text-gray-200 hover:text-rose-400 no-underline text-base"
                    aria-current="page"
                  >
                    Actualités
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
