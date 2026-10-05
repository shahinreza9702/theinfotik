import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getNews } from '@/lib/api';

const HeroSection = async () => {
    const news = await getNews({ limit: 4, });
    const [mainNews, secondNews, thirdNews, fourthNews] = news;
    if (!mainNews || !secondNews || !thirdNews || !fourthNews) {
        return <div>Loading...</div>;
    }
    return (
        <section className="hero">
            <div className="hero__grid">
                <article className="media-card media-card--lead">
                    <Link className="media-card__link" href={`/article/${mainNews.slug}/`}>
                        <Image src={mainNews.imageUrl} alt={mainNews.imageAlt} width="8640" height="5760"
                            fetchPriority="high" decoding="async" />
                        <div className="media-card__body">
                            <span className="meta">{mainNews.category}</span>
                            <h1 className="media-card__title">{mainNews.title}</h1>
                            <p className="media-card__summary u-clamp-2">{mainNews.description}</p>
                            <span className="article-meta">
                                <time className="article-meta__item" dateTime="2026-10-03T09:00">
                                    <svg aria-hidden="true" focusable="false">
                                        <use href="#icon-clock" />
                                    </svg>
                                    4 hours ago</time>
                                <span className="article-meta__item">
                                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                        <use href="#icon-book"></use>
                                    </svg>
                                    7 min read
                                </span>
                                <span className="article-meta__item article-meta__item--by">By Farhana
                                    Islam</span>
                            </span>
                        </div>
                    </Link>
                    <Link className="btn btn--primary media-cta" href={`/article/${mainNews.slug}/`}>
                        <span>Read Full Story</span>
                        <span className="media-cta__arrow" aria-hidden="true">
                            &rarr;
                        </span>
                    </Link>
                </article>
                <div className="hero__side">
                    <article className="media-card">
                        <Link className="media-card__link" href={`/article/${secondNews.slug}/`}>
                            <Image src={secondNews.imageUrl} alt={secondNews.imageAlt} width="5228" height="3485"
                                loading="lazy" decoding="async" />

                            <div className="media-card__body">
                                <span className="meta">{secondNews.category}</span>
                                <h2 className="media-card__title">{secondNews.title}</h2>
                                <span className="article-meta">
                                    <time className="article-meta__item" dateTime="2026-10-03T07:30">
                                        <svg aria-hidden="true" focusable="false">
                                            <use href="#icon-clock" />
                                        </svg>
                                        5 hours
                                        ago</time>
                                    <span className="article-meta__item">
                                        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                            <use href="#icon-book"></use>
                                        </svg>
                                        4 min read
                                    </span>
                                </span>
                            </div>
                        </Link>
                    </article>
                    <div className="hero__row">
                        <article className="media-card">
                            <Link className="media-card__link" href={`/article/${thirdNews.slug}/`}>
                                <Image src={thirdNews.imageUrl} alt={thirdNews.imageAlt} width="3000" height="2000"
                                    loading="lazy" decoding="async" />
                                <div className="media-card__body">
                                    <span className="meta">{thirdNews.category}</span>
                                    <h2 className="media-card__title">{thirdNews.title}</h2>
                                    <span className="article-meta">
                                        <time className="article-meta__item" dateTime="2026-10-03T06:15">
                                            <svg aria-hidden="true" focusable="false">
                                                <use href="#icon-clock" />
                                            </svg>
                                            6 hours
                                            ago</time>
                                        <span className="article-meta__item">
                                            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                                <use href="#icon-book"></use>
                                            </svg>
                                            3 min read
                                        </span>
                                    </span>
                                </div>
                            </Link>
                        </article>

                        <article className="media-card">
                            <Link className="media-card__link" href={`/article/${fourthNews.slug}/`}>
                                <Image src={fourthNews.imageUrl} width="8455" height="5637"
                                    alt={fourthNews.imageAlt} loading="lazy"
                                    decoding="async" />
                                <div className="media-card__body">
                                    <span className="meta">{fourthNews.category}</span>
                                    <h2 className="media-card__title">{fourthNews.title}</h2>
                                    <span className="article-meta">
                                        <time className="article-meta__item" dateTime="2026-10-03T04:45">
                                            <svg aria-hidden="true" focusable="false">
                                                <use href="#icon-clock" />
                                            </svg>
                                            8 hours
                                            ago</time>
                                        <span className="article-meta__item">
                                            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                                <use href="#icon-book"></use>
                                            </svg>
                                            5 min read
                                        </span>
                                    </span>
                                </div>
                            </Link>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;