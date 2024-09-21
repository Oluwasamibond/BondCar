import React, { useState } from "react";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";

const NavLinks = [
  {
    id: "1",
    name: "HOME",
    link: "/#",
  },

  {
    id: "2",
    name: "CARS",
    link: "/#cars",
  },

  {
    id: "3",
    name: "ABOUT",
    link: "/#about",
  },

  {
    id: "4",
    name: "BOOKING",
    link: "/#booking",
  },
];
const Navbar = ({ theme, setTheme }) => {
  const [showMenu, setShowMenu] = useState(false);

  const togglemenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className="shadow-md bg-white dark:bg-dark dark:text-white duration-300 relative z-40">
      <div className="container py-2 md:py-0">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-bold text-3xl font-serif">BondCar Rental</h1>
          </div>
          <div className="flex max-md:hidden">
            <ul className="flex items-center gap-8">
              {NavLinks.map((data) => (
                <li key={data.id} className="py-4">
                  <a
                    className="inline-block py-4 hover:border-b-2 hover:text-primary
                    hover:border-primary transition-colors duration-500 text-lg font-medium"
                    href={data.link}
                  >
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            {theme === "dark" ? (
              <BiSolidSun
                onClick={() => setTheme("light")}
                className="text-2xl ml-20"
              />
            ) : (
              <BiSolidMoon
                onClick={() => setTheme("dark")}
                className="text-2xl ml-20"
              />
            )}
          </div>
          <div className="md:hidden cursor-pointer" onClick={togglemenu}>
            {showMenu ? <HiMenuAlt1 size={30} /> : <HiMenuAlt3 size={30} />}
          </div>
          <div
            className={
              showMenu
                ? "fixed left-0 top-0 bg-white dark:bg-gray-900 h-screen w-[75%] rounded-r-xl shadow-md flex flex-col justify-between px-8 pb-6 pt-16 ease-in-out duration-300"
                : "fixed left-[-100%]"
            }
          >
            <div className="card">
              <div className="flex items-center justify-start gap-3">
                <FaUserCircle size={50} />
                <div>
                  <h1>Hello User</h1>
                  <h1>Premimu User</h1>
                </div>
              </div>
              <ul className="">
                {NavLinks.map((data) => (
                  <li key={data.id} className="py-4">
                    <a
                      className="inline-block py-4 hover:border-b-2 hover:text-primary
                    hover:border-primary transition-colors duration-500 text-lg font-medium"
                      href={data.link}
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <h1>
              Made with 💜 by{" "}
              <a href="https://oluwasamibond.github.io">Samibond</a>
            </h1>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
