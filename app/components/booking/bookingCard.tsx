"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PRIMARY_TABS } from "./config";
import BookTab from "./tabs/bookTab";
import StatusTab from "./tabs/statusTab";
import CheckInTab from "./tabs/checkInTab";

const TAB_MAP: any = {
  Book: BookTab,
  Status: StatusTab,
  CheckIn: CheckInTab,
};

export default function BookingCard() {
  const [activeTab, setActiveTab] = useState("Book");
  const ActiveTab = TAB_MAP[activeTab];

  return (
    <div className="w-full max-w-3xl mx-auto p-4 pt-24">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        {/* Primary Tabs */}
        <div className="flex border-b border-gray-100">
          {PRIMARY_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-6 py-4 text-sm font-semibold
                ${
                  activeTab === tab.id
                    ? "text-sky-700"
                    : "text-gray-500 hover:text-gray-800"
                }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="primaryTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-700"
                />
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <ActiveTab />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
