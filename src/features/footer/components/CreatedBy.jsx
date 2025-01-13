const year = new Date().getFullYear();
export default function CreatedBy() {
  return (
    <div className="border-t-[0.5px] border-secondary pt-[15px] text-center">
      <div className="container">
        <p className="xl:text-lg">
          © {year} Antonious Nasr, All rights reserved.
        </p>
      </div>
    </div>
  );
}
