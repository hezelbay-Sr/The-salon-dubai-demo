export default function Footer() {
  return (
    <footer id="branches" className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-pink-400 font-bold text-lg mb-3">The Salon Dubai</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Dubai&apos;s premier destination for hair, skin, and nail services. Elegance in every detail.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Our Branches</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>JBR — Jumeirah Beach Residence</li>
              <li>Palm Jumeirah</li>
              <li>Marina — Marina Walk</li>
              <li>JVC — Jumeirah Village Circle</li>
              <li>Al Furjan</li>
              <li>Al Wasl Road</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>📞 +971 4 XXX XXXX</li>
              <li>📧 hello@thesalondubai.com</li>
              <li>📸 @thesalondubai</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-xs">
          © 2025 The Salon Dubai. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
