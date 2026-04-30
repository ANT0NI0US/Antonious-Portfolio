export default function Waves() {
  return (
    <div className="absolute top-[-97px] left-0 h-[100px] w-full">
      <div className="wave animate-wave-slow bottom-0 z-[999] opacity-50" />
      <div className="wave animate-wave02-slow bottom-[10px] z-[1000] opacity-100" />
      <div className="wave animate-wave-fast bottom-[15px] z-[1000] opacity-20" />
      <div className="wave animate-wave02-fast bottom-[20px] z-[1000] opacity-70" />
    </div>
  );
}
