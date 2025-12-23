"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react";

export default function DatePicker({
  label,
  date,
  setDate,
}: {
  label: string;
  date: Date | null;
  setDate: (d: Date) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  // Close on click outside
  useEffect(() => {
    const close = () => setIsOpen(false);
    if (isOpen) window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  }, [isOpen]);

  // Format date for display
  const displayDate = date
    ? date.toLocaleDateString("en-US", { month: "short", day: "numeric" })
    : "Select Date";

  return (
    <div className="relative" onClick={(e) => e.stopPropagation()}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group relative flex items-center w-full bg-gray-50 border border-transparent hover:bg-white hover:border-gray-200 focus:bg-white focus:border-blue-500 rounded-xl transition-all duration-200 text-left
        ${isOpen ? "ring-4 ring-blue-500/10 border-blue-500 bg-white" : ""}`}
      >
        <div
          className={`pl-4 transition-colors ${
            isOpen ? "text-blue-600" : "text-gray-400 group-hover:text-blue-600"
          }`}
        >
          <CalendarIcon size={20} />
        </div>
        <div className="flex flex-col px-3 py-2.5 w-full">
          <label className="text-[10px] uppercase font-bold text-gray-500 tracking-wider cursor-pointer">
            {label}
          </label>
          <span className="text-gray-900 font-medium text-base truncate">
            {displayDate}
          </span>
        </div>
      </button>

      {/* Popover Calendar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 z-50 p-4"
          >
            {/* Calendar Header */}
            <div className="flex items-center justify-between mb-4">
              <button className="p-1 hover:bg-gray-100 rounded-full">
                <ChevronLeft size={18} />
              </button>
              <span className="font-semibold text-gray-900">
                {new Date().toLocaleDateString("en-US", {
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <button className="p-1 hover:bg-gray-100 rounded-full">
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Days Grid */}
            <div className="grid grid-cols-7 text-center text-xs text-gray-400 mb-2">
              {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
                <div key={d}>{d}</div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1 text-sm font-medium text-gray-700">
              {/* Empty slots for start of month (mock offset) */}
              {[1, 2, 3].map((i) => (
                <div key={`empty-${i}`} />
              ))}

              {/* Real Days (Mock logic for demo) */}
              {Array.from({ length: 30 }).map((_, i) => {
                const day = i + 1;
                const isSelected = date?.getDate() === day;
                const isToday = day === new Date().getDate();

                return (
                  <button
                    key={day}
                    onClick={() => {
                      const newDate = new Date();
                      newDate.setDate(day);
                      setDate(newDate);
                      setIsOpen(false);
                    }}
                    className={`h-8 w-8 rounded-full flex items-center justify-center transition-colors
                      ${
                        isSelected
                          ? "bg-blue-700 text-white shadow-lg shadow-blue-700/30"
                          : "hover:bg-blue-50"
                      }
                      ${
                        isToday && !isSelected ? "text-blue-700 font-bold" : ""
                      }`}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
