import { stylists, type Stylist } from "@/data/stylists";

export default function StylistStep({
  selected,
  onSelect,
}: {
  selected: Stylist | null;
  onSelect: (stylist: Stylist) => void;
}) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Choose a Stylist</h2>
      <p className="text-gray-500 mb-6">Select your preferred stylist</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {stylists.map((stylist) => (
          <button
            key={stylist.id}
            onClick={() => onSelect(stylist)}
            className={`cursor-pointer text-left p-5 rounded-2xl border-2 transition-colors flex items-center gap-4 ${
              selected?.id === stylist.id
                ? "border-pink-500 bg-pink-50"
                : "border-gray-200 hover:border-pink-300 hover:bg-pink-50"
            }`}
          >
            <img
              src={stylist.avatar}
              alt={stylist.name}
              className="w-14 h-14 rounded-full object-cover flex-shrink-0 border-2 border-pink-100"
            />
            <div>
              <p className="font-semibold text-gray-900">{stylist.name}</p>
              <p className="text-sm text-gray-500 mt-0.5">{stylist.specialty}</p>
              <p className="text-xs text-pink-400 mt-1">{stylist.experience} experience</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
