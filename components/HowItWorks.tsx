const steps = [
  {
    number: "01",
    title: "Choose Your Branch",
    desc: "Select from our 10+ locations across Dubai — JBR, Palm Jumeirah, Marina, JVC, Al Furjan, Al Wasl, and more.",
  },
  {
    number: "02",
    title: "Pick Service & Stylist",
    desc: "Browse 80+ services and choose your preferred stylist.",
  },
  {
    number: "03",
    title: "Confirm & You're Done",
    desc: "Pick your date and time. Get instant confirmation — no follow-up needed.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-4 bg-pink-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">How It Works</h2>
          <p className="text-gray-500">Book your appointment in under 2 minutes</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div key={s.number} className="text-center">
              <div className="w-16 h-16 bg-pink-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {s.number}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
