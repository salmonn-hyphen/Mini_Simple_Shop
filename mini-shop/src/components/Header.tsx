import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-sky-500 p-4 text-white">
      <nav className="">
        <Link to="/" className="">
          Techno City
        </Link>
        <button className="">&#8801;</button>
      </nav>
    </header>
  );
}

export default Header;
