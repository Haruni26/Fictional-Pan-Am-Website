"use client";

import { useState } from "react";

const tabs = ["Book", "Check In", "Flight Status"];

export default function BookingCard() {
  const [active, setActive] = useState("Book");

  return (
    <div className="max-w-lg rounded-2xl bg-white/95 p-6 shadow-2xl backdrop-blur">
      {/* Tabs */}
      <div className="mb-6 flex border-b">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`relative px-4 py-2 text-sm font-medium
              ${
                active === tab
                  ? "text-black after:absolute after:left-0 after:-bottom-px after:h-0.5 after:w-full after:bg-black"
                  : "text-gray-400"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      {active === "Book" && (
        <div>
          <p className="mb-4 text-sm text-gray-600">
            Book your next Pan Am journey.
          </p>
          <button className="w-full rounded-full bg-black py-3 text-white font-medium hover:bg-sky-700 transition">
            Search Flights
          </button>
        </div>
      )}

      {active === "Check In" && (
        <div>
          <p className="mb-4 text-sm text-gray-600">
            Check in for your flight.
          </p>
          <button className="w-full rounded-full bg-black py-3 text-white font-medium">
            Check In
          </button>
        </div>
      )}

      {active === "Flight Status" && (
        <div>
          <p className="mb-4 text-sm text-gray-600">
            Track your flight status.
          </p>
          <button className="w-full rounded-full bg-black py-3 text-white font-medium">
            View Status
          </button>
        </div>
      )}
    </div>
  );
}
