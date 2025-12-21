import Image from "next/image";
import BookingCard from "./components/bookingCard";

export default function Home() {
  return (
    <section className="relative min-h-screen">
      <Image
        src="/images/panamBg.jpg"
        alt="Pan Am airport lounge"
        fill
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <BookingCard />
      </div>
    </section>
  );
}
