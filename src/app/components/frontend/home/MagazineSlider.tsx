import React from 'react';
import Image from 'next/image';
const HeroMainImage = '/assets/images/hero-main.jpg';
const HeroImage2 = '/assets/images/hero-2.jpg';
const HeroImage3 = '/assets/images/hero-3.jpg';
const HeroImage4 = '/assets/images/hero-4.jpg';

const MagazineSlider = () => {
    return (
                            <section className="panel panel--feature" aria-labelledby="magazine-title">
                        <div className="panel__head">
                            <h3 className="section__title section__title--sm" id="magazine-title">From the Magazine</h3>
                        </div>
                        <div className="slider" data-slider aria-roledescription="carousel" aria-label="Magazine features">
                            <div className="slider__viewport">
                                <div className="slider__track" data-slider-track>
                                    <article className="media-card slider__slide">
                                        <a className="media-card__link" href="/magazine/cities-on-the-water/">
                                            <Image src={HeroMainImage} width="8640" height="5760"
                                                alt="Aerial view of the city riverfront at dusk" loading="lazy"
                                                decoding="async" />
                                            <div className="media-card__body">
                                                <span className="meta">Magazine</span>
                                                <h4 className="media-card__title">Cities on the Water</h4>
                                                <p className="media-card__summary u-clamp-2">A decade of land
                                                    reclaiming reshaped the capital's river edge — and the
                                                    neighbourhoods that grew along it.</p>
                                                <span className="article-meta">
                                                    <time className="article-meta__item" dateTime="2026-10-03T05:40">6
                                                        hours ago</time>
                                                    <span className="article-meta__item">
                                                        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                                            <use href="#icon-book"></use>
                                                        </svg>
                                                        9 min read
                                                    </span>
                                                </span>
                                            </div>
                                        </a>
                                    </article>
                                    <article className="media-card slider__slide">
                                        <a className="media-card__link" href="/magazine/inside-the-new-rail-line/">
                                            <Image src={HeroImage2} width="5228" height="3485" alt="A passenger train crossing a long bridge" loading="lazy" decoding="async" />
                                            <div className="media-card__body">
                                                <span className="meta">Magazine</span>
                                                <h4 className="media-card__title">Inside the New Rail Line</h4>
                                                <p className="media-card__summary u-clamp-2">Riding the full length of
                                                    the line, from the first station to the last, and what it
                                                    changes for daily commuters.</p>
                                                <span className="article-meta">
                                                    <time className="article-meta__item" dateTime="2026-10-03T03:15">8
                                                        hours ago</time>
                                                    <span className="article-meta__item">
                                                        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                                            <use href="#icon-book"></use>
                                                        </svg>
                                                        12 min read
                                                    </span>
                                                </span>
                                            </div>
                                        </a>
                                    </article>
                                    <article className="media-card slider__slide">
                                        <a className="media-card__link" href="/magazine/the-handloom-revival/">
                                            <Image src={HeroImage3} width="3000" height="2000" alt="A weaver working at a handloom" loading="lazy" decoding="async" />
                                            <div className="media-card__body">
                                                <span className="meta">Magazine</span>
                                                <h4 className="media-card__title">The Handloom Revival</h4>
                                                <p className="media-card__summary u-clamp-2">Weavers are bringing
                                                    ancestral looms back to life, and buyers are finally paying
                                                    attention.</p>
                                                <span className="article-meta">
                                                    <time className="article-meta__item" dateTime="2026-10-03T00:05">11
                                                        hours ago</time>
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
                                    <article className="media-card slider__slide">
                                        <a className="media-card__link" href="/magazine/monsoon-reviewed/">
                                            <Image src={HeroImage4} width="8455" height="5637"
                                                alt="Heavy rain falling over a city street" loading="lazy"
                                                decoding="async" />
                                            <div className="media-card__body">
                                                <span className="meta">Magazine</span>
                                                <h4 className="media-card__title">Monsoon, Reviewed</h4>
                                                <p className="media-card__summary u-clamp-2">What the season's rain
                                                    did to the capital's streets, drainage and everyday
                                                    commute.</p>
                                                <span className="article-meta">
                                                    <time className="article-meta__item" dateTime="2026-10-02T22:25">13
                                                        hours ago</time>
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
                            </div>
                            <div className="slider__overlay">
                                <a className="btn btn--primary media-cta" href="/magazine/">
                                    <span>Explore Magazine</span>
                                    <span className="media-cta__arrow" aria-hidden="true">
                                        &rarr;
                                    </span>
                                </a>
                                <div className="slider__controls">
                                    <button className="slider__btn" type="button" data-slider-prev
                                        aria-label="Previous feature">
                                        <span aria-hidden="true">&#8249;</span>
                                    </button>
                                    <div className="slider__dots" data-slider-dots role="group"
                                        aria-label="Choose a feature"></div>
                                    <button className="slider__btn" type="button" data-slider-next
                                        aria-label="Next feature">
                                        <span aria-hidden="true">&#8250;</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
    );
};

export default MagazineSlider;