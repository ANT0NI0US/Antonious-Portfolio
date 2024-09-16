export default function GridContainer({
  children,
  styles = "sm:grid sm:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]",
}) {
  return <div className={`flex flex-col gap-[15px] ${styles}`}>{children}</div>;
}
