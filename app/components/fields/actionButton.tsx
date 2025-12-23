export default function ActionButton({ label, icon: Icon }: any) {
  return (
    <button className="flex items-center gap-2 bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-800 transition">
      <Icon size={18} />
      {label}
    </button>
  );
}
