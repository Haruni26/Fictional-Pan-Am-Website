export default function InputGroup({
  icon: Icon,
  label,
  value,
  placeholder,
  onChange,
}: any) {
  return (
    <div className="flex items-center bg-gray-50 rounded-xl px-4 py-3">
      <Icon size={20} className="text-gray-400 mr-3" />
      <div className="flex flex-col w-full">
        <label className="text-[10px] uppercase text-gray-500">{label}</label>
        <input
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="bg-transparent outline-none font-medium"
        />
      </div>
    </div>
  );
}
