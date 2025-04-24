export default function TextHead({ text }) {
  return (
    <div className="group border-primary font-merienda text-primary hover:border-light hover:text-light relative z-10 mx-auto mb-10 w-fit rounded-[72px] border-2 px-6 py-3 text-center font-normal uppercase transition-all delay-200 duration-1000 ease-in-out hover:font-bold sm:text-3xl md:text-4xl">
      {text}
      {/* Before element */}
      <span className="from-primary to-secondary absolute top-1/2 left-[-15px] h-2 w-2 -translate-y-1/2 rounded-[72px] bg-linear-to-r transition-all duration-[800ms] ease-in-out group-hover:left-0 group-hover:z-[-1] group-hover:h-full group-hover:w-full sm:left-[-25px] sm:h-3 sm:w-3" />
      {/* After element */}
      <span className="from-primary to-secondary absolute top-1/2 right-[-15px] h-2 w-2 -translate-y-1/2 rounded-[72px] bg-linear-to-r transition-all duration-[800ms] ease-in-out group-hover:right-0 group-hover:z-[-1] group-hover:h-full group-hover:w-full sm:right-[-25px] sm:h-3 sm:w-3" />
    </div>
  );
}
