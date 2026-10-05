import React from 'react';

const CategorySection = () => {
    return (
        <section className="categories">
            <div className="section__header">
                <h2 className="section__title">Explore Categories</h2>
            </div>
            <div className="u-grid u-cols-6 u-gap-md">
                {/* <!-- Bangladesh --> */}
                <article className="card">
                    <a href="/bangladesh/" className="card__link">
                        <span className="card__icon" aria-hidden="true">
                            <svg viewBox="0 0 24 24" fill="none">
                                <use href="#icon-pin"></use>
                            </svg>
                        </span>

                        <div className="card__body">
                            <h3 className="card__title">Bangladesh</h3>
                            <p className="card__text">Local Updates</p>
                        </div>

                        <span className="card__arrow" aria-hidden="true">
                            →
                        </span>
                    </a>
                </article>

                <article className="card">
                    <a href="/bangladesh/" className="card__link">
                        <span className="card__icon" aria-hidden="true">
                            <svg viewBox="0 0 24 24" fill="none">
                                <use href="#icon-pin"></use>
                            </svg>
                        </span>

                        <div className="card__body">
                            <h3 className="card__title">World</h3>
                            <p className="card__text">Local Updates</p>
                        </div>

                        <span className="card__arrow" aria-hidden="true">
                            →
                        </span>
                    </a>
                </article>

                <article className="card">
                    <a href="/bangladesh/" className="card__link">
                        <span className="card__icon" aria-hidden="true">
                            <svg viewBox="0 0 24 24" fill="none">
                                <use href="#icon-pin"></use>
                            </svg>
                        </span>

                        <div className="card__body">
                            <h3 className="card__title">Business</h3>
                            <p className="card__text">Local Updates</p>
                        </div>

                        <span className="card__arrow" aria-hidden="true">
                            →
                        </span>
                    </a>
                </article>

                <article className="card">
                    <a href="/bangladesh/" className="card__link">
                        <span className="card__icon" aria-hidden="true">
                            <svg viewBox="0 0 24 24" fill="none">
                                <use href="#icon-pin"></use>
                            </svg>
                        </span>

                        <div className="card__body">
                            <h3 className="card__title">Technology</h3>
                            <p className="card__text">Local Updates</p>
                        </div>

                        <span className="card__arrow" aria-hidden="true">
                            →
                        </span>
                    </a>
                </article>

                <article className="card">
                    <a href="/bangladesh/" className="card__link">
                        <span className="card__icon" aria-hidden="true">
                            <svg viewBox="0 0 24 24" fill="none">
                                <use href="#icon-pin"></use>
                            </svg>
                        </span>

                        <div className="card__body">
                            <h3 className="card__title">Lifestyle</h3>
                            <p className="card__text">Local Updates</p>
                        </div>

                        <span className="card__arrow" aria-hidden="true">
                            →
                        </span>
                    </a>
                </article>

                <article className="card">
                    <a href="/bangladesh/" className="card__link">
                        <span className="card__icon" aria-hidden="true">
                            <svg viewBox="0 0 24 24" fill="none">
                                <use href="#icon-pin"></use>
                            </svg>
                        </span>

                        <div className="card__body">
                            <h3 className="card__title">Opinion</h3>
                            <p className="card__text">Local Updates</p>
                        </div>

                        <span className="card__arrow" aria-hidden="true">
                            →
                        </span>
                    </a>
                </article>
            </div>
        </section>
    );
};

export default CategorySection;