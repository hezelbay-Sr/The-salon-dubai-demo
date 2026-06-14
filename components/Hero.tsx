import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-pink-50 to-white py-24 px-4 text-center">
      <p className="text-pink-500 text-sm font-medium tracking-widest uppercase mb-4">
        Dubai&apos;s Premier Salon
      </p>
      <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 leading-tight">
        The Salon Dubai
      </h1>
      <p className="text-xl text-gray-500 mb-4">
        Beauty. Precision. <span className="text-pink-500">Excellence.</span>
      </p>
      <p className="text-gray-400 text-base mb-10 max-w-xl mx-auto">
        Book your appointment online — no waiting. Choose your branch, service, and stylist in seconds.
      </p>
      <Link
        href="/book"
        className="bg-pink-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-pink-600 transition-colors inline-block"
      >
        Book Your Appointment →
      </Link>

      <div className="mt-16 flex justify-center gap-10 md:gap-16">
        {[
          { value: "4.7★", label: "Google Rating" },
          { value: "837+", label: "Reviews" },
          { value: "10+", label: "Locations" },
          { value: "80+", label: "Services" },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
            <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
