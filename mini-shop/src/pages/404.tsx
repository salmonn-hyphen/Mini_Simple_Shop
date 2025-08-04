import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="flex grow items-center bg-gray-100">
      <div className="container mx-auto text-center md:text-left">
        <h1 className="text-6xl font-bold md:text-7xl">404</h1>
        <p className="mb-6 text-lg text-gray-600">
          Oppos! The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="rounded-md bg-sky-500 px-4 py-2 text-white hover:bg-sky-600"
        >
          Go Back Home
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
