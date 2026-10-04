import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const HeroMainImage = '/assets/images/hero-main.jpg';
const HeroImage2 = '/assets/images/hero-2.jpg';
const HeroImage3 = '/assets/images/hero-3.jpg';
const HeroImage4 = '/assets/images/hero-4.jpg';

const FeatureStories = () => {
    return (
        <section className="featured">
            <div className="section__header">
                <h2 className="section__title">Featured Stories</h2>
            </div>
            <div className="u-grid u-cols-5 u-gap-md">
                <article className="card card--news">
                    <a href="/article/digital-payments/" className="card__link">
                        <Image className="card__media" src={HeroImage3} width="3000" height="2000"
                            alt="A person paying with a smartphone at a shop counter" loading="lazy"
                            decoding="async" />
                            <div className="card__body">
                                <span className="meta">Technology</span>
                                <h3 className="card__title">Digital Payments Pass Another Milestone</h3>
                                <span className="article-meta">
                                    <time className="article-meta__item" dateTime="2026-10-03T09:10">2 hours ago</time>
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

                <article className="card card--news">
                    <a href="/article/global-markets/" className="card__link">
                        <Image className="card__media" src={HeroImage2} width="5228" height="3485"
                            alt="Trading floor screens showing international market figures" loading="lazy"
                            decoding="async" />
                            <div className="card__body">
                                <span className="meta">World</span>
                                <h3 className="card__title">Global Markets Steady as Central Banks Signal Caution</h3>
                                <span className="article-meta">
                                    <time className="article-meta__item" dateTime="2026-10-03T07:15">4 hours ago</time>
                                    <span className="article-meta__item">
                                        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                            <use href="#icon-book"></use>
                                        </svg>
                                        6 min read
                                    </span>
                                </span>
                            </div>
                    </a>
                </article>

                <article className="card card--news">
                    <a href="/article/garment-exporters/" className="card__link">
                        <Image className="card__media" src={HeroImage4} width="8455" height="5637"
                            alt="Containers stacked at a busy port terminal" loading="lazy" decoding="async" />
                            <div className="card__body">
                                <span className="meta">Business</span>
                                <h3 className="card__title">Garment Exporters Push for Faster Customs Clearance</h3>
                                <span className="article-meta">
                                    <time className="article-meta__item" dateTime="2026-10-03T04:30">6 hours ago</time>
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

                <article className="card card--news">
                    <a href="/article/riverside-project/" className="card__link">
                        <Image className="card__media" src={HeroMainImage} width="8640" height="5760"
                            alt="Aerial view of the city riverfront at dusk" loading="lazy" decoding="async" />
                            <div className="card__body">
                                <span className="meta">Bangladesh</span>
                                <h3 className="card__title">Riverside Reclaiming Project Draws Fresh Investment</h3>
                                <span className="article-meta">
                                    <time className="article-meta__item" dateTime="2026-10-03T01:20">9 hours ago</time>
                                    <span className="article-meta__item">
                                        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                            <use href="#icon-book"></use>
                                        </svg>
                                        7 min read
                                    </span>
                                </span>
                            </div>
                    </a>
                </article>

                <article className="card card--news">
                    <a href="/article/budget-numbers/" className="card__link">
                        <Image className="card__media" src={HeroImage2} width="5228" height="3485"
                            alt="A printed budget document on a desk" loading="lazy" decoding="async" />
                            <div className="card__body">
                                <span className="meta">Opinion</span>
                                <h3 className="card__title">What the Mid-Year Budget Numbers Actually Say</h3>
                                <span className="article-meta">
                                    <time className="article-meta__item" dateTime="2026-10-02T23:05">11 hours ago</time>
                                    <span className="article-meta__item">
                                        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                            <use href="#icon-book"></use>
                                        </svg>
                                        8 min read
                                    </span>
                                </span>
                            </div>
                    </a>
                </article>
            </div>
        </section>
    );
};

export default FeatureStories;