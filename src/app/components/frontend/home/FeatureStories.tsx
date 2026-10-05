import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getNews } from '@/lib/api';


  interface FeatureStories  {
    id: string;
    title: string;
    description: string;
    link: string;
    imageUrl: string;
    imageAlt: string;
    category: string;
    type: string;
    isLive: Boolean;
    firstPublished: string;
    lastPublished: string;
    source: string;
    }

const FeatureStories = async () => {
    const featuredStories: FeatureStories[] = await getNews({
        limit:5,
    })
    featuredStories.sort(
        (a, b) =>
            new Date(b.lastPublished).getTime() -
            new Date(a.lastPublished).getTime()
    );

    return (
        <section className="featured">
            <div className="section__header">
                <h2 className="section__title">Featured Stories</h2>
            </div>
            <div className="u-grid u-cols-5 u-gap-md">
                {featuredStories.map((story) => (
                    <article className="card card--news" key={story.title}>
                        <Link href="/article/digital-payments/" className="card__link">
                            <Image className="card__media" src={story.imageUrl} width="3000" height="2000"
                                alt={story.imageAlt} loading="lazy"
                                decoding="async" />
                            <div className="card__body">
                                <span className="meta">{story.category}</span>
                                <h3 className="card__title">{story.title}</h3>
                                <span className="article-meta">
                                    <time className="article-meta__item" dateTime="2026-10-03T09:10">
                                        <svg aria-hidden="true" focusable="false">
                                            <use href="#icon-clock" />
                                        </svg>
                                        2 hours ago
                                    </time>
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
                ))}
            </div>
        </section>
    )
}

export default FeatureStories;