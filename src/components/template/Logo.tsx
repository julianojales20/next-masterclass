export default function Logo() {
  return (
    <div className="flex gap-2">
      <div className="flex gap-1">
        <div className="h-5 w-5 rounded-full bg-red-500"></div>
        <div className="h-5 w-5 rounded-full bg-green-500"></div>
        <div className="h-5 w-5 rounded-full bg-blue-500"></div>
      </div>
      <span className="font-black">AppJS</span>
    </div>
  );
}
