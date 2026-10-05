import Image from "next/image";
import Link from "next/link";

interface Post {
    id: string;
    title: string;
    description?: string;
    link?: string;
    imageUrl?: string;
    imageAlt?: string;
    category?: string;
    type?: string;
    isLive?: boolean;
    firstPublished?: string;
    lastPublished?: string;
    source?: string;
}

interface PostDetailsPageProps {
    post: Post;
}

const PostDetailsPage = ({ post }: PostDetailsPageProps) => {
    return (
        <section className="post-page">
            <div className="container">
                <article className="post">

                    {/* Article Header */}
                    <header className="post__header">

                        {post.category && (
                            <span className="post__category">
                                {post.category}
                            </span>
                        )}

                        <h1 className="post__title">
                            {post.title}
                        </h1>

                        {post.description && (
                            <p className="post__excerpt">
                                {post.description}
                            </p>
                        )}

                        <div className="post__meta-row">

                            {/* Author */}
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
                                        {post.firstPublished ?? "Recently"}
                                    </div>
                                </div>
                            </div>

                            {/* Article stats */}
                            <div className="article-meta">
                                {post.isLive && (
                                    <span className="article-meta__item">
                                        🔴 Live
                                    </span>
                                )}

                                {post.source && (
                                    <span className="article-meta__item">
                                        {post.source}
                                    </span>
                                )}
                            </div>

                        </div>
                    </header>

                    {/* Article Body */}
                    <div className="post__content">

                        {/* Featured Image */}
                        {post.imageUrl && (
                            <figure className="post__media">
                                <Image
                                    src={post.imageUrl}
                                    alt={
                                        post.imageAlt ||
                                        post.title
                                    }
                                    width={1200}
                                    height={675}
                                    className="post__featured-image"
                                    priority
                                />
                            </figure>
                        )}

                        {/* Description / Content */}
                        {post.description && (
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: post.description,
                                }}
                            />
                        )}

                        {/* Related Articles */}
                        <div className="section__header post__section-header">
                            <h2 className="section__title section__title--sm">
                                Related Articles
                            </h2>
                        </div>

                        <div className="post__related">

                            <article className="card card--news">
                                <Link
                                    href="/"
                                    className="card__link"
                                >
                                    <Image
                                        src="/assets/images/articles/rmg.jpg"
                                        alt="Bangladesh RMG exports"
                                        className="card__media"
                                        width={400}
                                        height={250}
                                    />

                                    <div className="card__body">
                                        <span className="meta">
                                            Bangladesh
                                        </span>

                                        <h3 className="card__title">
                                            Bangladesh&apos;s RMG exports hit new record
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
                                </Link>
                            </article>

                            <article className="card card--news">
                                <Link
                                    href="/"
                                    className="card__link"
                                >
                                    <Image
                                        src="/assets/images/articles/youth.jpg"
                                        alt="Youth climate movement"
                                        className="card__media"
                                        width={400}
                                        height={250}
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
                                </Link>
                            </article>

                            <article className="card card--news">
                                <Link
                                    href="/"
                                    className="card__link"
                                >
                                    <Image
                                        src="/assets/images/articles/mental-health.jpg"
                                        alt="Mental health"
                                        className="card__media"
                                        width={400}
                                        height={250}
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
                                </Link>
                            </article>

                        </div>

                        {/* Tags */}
                        <div className="post__tags">

                            <span className="post__tags-label">
                                Tags:
                            </span>

                            {post.category && (
                                <Link
                                    href={`/${encodeURIComponent(post.category)}`}
                                    className="post__tag"
                                >
                                    {post.category}
                                </Link>
                            )}

                        </div>

                        {/* Previous / Next */}
                        <nav className="post__navigation">

                            <Link
                                href="/"
                                className="post__nav post__nav--previous"
                            >
                                <Image
                                    src="/assets/images/articles/previous.jpg"
                                    alt=""
                                    width={100}
                                    height={70}
                                />

                                <div>
                                    <small>← Previous</small>

                                    <strong>
                                        Previous Article
                                    </strong>
                                </div>
                            </Link>

                            <Link
                                href="/"
                                className="post__nav post__nav--next"
                            >
                                <div>
                                    <small>Next →</small>

                                    <strong>
                                        Next Article
                                    </strong>
                                </div>

                                <Image
                                    src="/assets/images/articles/next.jpg"
                                    alt=""
                                    width={100}
                                    height={70}
                                />
                            </Link>

                        </nav>

                        {/* Comment */}
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

                            <form className="post__comment-form">

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
                                    />
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
