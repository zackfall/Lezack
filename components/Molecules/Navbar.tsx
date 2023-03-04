import { useState } from "react";

export default function Navbar() {
    const hamburgerClass =
    `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    console.log(isOpen);
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

    return (
    <nav className="flex justify-between mx-20 my-5">
      <h3 className="text-gray-800 text-xl font-medium">Lezack</h3>
      <ul className="lg:flex space-x-14 justify-end hidden">
        <li>
          <a
            className="text-green-700 hover:text-orange-800 duration-200 text-lg"
            href="/"
          >
            Home
          </a>
        </li>
        <li>
          <a
            className="text-green-700 hover:text-orange-800 duration-200 text-lg"
            href="/blog"
          >
            Blog
          </a>
        </li>
      </ul>
      <button
        className="lg:hidden flex flex-col h-12 w-12 border-2 border-black rounded justify-center items-center group"
        onClick={handleClick}
      >
        <div
          className={`${hamburgerClass} ${
            isOpen
              ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
              : "opacity-50 group-hover:opacity-100"
          }`}
        />
        <div
          className={`${hamburgerClass} ${
            isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
          }`}
        />
        <div
          className={`${hamburgerClass} ${
            isOpen
              ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
              : "opacity-50 group-hover:opacity-100"
          }`}
        />
      </button>
    </nav>
  );
}
