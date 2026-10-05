import React from 'react';
import Image from 'next/image';

const PostDetailsPage = () => {
    return (
        <section className="post-page">
            <div className="container">

                <article className="post">

                    {/* <!-- =========================================
                    ARTICLE HEADER
            ========================================== --> */}

                    <header className="post__header">

                        <span className="post__category">
                            Bangladesh
                        </span>

                        <h1 className="post__title">
                            A new hope for a better Bangladesh
                        </h1>

                        <p className="post__excerpt">
                            From youth movements to economic progress,
                            what's shaping the country's future?
                        </p>

                        <div className="post__meta-row">

                            {/* <!-- Author --> */}
                            <div className="post__author">

                                <Image
                                    src="/assets/images/authors/shahin.jpg"
                                    alt="Shahin Reza"
                                    width={50}
                                    height={50}
                                    className="post__avatar"
                                />


                                <div>
                                    <strong>Shahin Reza</strong>

                                    <div className="post__author-meta">
                                        3 hours ago · 6 min read
                                    </div>
                                </div>

                            </div>


                            {/* <!-- Article stats --> */}
                            <div className="article-meta">

                                <span className="article-meta__item">
                                    👁 12.4K
                                </span>

                                <span className="article-meta__item">
                                    💬 243
                                </span>

                            </div>

                        </div>

                    </header>


                    {/* <!-- =========================================
                    ARTICLE BODY
            ========================================== --> */}

                    <div className="post__content">

                        <p>
                            Bangladesh stands at a pivotal moment in its journey
                            toward a more prosperous, inclusive, and sustainable
                            future. With a young population, growing digital
                            economy, and renewed focus on infrastructure, the
                            country is seeing new opportunities across multiple
                            sectors.
                        </p>

                        <p>
                            From education and healthcare to technology and green
                            energy, various initiatives are creating positive
                            momentum. However, experts say that long-term success
                            will depend on consistent policy implementation,
                            responsible governance, and active participation from
                            all sections of society.
                        </p>


                        {/* <!-- =========================================
                        FEATURE IMAGE / VIDEO
                ========================================== --> */}

                        <figure className="post__media">

                            <Image
                                src="/assets/images/articles/bangladesh-development.jpg"
                                alt="Bangladesh city development"
                                width={50}
                                height={50}
                            />



                            <button
                                type="button"
                                className="post__play"
                                aria-label="Play video"
                            >
                                <span></span>
                            </button>

                            <figcaption>
                                <span>
                                    Watch: How Bangladesh is preparing for a better tomorrow
                                </span>

                                <span>
                                    04:32
                                </span>
                            </figcaption>

                        </figure>


                        <p>
                            The government's recent development projects, including
                            better transport networks and smart city plans, aim to
                            make life easier for citizens while attracting foreign
                            investment. At the same time, grassroots movements and
                            youth-led initiatives are bringing fresh ideas and
                            energy to the nation's growth story.
                        </p>


                        {/* <!-- =========================================
                        QUOTE
                ========================================== --> */}

                        <blockquote className="post__quote">

                            <p>
                                “The future of Bangladesh depends on our ability
                                to work together — government, private sector and
                                citizens — for a more inclusive and sustainable
                                tomorrow.”
                            </p>

                            <cite>
                                — Dr. Arshad Hasan, Economist
                            </cite>

                        </blockquote>


                        {/* <!-- =========================================
                        RELATED ARTICLES
                ========================================== --> */}

                        <div className="section__header post__section-header">

                            <h2 className="section__title section__title--sm">
                                Related Articles
                            </h2>

                        </div>


                        <div className="post__related">

                            {/* <!-- Related 01 --> */}
                            <article className="card card--news">

                                <a href="#" className="card__link">

                                    <Image
                                        src="/assets/images/articles/rmg.jpg"
                                        alt="Bangladesh RMG exports"
                                        className="card__media"
                                        width={50}
                                        height={50}
                                    />


                                    <div className="card__body">

                                        <span className="meta">
                                            Bangladesh
                                        </span>

                                        <h3 className="card__title">
                                            Bangladesh's RMG exports hit new record
                                        </h3>

                                        <div className="article-meta">

                                            <span className="article-meta__item">
                                                6 hours ago
                                            </span>

                                            <span className="article-meta__item">
                                                4 min read
                                            </span>

                                        </div>

                                    </div>

                                </a>

                            </article>


                            {/* <!-- Related 02 --> */}
                            <article className="card card--news">

                                <a href="#" className="card__link">

                                    <Image
                                        src="/assets/images/articles/youth.jpg"
                                        alt="Youth climate movement"
                                        className="card__media"
                                        width={50}
                                        height={50}
                                    />

                                    <div className="card__body">

                                        <span className="meta">
                                            World
                                        </span>

                                        <h3 className="card__title">
                                            Youth around the world lead climate change protests
                                        </h3>

                                        <div className="article-meta">

                                            <span className="article-meta__item">
                                                7 hours ago
                                            </span>

                                            <span className="article-meta__item">
                                                5 min read
                                            </span>

                                        </div>

                                    </div>

                                </a>

                            </article>


                            {/* <!-- Related 03 --> */}
                            <article className="card card--news">

                                <a href="#" className="card__link">

                                    <Image
                                        src="/assets/images/articles/mental-health.jpg"
                                        alt="Mental health"
                                        className="card__media"
                                        width={50}
                                        height={50}
                                    />

                                    <div className="card__body">

                                        <span className="meta">
                                            Lifestyle
                                        </span>

                                        <h3 className="card__title">
                                            The importance of mental health awareness
                                        </h3>

                                        <div className="article-meta">

                                            <span className="article-meta__item">
                                                8 hours ago
                                            </span>

                                            <span className="article-meta__item">
                                                4 min read
                                            </span>

                                        </div>

                                    </div>

                                </a>

                            </article>

                        </div>


                        {/* <!-- =========================================
                        TAGS
                ========================================== --> */}

                        <div className="post__tags">

                            <span className="post__tags-label">
                                Tags:
                            </span>

                            <a href="#" className="post__tag">
                                Bangladesh
                            </a>

                            <a href="#" className="post__tag">
                                Development
                            </a>

                            <a href="#" className="post__tag">
                                Future
                            </a>

                            <a href="#" className="post__tag">
                                Economy
                            </a>

                            <a href="#" className="post__tag">
                                Youth
                            </a>

                        </div>


                        {/* <!-- =========================================
                        PREVIOUS / NEXT
                ========================================== --> */}

                        <nav className="post__navigation">

                            <a href="#" className="post__nav post__nav--previous">

                                <Image
                                    src="/assets/images/articles/previous.jpg"
                                    alt=""
                                    width={50}
                                    height={50}
                                />

                                <div>

                                    <small>
                                        ← Previous
                                    </small>

                                    <strong>
                                        Global leaders meet for climate action
                                    </strong>

                                </div>

                            </a>


                            <a href="#" className="post__nav post__nav--next">

                                <div>

                                    <small>
                                        Next →
                                    </small>

                                    <strong>
                                        The rise of green energy in Bangladesh
                                    </strong>

                                </div>

                                <Image
                                    src="/assets/images/articles/next.jpg"
                                    alt=""
                                    width={50}
                                    height={50}
                                />

                            </a>

                        </nav>


                        {/* <!-- =========================================
                        COMMENT
                ========================================== --> */}

                        <section className="post__comments">

                            <div className="section__header post__section-header">

                                <h2 className="section__title section__title--sm">
                                    Leave a Comment
                                </h2>

                            </div>

                            <p className="post__comment-note">
                                Your email address will not be published.
                                Required fields are marked *
                            </p>


                            <form className="post__comment-form" id="commentForm">

                                <div className="post__form-grid">

                                    <div>

                                        <label htmlFor="name">
                                            Your Name *
                                        </label>

                                        <input
                                            id="name"
                                            type="text"
                                            className="input"
                                            placeholder="Your Name"
                                            required
                                        />

                                    </div>


                                    <div>

                                        <label htmlFor="email">
                                            Your Email *
                                        </label>

                                        <input
                                            id="email"
                                            type="email"
                                            className="input"
                                            placeholder="Your Email"
                                            required
                                        />

                                    </div>

                                </div>


                                <div>

                                    <label htmlFor="comment">
                                        Your Comment *
                                    </label>

                                    <textarea
                                        id="comment"
                                        className="input post__textarea"
                                        placeholder="Write your comment..."
                                        required
                                    ></textarea>

                                </div>


                                <button
                                    type="submit"
                                    className="btn btn--primary"
                                >
                                    Post Comment
                                </button>

                            </form>

                        </section>

                    </div>

                </article>

            </div>
        </section>
    );
};

export default PostDetailsPage;