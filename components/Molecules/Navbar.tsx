import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const activeHome =
    router.pathname === "/" ? "text-orange-800" : "text-green-700";
  const activeBlog =
    router.pathname === "/blog" ? "text-orange-800" : "text-green-700";
  return (
    <nav className="flex justify-between lg:justify-start flex-col lg:items-center lg:flex-row lg:mx-20 ml-8 my-5">
      <h3 className="text-gray-800 text-xl font-medium">Lezack</h3>
      <ul className="flex lg:ml-16 lg:space-x-14 space-x-3 text-xs">
        <li>
          <Link className={`${activeHome} duration-200 text-lg`} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={`${activeBlog} duration-200 text-lg`} href="/blog">
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
}
