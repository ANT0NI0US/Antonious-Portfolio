export default function Waves() {
  return (
    <div className="absolute left-0 top-[-97px] h-[100px] w-full">
      <div className="wave animate-wave-slow bottom-0 z-[999] opacity-50"></div>
      <div className="wave animate-wave02-slow bottom-[10px] z-[1000] opacity-100"></div>
      <div className="wave animate-wave-fast bottom-[15px] z-[1000] opacity-20"></div>
      <div className="wave animate-wave02-fast bottom-[20px] z-[1000] opacity-70"></div>
    </div>
  );
}
