const year = new Date().getFullYear();
export default function CreatedBy() {
  return (
    <div className="border-t-main/90 border-t py-4 text-center">
      <div className="container">
        <p className="text-xs xl:text-sm">
          © {year} Antonious Nasr, All rights reserved.
        </p>
      </div>
    </div>
  );
}
