import { Ticket, User, ArrowRight } from "lucide-react";
import InputGroup from "../../fields/inputGroup";
import ActionButton from "../../fields/actionButton";

export default function CheckInTab() {
  return (
    <div className="space-y-5 max-w-xl">
      <h2 className="text-xl text-black font-bold">Check in online</h2>

      <InputGroup icon={Ticket} label="Confirmation Code" />
      <InputGroup icon={User} label="Last Name" />

      <ActionButton label="Check in" icon={ArrowRight} />
    </div>
  );
}
