import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-pink-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-gray-900 tracking-wide">
          The Salon Dubai
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <Link href="/" className="hover:text-pink-500 transition-colors">Home</Link>
          <Link href="#services" className="hover:text-pink-500 transition-colors">Services</Link>
          <Link href="#branches" className="hover:text-pink-500 transition-colors">Branches</Link>
        </div>
        <Link
          href="/book"
          className="bg-pink-500 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-pink-600 transition-colors"
        >
          Book Now
        </Link>
      </div>
    </nav>
  );
}
