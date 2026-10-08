import React from 'react';
import Link from 'next/link';

interface CategoryItem {
  slug: string;
  title: string;
  description: string;
}

const categories: CategoryItem[] = [
  { slug: 'bangladesh', title: 'Bangladesh', description: 'Local Updates' },
  { slug: 'world', title: 'World', description: 'Global News' },
  { slug: 'business', title: 'Business', description: 'Market Updates' },
  { slug: 'technology', title: 'Technology', description: 'Tech News' },
  { slug: 'lifestyle', title: 'Lifestyle', description: 'Life & Style' },
  { slug: 'opinion', title: 'Opinion', description: 'Editorials' },
];

const CategorySection = () => {
    return (
        <section className="categories">
            <div className="section__header">
                <h2 className="section__title">Explore Categories</h2>
            </div>
            <div className="u-grid u-cols-6 u-gap-md">
                {categories.map((cat) => (
                    <article key={cat.slug} className="card">
                        <Link href={`/${cat.slug}/`} className="card__link">
                            <span className="card__icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24" fill="none">
                                    <use href="#icon-pin" />
                                </svg>
                            </span>

                            <div className="card__body">
                                <h3 className="card__title">{cat.title}</h3>
                                <p className="card__text">{cat.description}</p>
                            </div>

                            <span className="card__arrow" aria-hidden="true">
                                &rarr;
                            </span>
                        </Link>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default CategorySection;