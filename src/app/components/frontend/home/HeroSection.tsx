import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const HeroMainImage = '/assets/images/hero-main.jpg';
const HeroImage2 = '/assets/images/hero-2.jpg';
const HeroImage3 = '/assets/images/hero-3.jpg';
const HeroImage4 = '/assets/images/hero-4.jpg';

const HeroSection = () => {
    return (
        <section className="hero">
            <div className="hero__grid">
                <article className="media-card media-card--lead">
                    <a className="media-card__link" href="/#">
                        <Image src={HeroMainImage} width="8640" height="5760"
                            alt="Illustrative photo accompanying a report on Bangladesh's economic growth"
                            fetchPriority="high" decoding="async" />
                        <div className="media-card__body">
                            <span className="meta">Bangladesh</span>
                            <h1 className="media-card__title">Bangladesh's Economic Growth: A Closer Look at the
                                    Numbers</h1>
                                <p className="media-card__summary u-clamp-2">Headline growth figures hide a slower
                                    story underneath — here is what the quarterly data actually shows about
                                    exports, remittances and consumer demand.</p>
                                <span className="article-meta">
                                    <time className="article-meta__item" dateTime="2026-10-03T09:00">4 hours ago</time>
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
                    </a>
                    <a className="btn btn--primary media-cta" href="/article/bangladesh-economic-growth/">
                        <span>Read Full Story</span>
                        <span className="media-cta__arrow" aria-hidden="true">
                            &rarr;
                        </span>
                    </a>
                </article>
                <div className="hero__side">
                    <article className="media-card">
                        <a className="media-card__link" href="/article/second-news/">
                            <Image src={HeroImage2} width="5228" height="3485"
                                alt="Illustrative photo accompanying a world news report" loading="lazy"
                                decoding="async" />

                                <div className="media-card__body">
                                    <span className="meta">World</span>
                                    <h2 className="media-card__title">Second news headline goes here</h2>
                                    <span className="article-meta">
                                        <time className="article-meta__item" dateTime="2026-10-03T07:30">5 hours
                                            ago</time>
                                        <span className="article-meta__item">
                                            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                                <use href="#icon-book"></use>
                                            </svg>
                                            4 min read
                                        </span>
                                    </span>
                                </div>
                        </a>
                    </article>
                    <div className="hero__row">
                        <article className="media-card">
                            <a className="media-card__link" href="/article/third-news/">
                                <Image src={HeroImage3} width="3000" height="2000"
                                    alt="Illustrative photo accompanying a business report" loading="lazy"
                                    decoding="async" />
                                    <div className="media-card__body">
                                        <span className="meta">Business</span>
                                        <h2 className="media-card__title">Third news headline goes here</h2>
                                        <span className="article-meta">
                                            <time className="article-meta__item" dateTime="2026-10-03T06:15">6 hours
                                                ago</time>
                                            <span className="article-meta__item">
                                                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                                    <use href="#icon-book"></use>
                                                </svg>
                                                3 min read
                                            </span>
                                        </span>
                                    </div>
                            </a>
                        </article>

                        <article className="media-card">
                            <a className="media-card__link" href="/article/fourth-news/">
                                <Image src={HeroImage4} width="8455" height="5637"
                                    alt="Illustrative photo accompanying a business report" loading="lazy"
                                    decoding="async" />
                                <div className="media-card__body">
                                    <span className="meta">Business</span>
                                    <h2 className="media-card__title">Fourth news headline goes here</h2>
                                    <span className="article-meta">
                                        <time className="article-meta__item" dateTime="2026-10-03T04:45">8 hours
                                            ago</time>
                                        <span className="article-meta__item">
                                            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                                <use href="#icon-book"></use>
                                            </svg>
                                            5 min read
                                        </span>
                                    </span>
                                </div>
                            </a>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;