export default function TextHead({ text }) {
  return (
    <div className="group relative z-10 mx-auto w-fit rounded-[72px] border-2 border-light px-6 py-3 text-center font-merienda font-normal uppercase  text-light transition-all delay-200 duration-1000 ease-in-out hover:border-secondary hover:font-bold hover:text-primary sm:text-3xl md:text-4xl">
      {text}
      {/* Before element */}
      <span className="absolute left-[-15px] top-1/2 h-2 w-2 -translate-y-1/2 rounded-[72px] bg-gradient-to-r from-grident1 to-grident2 transition-all duration-[800ms] ease-in-out group-hover:left-0 group-hover:z-[-1] group-hover:h-full group-hover:w-full sm:left-[-25px] sm:h-3 sm:w-3" />
      {/* After element */}
      <span className="absolute right-[-15px] top-1/2 h-2 w-2 -translate-y-1/2 rounded-[72px] bg-gradient-to-r from-grident1 to-grident2 transition-all duration-[800ms] ease-in-out group-hover:right-0 group-hover:z-[-1] group-hover:h-full group-hover:w-full sm:right-[-25px] sm:h-3 sm:w-3" />
    </div>
  );
}
