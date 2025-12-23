import { Plane, Briefcase, Building2, CarFront, Ship } from "lucide-react";

export const PRIMARY_TABS = [
  { id: "Book", label: "Book" },
  { id: "Status", label: "Flight status" },
  { id: "CheckIn", label: "Check-in" },
];

export const PRODUCT_TABS = [
  { id: "Flight", label: "Flight", icon: Plane },
  { id: "Packages", label: "Packages", icon: Briefcase },
  { id: "Hotel", label: "Hotel", icon: Building2 },
  { id: "Car", label: "Car", icon: CarFront },
  { id: "Cruise", label: "Cruise", icon: Ship },
];
