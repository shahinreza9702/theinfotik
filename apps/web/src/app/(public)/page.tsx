
const newsCategories = [
  "জাতীয়",
  "আন্তর্জাতিক",
  "রাজনীতি",
  "প্রযুক্তি",
  "অর্থনীতি",
  "খেলাধুলা",
  "বিনোদন",
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero section */}
      <section className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-red-600">
            Stay Informed
          </p>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Welcome to TheInfotik
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Your destination for the latest news, breaking stories,
            and important updates from around the world.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section
        aria-labelledby="categories-heading"
        className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8"
      >
        <h2
          id="categories-heading"
          className="mb-4 text-xl font-bold"
        >
          Browse Categories
        </h2>

        <nav
          aria-label="News categories"
          className="flex flex-wrap gap-3"
        >
          {newsCategories.map((category) => (
            <span
              key={category}
              className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium transition-colors hover:border-red-500 hover:text-red-600"
            >
              {category}
            </span>
          ))}
        </nav>
      </section>

      {/* Latest news */}
      <section
        aria-labelledby="latest-news-heading"
        className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8"
      >
        <div className="mb-6 flex items-center justify-between border-b pb-3">
          <h2
            id="latest-news-heading"
            className="text-2xl font-bold"
          >
            Latest News
          </h2>

          <span className="text-sm text-gray-500">
            Updated regularly
          </span>
        </div>

        <div className="rounded-xl border border-dashed border-gray-300 bg-white px-6 py-12 text-center">
          <h3 className="text-lg font-semibold">
            News articles will appear here
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600">
            Connect your Express API and MongoDB to display
            published articles dynamically.
          </p>
        </div>
      </section>
    </main>
  );
}
