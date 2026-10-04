import React from 'react';
import Image from 'next/image';
const HeroMainImage = '/assets/images/hero-main.jpg';
const HeroImage2 = '/assets/images/hero-2.jpg';
const HeroImage3 = '/assets/images/hero-3.jpg';
const HeroImage4 = '/assets/images/hero-4.jpg';

const TrendingNow = () => {
    return (
        <section className="panel" aria-labelledby="trending-title">
                        <h3 className="section__title section__title--sm" id="trending-title">Trending Now</h3>
                        <ol className="trend-list">
                            <li className="trend">
                                <a className="trend__link" href="/article/exam-result-date/">
                                    <span className="trend__rank" aria-hidden="true">1</span>
                                    <Image className="u-thumb" src={HeroMainImage} width="5228" height="3485"
                                        alt="" loading="lazy" decoding="async" />
                                    <span className="trend__body">
                                        <span className="trend__title">What date are the exam results out?</span>
                                        <span className="article-meta">
                                            <time className="article-meta__item" dateTime="2026-10-03T10:50">1 hour
                                                ago</time>
                                            <span className="article-meta__item">
                                                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                                    <use href="#icon-book"></use>
                                                </svg>
                                                2 min read
                                            </span>
                                        </span>
                                    </span>
                                </a>
                            </li>
                            <li className="trend">
                                <a className="trend__link" href="/article/gold-price/">
                                    <span className="trend__rank" aria-hidden="true">2</span>
                                    <Image className="u-thumb" src={HeroImage4} width="8455" height="5637"
                                        alt="" loading="lazy" decoding="async" />
                                    <span className="trend__body">
                                        <span className="trend__title">Gold price climbs for a fourth straight
                                            day</span>
                                        <span className="article-meta">
                                            <time className="article-meta__item" dateTime="2026-10-03T08:05">3 hours
                                                ago</time>
                                            <span className="article-meta__item">
                                                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                                    <use href="#icon-book"></use>
                                                </svg>
                                                1 min read
                                            </span>
                                        </span>
                                    </span>
                                </a>
                            </li>
                            <li className="trend">
                                <a className="trend__link" href="/article/new-route/">
                                    <span className="trend__rank" aria-hidden="true">3</span>
                                    <Image className="u-thumb" src={HeroImage3} width="3000" height="2000"
                                        alt="" loading="lazy" decoding="async" />
                                    <span className="trend__body">
                                        <span className="trend__title">Why the new bus route keeps skipping
                                            stops</span>
                                        <span className="article-meta">
                                            <time className="article-meta__item" dateTime="2026-10-03T06:10">5 hours
                                                ago</time>
                                            <span className="article-meta__item">
                                                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                                    <use href="#icon-book"></use>
                                                </svg>
                                                4 min read
                                            </span>
                                        </span>
                                    </span>
                                </a>
                            </li>
                            <li className="trend">
                                <a className="trend__link" href="/article/heatwave-school/">
                                    <span className="trend__rank" aria-hidden="true">4</span>
                                    <Image className="u-thumb" src={HeroMainImage} width="8640" height="5760"
                                        alt="" loading="lazy" decoding="async" />
                                    <span className="trend__body">
                                        <span className="trend__title">Schools weigh a shorter day as heat
                                            rises</span>
                                        <span className="article-meta">
                                            <time className="article-meta__item" dateTime="2026-10-03T03:35">8 hours
                                                ago</time>
                                            <span className="article-meta__item">
                                                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                                    <use href="#icon-book"></use>
                                                </svg>
                                                3 min read
                                            </span>
                                        </span>
                                    </span>
                                </a>
                            </li>
                            <li className="trend">
                                <a className="trend__link" href="/article/loan-rules/">
                                    <span className="trend__rank" aria-hidden="true">5</span>
                                    <Image className="u-thumb" src={HeroImage2} width="5228" height="3485"
                                        alt="" loading="lazy" decoding="async" />
                                    <span className="trend__body">
                                        <span className="trend__title">New loan rules: what borrowers need to
                                            know</span>
                                        <span className="article-meta">
                                            <time className="article-meta__item" dateTime="2026-10-02T22:40">13
                                                hours ago</time>
                                            <span className="article-meta__item">
                                                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                                    <use href="#icon-book"></use>
                                                </svg>
                                                6 min read
                                            </span>
                                        </span>
                                    </span>
                                </a>
                            </li>
                        </ol>
                    </section>
    );
};

export default TrendingNow;