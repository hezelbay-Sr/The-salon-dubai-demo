import { branches, type Branch } from "@/data/branches";

export default function BranchStep({
  selected,
  onSelect,
}: {
  selected: Branch | null;
  onSelect: (branch: Branch) => void;
}) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Choose a Branch</h2>
      <p className="text-gray-500 mb-6">Select the branch you&apos;d like to visit</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {branches.map((branch) => (
          <button
            key={branch.id}
            onClick={() => onSelect(branch)}
            className={`cursor-pointer text-center p-6 rounded-2xl border-2 transition-colors ${
              selected?.id === branch.id
                ? "border-pink-500 bg-pink-50"
                : "border-gray-200 hover:border-pink-300 hover:bg-pink-50"
            }`}
          >
            <p className="font-bold text-gray-900 text-lg">{branch.name}</p>
            <p className="text-sm text-gray-500 mt-2">{branch.address}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
