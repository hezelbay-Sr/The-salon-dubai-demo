const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM",
  "5:00 PM", "6:00 PM", "7:00 PM",
];

const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function getNext7Days() {
  const days = [];
  const today = new Date();
  for (let i = 1; i <= 7; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    days.push(d);
  }
  return days;
}

function formatDate(d: Date) {
  return `${DAY_NAMES[d.getDay()]} ${d.getDate()} ${MONTH_NAMES[d.getMonth()]}`;
}

export default function DateTimeStep({
  selectedDate,
  selectedTime,
  onDateSelect,
  onTimeSelect,
}: {
  selectedDate: string | null;
  selectedTime: string | null;
  onDateSelect: (date: string) => void;
  onTimeSelect: (time: string) => void;
}) {
  const days = getNext7Days();

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Choose Date & Time</h2>
      <p className="text-gray-500 mb-6">Select your preferred appointment slot</p>

      <h3 className="text-sm font-semibold text-gray-700 mb-3">Select a Date</h3>
      <div className="flex gap-2 overflow-x-auto pb-2 mb-6">
        {days.map((day) => {
          const label = formatDate(day);
          const isSelected = selectedDate === label;
          return (
            <button
              key={label}
              onClick={() => onDateSelect(label)}
              className={`cursor-pointer flex-shrink-0 px-4 py-3 rounded-xl border-2 text-center transition-colors ${
                isSelected
                  ? "border-pink-500 bg-pink-50"
                  : "border-gray-200 hover:border-pink-300"
              }`}
            >
              <p className={`text-xs ${isSelected ? "text-pink-500" : "text-gray-400"}`}>
                {DAY_NAMES[day.getDay()]}
              </p>
              <p className={`text-lg font-bold ${isSelected ? "text-pink-500" : "text-gray-900"}`}>
                {day.getDate()}
              </p>
              <p className={`text-xs ${isSelected ? "text-pink-500" : "text-gray-400"}`}>
                {MONTH_NAMES[day.getMonth()]}
              </p>
            </button>
          );
        })}
      </div>

      {selectedDate && (
        <>
          <h3 className="text-sm font-semibold text-gray-700 mb-3">Select a Time</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
            {timeSlots.map((time) => (
              <button
                key={time}
                onClick={() => onTimeSelect(time)}
                className={`cursor-pointer py-2.5 rounded-xl border-2 text-sm font-medium transition-colors ${
                  selectedTime === time
                    ? "border-pink-500 bg-pink-500 text-white"
                    : "border-gray-200 text-gray-700 hover:border-pink-300 hover:bg-pink-50"
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
