const categories = ["All", "React", "Html & CSS & JS", "Games"];

export default function Categories({
  handleSelectNewCategory,
  selectedCategory,
}) {
  return (
    <div className="mx-auto w-fit rounded-md bg-secondary p-2">
      <div className="flexCenter flex-wrap gap-4">
        {categories.map((category) => (
          <button
            key={category}
            className={`rounded-md px-4 py-2 ${
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
