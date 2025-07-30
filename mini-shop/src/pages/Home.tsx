import { Link } from "react-router";

function Home() {
  return (
    <section className="flex grow items-center bg-gray-100">
      <div className="text-center">
        <h1 className="mb-4 text-3xl font-bold md:text-5xl">
          Welcome to Techno City
        </h1>
        <p className="mb-8 text-lg text-gray-600 md:text-xl">
          This is a simple landing page built with React, TypeScript, and
          Tailwind CSS.
        </p>
        <Link
          className="rounded-md bg-sky-500 px-6 py-3 text-white shadow hover:bg-sky-600"
          to="/shop"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}

export default Home;
