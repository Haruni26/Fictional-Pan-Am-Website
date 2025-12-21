import Logo from "../../public/images/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed w-full max-w-7xl z-50 bg-black/40">
      <div className="relative flex items-center px-20 py-3">
        <Link href="/" aria-label="Go to home page">
          <Image src={Logo} alt="Pan Am Logo" width={55} priority />
        </Link>
        <ul className="mx-auto flex gap-9">
          <li>
            <Link
              href="#book"
              className="relative font-medium text-white
                after:absolute after:left-1/2 after:-bottom-1
                after:h-0.5 after:w-full after:bg-white
                after:-translate-x-1/2
                after:scale-x-0 after:origin-center
                after:transition-transform after:duration-300
                hover:after:scale-x-100"
            >
              Book
            </Link>
          </li>

          <li>
            <Link
              href="#checkIn"
              className="relative font-medium text-white
                after:absolute after:left-1/2 after:-bottom-1
                after:h-0.5 after:w-full after:bg-white
                after:-translate-x-1/2
                after:scale-x-0 after:origin-center
                after:transition-transform after:duration-300
                hover:after:scale-x-100"
            >
              Check In
            </Link>
          </li>

          <li>
            <Link
              href="#flights"
              className="relative font-medium text-white
                after:absolute after:left-1/2 after:-bottom-1
                after:h-0.5 after:w-full after:bg-white
                after:-translate-x-1/2
                after:scale-x-0 after:origin-center
                after:transition-transform after:duration-300
                hover:after:scale-x-100"
            >
              My Flights
            </Link>
          </li>

          <li>
            <Link
              href="#worldpass"
              className="relative font-medium text-white
                after:absolute after:left-1/2 after:-bottom-1
                after:h-0.5 after:w-full after:bg-white
                after:-translate-x-1/2
                after:scale-x-0 after:origin-center
                after:transition-transform after:duration-300
                hover:after:scale-x-100"
            >
              Join WorldPass
            </Link>
          </li>

          <li>
            <Link
              href="#worldpass"
              className="relative font-medium text-white bg-sky-600 p-3 rounded-md
                after:absolute after:left-1/2 after:-bottom-1
                after:h-0.5 after:w-full hover:bg-sky-800
                after:-translate-x-1/2
                after:scale-x-0"
            >
              Sign In
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
