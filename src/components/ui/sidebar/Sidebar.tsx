"use client";

import { useUIStore } from "@/store";
import Link from "next/link";

const links = [
  { name: "accordion", href: "accordion" },
  { name: "alert", href: "alert" },
  { name: "button", href: "button" },
  { name: "Alert Dialog", href: "alert-dialog" },
  { name: "Dialog", href: "dialog" },
  { name: "Badge", href: "badge" },
].sort((a, b) => a.name.localeCompare(b.name));

export const Sidebar = () => {
  const toggleSideMenu = useUIStore((state) => state.openSideMenu);
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);

  return (
    <>
      <aside
        id="sidebar"
        className={`fixed z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75 ${
          isSideMenuOpen ? "block" : "hidden"
        }`}
        aria-label="Sidebar"
      >
        <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex-1 px-3 bg-white divide-y space-y-1">
              <ul className="space-y-2 pb-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-base capitalize text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                    >
                      <span className="ml-3">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </aside>
      <div
        onClick={toggleSideMenu}
        className={`bg-gray-900 opacity-50 fixed inset-0 z-10
            ${isSideMenuOpen ? "block" : "hidden"}
          `}
        id="sidebarBackdrop"
      ></div>
    </>
  );
};
