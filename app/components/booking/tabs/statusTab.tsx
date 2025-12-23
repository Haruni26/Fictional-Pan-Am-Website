"use client";

import { useState } from "react";
import { Hash, MapPin, PlaneTakeoff } from "lucide-react";
import InputGroup from "../../fields/inputGroup";
import DatePicker from "../../fields/datePicker";
import ActionButton from "../../fields/actionButton";
import FormGrid from "../layout/formGrid";

export default function StatusTab() {
  const [date, setDate] = useState<Date | null>(new Date());

  return (
    <div className="space-y-6 max-w-2xl">
      <h2 className="text-xl font-bold">Track a flight</h2>

      <FormGrid>
        <InputGroup icon={Hash} label="Flight Number" placeholder="DL 1234" />
        <DatePicker label="Date" date={date} setDate={setDate} />
        <InputGroup icon={MapPin} label="From" />
        <InputGroup icon={MapPin} label="To" />
      </FormGrid>

      <ActionButton label="Track flight" icon={PlaneTakeoff} />
    </div>
  );
}
