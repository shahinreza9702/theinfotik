import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroMainImage = '/assets/images/hero-main.jpg';
const HeroImage2 = '/assets/images/hero-2.jpg';
const HeroImage3 = '/assets/images/hero-3.jpg';
const HeroImage4 = '/assets/images/hero-4.jpg';

const LatestNews = () => {
    return (
        <section className="panel" aria-labelledby="latest-title">
            <div className="panel__head">
                <h3 className="section__title section__title--sm" id="latest-title">Latest News</h3>
                <Link className="panel__more" href="/latest/">View All</Link>
            </div>
            <ul className="story-list">
                <li className="story">
                    <Link className="story__link" href="/article/tariff-revision/">
                        <Image className="u-thumb" src={HeroImage3} width="3000" height="2000"
                            alt="Government revises tariff schedule for select imports" loading="lazy" decoding="async" />
                        <span className="story__body">
                            <span className="story__meta">
                                <span className="story__tag">Business</span>
                                <span className="article-meta">
                                    <time className="article-meta__item" dateTime="2026-10-03T11:40">12 min
                                        ago</time>
                                    <span className="article-meta__item">
                                        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                            <use href="#icon-book" />
                                        </svg>
                                        3 min read
                                    </span>
                                </span>
                            </span>
                            <span className="story__title">Government revises tariff schedule for select
                                imports</span>
                        </span>
                    </Link>
                </li>
                <li className="story">
                    <Link className="story__link" href="/article/monsoon-forecast/">
                        <Image className="u-thumb" src={HeroImage4} width="8455" height="5637"
                            alt="" loading="lazy" decoding="async" />
                        <span className="story__body">
                            <span className="story__meta">
                                <span className="story__tag">Bangladesh</span>
                                <span className="article-meta">
                                    <time className="article-meta__item" dateTime="2026-10-03T10:05">2
                                        hours ago</time>
                                    <span className="article-meta__item">
                                        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                            <use href="#icon-book" />
                                        </svg>
                                        4 min read
                                    </span>
                                </span>
                            </span>
                            <span className="story__title">Met office extends monsoon warning across coastal
                                districts</span>
                        </span>
                    </Link>
                </li>
                <li className="story">
                    <Link className="story__link" href="/article/chip-plant/">
                        <Image className="u-thumb" src={HeroImage2} width="5228" height="3485"
                            alt="" loading="lazy" decoding="async" />
                        <span className="story__body">
                            <span className="story__meta">
                                <span className="story__tag">Technology</span>
                                <span className="article-meta">
                                    <time className="article-meta__item" dateTime="2026-10-03T08:20">4
                                        hours ago</time>
                                    <span className="article-meta__item">
                                        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                            <use href="#icon-book" />
                                        </svg>
                                        3 min read
                                    </span>
                                </span>
                            </span>
                            <span className="story__title">Second chip packaging plant gets the green
                                light</span>
                        </span>
                    </Link>
                </li>
                <li className="story">
                    <Link className="story__link" href="/article/ceasefire-talks/">
                        <Image className="u-thumb" src={HeroMainImage} width="8640" height="5760"
                            alt="Ceasefire talks resume with mediators in the region" loading="lazy" decoding="async" />
                        <span className="story__body">
                            <span className="story__meta">
                                <span className="story__tag">World</span>
                                <span className="article-meta">
                                    <time className="article-meta__item" dateTime="2026-10-03T06:55">6
                                        hours ago</time>
                                    <span className="article-meta__item">
                                        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                            <use href="#icon-book" />
                                        </svg>
                                        5 min read
                                    </span>
                                </span>
                            </span>
                            <span className="story__title">Ceasefire talks resume with mediators in the
                                region</span>
                        </span>
                    </Link>
                </li>
                <li className="story">
                    <Link className="story__link" href="/article/coffee-markets/">
                        <Image className="u-thumb" src={HeroImage3} width="3000" height="2000"
                            alt="Coffee prices ease as new crop reaches warehouses" loading="lazy" decoding="async" />
                        <span className="story__body">
                            <span className="story__meta">
                                <span className="story__tag">Business</span>
                                <span className="article-meta">
                                    <time className="article-meta__item" dateTime="2026-10-03T05:10">8
                                        hours ago</time>
                                    <span className="article-meta__item">
                                        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                            <use href="#icon-book" />
                                        </svg>
                                        2 min read
                                    </span>
                                </span>
                            </span>
                            <span className="story__title">Coffee prices ease as new crop reaches
                                warehouses</span>
                        </span>
                    </Link>
                </li>
            </ul>
        </section>
    );
};

export default LatestNews;