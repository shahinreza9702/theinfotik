import React from 'react';
import Link from 'next/link';
import {fetchCategories} from '@/lib/api';

interface NavLink {
    slug: string;
    title: string;
    topicId: string | null;
    url: string;
    scrapable: boolean;
}


const NavLinks = async () => {
    const categories: NavLink[] = await fetchCategories();

    const filteredNavs = categories.filter((n: NavLink) => n.scrapable);
    return (
        <nav className="site-nav" aria-label="Primary navigation">
            <div className="container">
                <div className="site-nav__inner">
                    <button className="nav-toggle" type="button" aria-expanded="false" aria-controls="primary-menu"
                        aria-label="Menu">
                        <span className="nav-toggle__bars" aria-hidden="true">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </button>
                    <div className="site-nav__panel" id="primary-menu">
                        <ul className="site-nav__list">
                            <li><a href="/" aria-current="page">Home</a></li>
                            {filteredNavs.map((n, i) => (
                                <li key={i}>
                                    <Link href={`/${n.slug}`} aria-current="page">{n.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <form method="get" className="form-inline" role="search">
                        <label htmlFor="search" className="sr-only">Search articles</label>
                        <input className="input" type="search" id="search" name="q" placeholder="Search..."
                            enterKeyHint="search" autoComplete="off" />
                        <button type="submit" className="btn btn--primary">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default NavLinks;