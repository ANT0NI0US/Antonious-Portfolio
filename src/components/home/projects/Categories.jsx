const categories = ["All", "React", "Html & CSS & JS", "Games"];

export default function Categories({
  handleSelectNewCategory,
  selectedCategory,
}) {
  return (
    <div
      className="bg-secondary relative mx-auto my-5 w-fit rounded-md p-2"
      role="group"
      aria-label="Filter projects by category"
    >
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {categories.map((category) => (
          <button
            key={category}
            aria-label={`Show ${category} projects`}
            aria-pressed={category === selectedCategory}
            className={`cursor-pointer rounded-md px-4 py-2 xl:text-lg ${
              category === selectedCategory ? "bg-main" : "hover:bg-main/50"
            }`}
            onClick={() => handleSelectNewCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
