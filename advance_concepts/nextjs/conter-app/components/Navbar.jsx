import Link from "next/link";

export default function Navbar() {
  console.log("this is navbar");
  return (
    <nav className="bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <div className="text-2xl font-bold text-blue-600">Counter App</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href={"/"} className="text-grar-300 hover:text-blue-600">
              Home
            </Link>
            <Link href="/about" className="text-grar-300 hover:text-blue-600">
              About
            </Link>
            <Link
              href="/services"
              className="text-grar-300 hover:text-blue-600"
            >
              Services
            </Link>
            <Link
              href="/contact-us"
              className="text-grar-300 hover:text-blue-600"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-700 focus:outline-none">☰</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
