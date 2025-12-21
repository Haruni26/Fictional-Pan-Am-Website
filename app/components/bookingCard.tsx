export default function BookingCard() {
  return (
    <div className="max-w-md rounded-2xl bg-white/95 p-6 shadow-2xl backdrop-blur">
      <h2 className="text-2xl font-semibold text-black mb-4">
        Book Your Flight
      </h2>

      {/* Top Tabs */}
      <div className="flex gap-4 mb-4 text-sm font-medium">
        <button className="border-b-2 border-sky-700 pb-1">Flights</button>
        <button className="text-gray-500 hover:text-black transition">
          Hotels
        </button>
        <button className="text-gray-500 hover:text-black transition">
          Cars
        </button>
      </div>

      {/* Trip Type */}
      <div className="flex gap-3 mb-4">
        <button className="rounded-full bg-sky-700 px-4 py-1 text-sm text-white">
          Round Trip
        </button>
        <button className="rounded-full border px-4 py-1 text-sm text-gray-600 hover:border-black transition">
          One Way
        </button>
      </div>

      {/* Inputs */}
      <div className="space-y-3 mb-6">
        <div className="rounded-lg border px-4 py-3 text-sm text-gray-500">
          From
        </div>
        <div className="rounded-lg border px-4 py-3 text-sm text-gray-500">
          To
        </div>
        <div className="rounded-lg border px-4 py-3 text-sm text-gray-500">
          Departure Date
        </div>
      </div>

      <button className="w-full rounded-full bg-sky-700 py-3 text-white font-medium hover:bg-black transition">
        Search Flights
      </button>
    </div>
  );
}
