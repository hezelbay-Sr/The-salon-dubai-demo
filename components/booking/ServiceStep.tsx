import { services, type Service } from "@/data/services";

const categories = Array.from(new Set(services.map((s) => s.category)));

export default function ServiceStep({
  selected,
  onSelect,
}: {
  selected: Service | null;
  onSelect: (service: Service) => void;
}) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Choose a Service</h2>
      <p className="text-gray-500 mb-6">Select the service you&apos;d like to book</p>
      {categories.map((cat) => (
        <div key={cat} className="mb-6">
          <h3 className="text-xs font-semibold text-pink-500 uppercase tracking-widest mb-3">{cat}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {services
              .filter((s) => s.category === cat)
              .map((service) => (
                <button
                  key={service.id}
                  onClick={() => onSelect(service)}
                  className={`cursor-pointer text-left p-4 rounded-xl border-2 transition-colors ${
                    selected?.id === service.id
                      ? "border-pink-500 bg-pink-50"
                      : "border-gray-200 hover:border-pink-300 hover:bg-pink-50"
                  }`}
                >
                  <div className="flex justify-between items-start gap-2">
                    <p className="font-medium text-gray-900 text-sm">{service.name}</p>
                    <p className="text-pink-500 font-bold text-sm whitespace-nowrap">AED {service.price}</p>
                  </div>
                  <p className="text-sm text-gray-600 font-medium mt-1">{service.duration}</p>
                </button>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
