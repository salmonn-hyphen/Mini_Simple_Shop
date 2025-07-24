import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-sky-500 p-4 text-white">
      <nav className="item-center container mx-auto flex justify-between">
        <Link to="/" className="text-lg font-bold">
          Techno City
        </Link>
        <button className="block text-2xl lg:hidden">&#8801;</button>
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
      </nav>
    </header>
  );
}

export default Header;
