"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PRODUCT_TABS } from "../config";
import { MapPin, User, Search } from "lucide-react";
import InputGroup from "../../fields/inputGroup";
import DatePicker from "../../fields/datePicker";
import ActionButton from "../../fields/actionButton";
import FormGrid from "../layout/formGrid";

export default function BookTab() {
  const [product, setProduct] = useState("Flight");
  const [date, setDate] = useState<Date | null>(new Date());

  // 🔥 ADD THESE
  const [from, setFrom] = useState("YHZ");
  const [to, setTo] = useState("");

  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any[]>([]);

  async function handleSearch() {
    if (!from || !to) return;

    setLoading(true);

    const res = await fetch(`/api/flights?from=${from}&to=${to}`);
    const data = await res.json();

    setResults(data?.data || []);
    setLoading(false);
  }

  return (
    <div className="space-y-6">
      {/* Product Pills */}
      <div className="flex flex-wrap gap-2">
        {PRODUCT_TABS.map(({ id, label, icon: Icon }) => {
          const active = product === id;
          return (
            <button
              key={id}
              onClick={() => setProduct(id)}
              className={`relative px-4 py-2 rounded-full text-sm font-medium
                ${active ? "text-white" : "text-black hover:bg-gray-50"}`}
            >
              {active && (
                <motion.div
                  layoutId="productPill"
                  className="absolute inset-0 bg-sky-700 rounded-full"
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <Icon size={16} />
                {label}
              </span>
            </button>
          );
        })}
      </div>

      {/* 2x2 Grid */}
      <FormGrid>
        {/* ⬇️ CHANGE #1 — controlled input */}
        <InputGroup
          icon={MapPin}
          label="From"
          value={from}
          onChange={(e: any) => setFrom(e.target.value.toUpperCase())}
          placeholder="YHZ"
        />

        {/* ⬇️ CHANGE #2 — controlled input */}
        <InputGroup
          icon={MapPin}
          label="To"
          value={to}
          onChange={(e: any) => setTo(e.target.value.toUpperCase())}
          placeholder="JFK"
        />

        <DatePicker label="Depart" date={date} setDate={setDate} />

        <InputGroup icon={User} label="Travelers" value="1 Adult" />
      </FormGrid>

      <div className="flex justify-end">
        <ActionButton
          label={loading ? "Searching…" : "Find flights"}
          icon={Search}
          onClick={handleSearch}
        />
      </div>

      {/* Show results */}
      {results.length > 0 && (
        <div className="space-y-3">
          {results.map((f: any) => (
            <div
              key={f.flight?.iata + f.flight_date}
              className="border rounded-lg p-4 bg-white shadow-sm"
            >
              <p className="font-semibold">
                {f.departure?.airport} → {f.arrival?.airport}
              </p>
              <p>
                {f.airline?.name} — {f.flight?.iata}
              </p>
              <p className="text-sm text-gray-600">Status: {f.flight_status}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
