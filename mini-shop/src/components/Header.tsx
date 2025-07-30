import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  {
    /* Mobile Toggle Open*/
  }
  const [isOpen, setisOpen] = useState(false);
  const toggleOpen = () => {
    setisOpen(!isOpen);
  };

  return (
    <header className="bg-sky-500 p-4 text-white">
      <nav className="item-center container mx-auto flex justify-between">
        <Link to="/" className="text-lg font-bold">
          Techno City
        </Link>
        <button onClick={toggleOpen} className="block text-2xl lg:hidden">
          &#8801;
        </button>
        {/* Desktop View Nav*/}
        <ul className="hidden gap-6 text-base lg:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-yellow-500" : "hover:text-gray-300"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive ? "text-yellow-500" : "hover:text-gray-300"
            }
          >
            Shop
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? "text-yellow-500" : "hover:text-gray-300"
            }
          >
            Cart
          </NavLink>
        </ul>
        <div
          className={`fixed inset-0 z-50 transform bg-sky-600 opacity-80 ${isOpen ? "translate-x-0" : "translate-x-full"} transition-trasform duration-300 ease-in-out lg:hidden`}
        >
          <div className="flex h-full flex-col items-center justify-center gap-8">
            <Link to={"/"} className="text-3xl" onClick={toggleOpen}>
              Home
            </Link>
            <Link to={"/shop"} className="text-3xl" onClick={toggleOpen}>
              Shop
            </Link>
            <Link to={"/cart"} className="text-3xl" onClick={toggleOpen}>
              Cart
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
