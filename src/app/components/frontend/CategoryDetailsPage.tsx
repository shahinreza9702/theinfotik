import { getCategoryNews } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import { Article, Category } from "@/lib/types";

interface CategoryDetailsPageProps {
    category: Category;
}



const CategoryDetailsPage = async({ category, }: CategoryDetailsPageProps) => {
    const posts: Article[] = await getCategoryNews(category.slug, {
        limit: 24,
        sortBy: "firstPublished",
        order: "desc",
    });
    return (
        <section className="category-page">

            <div className="container">

                <div className="category-layout">

                    {/* <!-- =========================================
                    LEFT : CATEGORY NEWS
            ========================================== --> */}

                    <div className="category-main">

                        {/* <!-- Category Header --> */}
                        <div className="category-toolbar">

                            <div className="category-tabs">

                                <a href="#" className="is-active">
                                    All
                                </a>

                                <a href="#">
                                    Politics
                                </a>

                                <a href="#">
                                    Economy
                                </a>

                                <a href="#">
                                    Education
                                </a>

                                <a href="#">
                                    Environment
                                </a>

                                <a href="#">
                                    Society
                                </a>

                            </div>


                            <div className="category-sort">

                                <span>Sort by:</span>

                                <select>
                                    <option>Latest</option>
                                    <option>Popular</option>
                                    <option>Oldest</option>
                                </select>

                            </div>

                        </div>


                        {/* <!-- =====================================
                        NEWS GRID
                ====================================== --> */}

                        <div className="category-news u-grid u-cols-2 u-gap-lg">


                            {/* <!-- News 01 --> */}
                            {posts.map((post) => (
                                <article
                                    className="card card--news"
                                    key={post.id}
                                >
                                    <Link
                                        href={`/${post.slug}`}
                                        className="card__link"
                                    >
                                        <Image
                                            src={post.imageUrl}
                                            alt={post.imageAlt || post.title}
                                            className="card__media"
                                            width={600}
                                            height={400}
                                        />

                                        <div className="card__body">

                                            <span className="meta">
                                                {post.category}
                                            </span>

                                            <h2 className="card__title">
                                                {post.title}
                                            </h2>

                                            <p>
                                                {post.description}
                                            </p>

                                        </div>
                                    </Link>
                                </article>
                            ))}


                        </div>


                        {/* <!-- =====================================
                        PAGINATION
                ====================================== --> */}

                        <nav className="pagination">

                            <button className="pagination__arrow" disabled>
                                &larr;
                            </button>

                            <button className="is-active">
                                1
                            </button>

                            <Link href="/bangladesh/page/2/">
                                2
                            </Link>

                            <Link href="/bangladesh/page/3/">
                                3
                            </Link>

                            <Link href="/bangladesh/page/4/">
                                4
                            </Link>

                            <Link href="/bangladesh/page/5/">
                                5
                            </Link>

                            <Link href="/bangladesh/page/2/" className="pagination__arrow">
                                &rarr;
                            </Link>

                        </nav>

                    </div>


                    {/* <!-- =========================================
                    RIGHT SIDEBAR
            ========================================== --> */}

                    <aside className="category-sidebar">


                        {/* <!-- =====================================
                        POPULAR
                ====================================== --> */}

                        <section className="sidebar-block">

                            <div className="section__header">

                                <h2 className="section__title section__title--sm">
                                    Popular in Bangladesh
                                </h2>

                            </div>


                            <ol className="trend-list">

                                <li className="trend">

                                    <Link href="#" className="trend__link">

                                        <span className="trend__rank">
                                            1
                                        </span>

                                        <Image
                                            src="/assets/images/articles/politics.jpg"
                                            alt=""
                                            className="u-thumb"
                                            width={96}
                                            height={72}
                                        />

                                        <div className="trend__body">

                                            <h3 className="trend__title">
                                                New election roadmap announced
                                                by the government
                                            </h3>

                                            <div className="article-meta">
                                                2 hours ago
                                            </div>

                                        </div>

                                    </Link>

                                </li>


                                <li className="trend">

                                    <Link href="#" className="trend__link">

                                        <span className="trend__rank">
                                            2
                                        </span>

                                        <Image
                                            src="/assets/images/articles/transport.jpg"
                                            alt=""
                                            className="u-thumb"
                                            width={96}
                                            height={72}
                                        />

                                        <div className="trend__body">

                                            <h3 className="trend__title">
                                                Dhaka&apos;s transport system gets
                                                major upgrade
                                            </h3>

                                            <div className="article-meta">
                                                3 hours ago
                                            </div>

                                        </div>

                                    </Link>

                                </li>


                                <li className="trend">

                                    <Link href="#" className="trend__link">

                                        <span className="trend__rank">
                                            3
                                        </span>

                                        <Image
                                            src="/assets/images/articles/sundarbans.jpg"
                                            alt=""
                                            className="u-thumb"
                                            width={96}
                                            height={72}
                                        />

                                        <div className="trend__body">

                                            <h3 className="trend__title">
                                                Sundarbans gets more protection
                                                measures
                                            </h3>

                                            <div className="article-meta">
                                                6 hours ago
                                            </div>

                                        </div>

                                    </Link>

                                </li>


                                <li className="trend">

                                    <Link href="#" className="trend__link">

                                        <span className="trend__rank">
                                            4
                                        </span>

                                        <Image
                                            src="/assets/images/articles/youth.jpg"
                                            alt=""
                                            className="u-thumb"
                                            width={96}
                                            height={72}
                                        />

                                        <div className="trend__body">

                                            <h3 className="trend__title">
                                                Youth-led initiatives creating
                                                positive change
                                            </h3>

                                            <div className="article-meta">
                                                7 hours ago
                                            </div>

                                        </div>

                                    </Link>

                                </li>


                                <li className="trend">

                                    <Link href="#" className="trend__link">

                                        <span className="trend__rank">
                                            5
                                        </span>

                                        <Image
                                            src="/assets/images/articles/rmg.jpg"
                                            alt=""
                                            className="u-thumb"
                                            width={96}
                                            height={72}
                                        />

                                        <div className="trend__body">

                                            <h3 className="trend__title">
                                                RMG sector shows strong growth
                                                in 2025
                                            </h3>

                                            <div className="article-meta">
                                                8 hours ago
                                            </div>

                                        </div>

                                    </Link>

                                </li>

                            </ol>

                        </section>


                        {/* <!-- =====================================
                        SUBSCRIBE
                ====================================== --> */}

                        <section className="sidebar-subscribe">

                            <h3>
                                ✉ Get Notified
                            </h3>

                            <p>
                                Subscribe to get the latest Bangladesh news
                                directly in your inbox.
                            </p>

                            <form className="sidebar-subscribe__form">

                                <input
                                    type="email"
                                    className="input"
                                    placeholder="Your email address"
                                />

                                <button
                                    type="submit"
                                    className="btn btn--primary"
                                >
                                    Subscribe
                                </button>

                            </form>

                        </section>


                        {/* <!-- =====================================
                        TOP TAGS
                ====================================== --> */}

                        <section className="sidebar-block">

                            <div className="section__header">

                                <h2 className="section__title section__title--sm">
                                    Top Tags
                                </h2>

                            </div>


                            <div className="tag-list">

                                <Link href="/bangladesh/">Bangladesh</Link>
                                <Link href="/politics/">Politics</Link>
                                <Link href="/economy/">Economy</Link>
                                <Link href="/education/">Education</Link>
                                <Link href="/environment/">Environment</Link>
                                <Link href="/society/">Society</Link>

                            </div>

                        </section>


                        {/* <!-- =====================================
                        PROMO CARD
                ====================================== --> */}

                        <Link href="/better-bangladesh/" className="category-promo">

                            <Image
                                src="/assets/images/promo/better-bangladesh.jpg"
                                alt="A better Bangladesh is possible"
                                width={330}
                                height={200}
                            />

                            <div>

                                <span>
                                    A better
                                </span>

                                <strong>
                                    Bangladesh
                                    <br />
                                    is possible
                                </strong>

                                <small>
                                    INFOTIK
                                </small>

                            </div>

                            <b>&rarr;</b>

                        </Link>

                    </aside>

                </div>

            </div>

        </section>
    );
};

export default CategoryDetailsPage;