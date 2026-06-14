import Link from "next/link";

const featured = [
  { name: "Hair Cut & Style", duration: "45 min", price: "AED 150", emoji: "✂️" },
  { name: "Balayage", duration: "3 hrs", price: "AED 650", emoji: "🎨" },
  { name: "Classic Facial", duration: "60 min", price: "AED 250", emoji: "✨" },
  { name: "Manicure", duration: "45 min", price: "AED 120", emoji: "💅" },
];

export default function ServicesPreview() {
  return (
    <section id="services" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Services</h2>
          <p className="text-gray-500">Over 80 services across hair, skin, nails, and more</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {featured.map((s) => (
            <div key={s.name} className="bg-pink-50 rounded-2xl p-6 text-center hover:bg-pink-100 transition-colors">
              <div className="text-4xl mb-3">{s.emoji}</div>
              <h3 className="font-semibold text-gray-900 mb-1">{s.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{s.duration}</p>
              <p className="text-pink-500 font-bold">{s.price}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/book"
            className="border border-pink-500 text-pink-500 px-8 py-3 rounded-full font-medium hover:bg-pink-500 hover:text-white transition-colors inline-block"
          >
            View All Services & Book
          </Link>
        </div>
      </div>
    </section>
  );
}
