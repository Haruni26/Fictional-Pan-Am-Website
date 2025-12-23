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
        <InputGroup icon={MapPin} label="From" value="Halifax (YHZ)" />
        <InputGroup icon={MapPin} label="To" placeholder="Destination" />
        <DatePicker label="Depart" date={date} setDate={setDate} />
        <InputGroup icon={User} label="Travelers" value="1 Adult" />
      </FormGrid>

      <div className="flex justify-end">
        <ActionButton label="Find flights" icon={Search} />
      </div>
    </div>
  );
}
