"use client";

import { useUIStore } from "@/store";

export const TopMenu: React.FC = () => {
  const toggleSideMenu = useUIStore((state) => state.openSideMenu);

  return (
    <nav className="bg-white border-b border-gray-200 fixed z-30 w-full">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <button
              id="toggleSidebarMobile"
              onClick={toggleSideMenu}  // Alterna el estado del Sidebar
              aria-expanded="true"
              aria-controls="sidebar"
              className="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded"
            >
              <svg
                id="toggleSidebarMobileHamburger"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <a
              href="#"
              className="text-xl font-bold flex items-center lg:ml-2.5"
            >
              {/* Logo */}
              <span className="self-center whitespace-nowrap ml-2">
                MY COMPANY
              </span>
            </a>
          </div>
          <div className="flex items-center">
            {/* User Avatar */}
            <div className="bg-blue-500 text-white p-2 rounded-full w-12 h-12 flex items-center justify-center">
              FH
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
