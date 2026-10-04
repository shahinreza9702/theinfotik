'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface NavLink {
    slug: string;
    title: string;
    topicId: string | null;
    url: string;
    scrapable: boolean;
}

interface MobileNavProps {
    categories: NavLink[];
}

const MobileNav = ({ categories }: MobileNavProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className={`site-nav ${isOpen ? 'js-nav-ready' : 'js-nav-ready'}`} aria-label="Primary navigation">
            <div className="container">
                <div className="site-nav__inner">

                    <button
                        className="nav-toggle"
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls="primary-menu"
                        aria-label={isOpen ? 'Close menu' : 'Open menu'}
                        onClick={toggleMenu}
                    >
                        <span className="nav-toggle__bars" aria-hidden="true">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </button>

                    <div
                        className={`site-nav__panel ${isOpen ? 'is-open' : ''}`}
                        id="primary-menu"
                    >
                        <ul className="site-nav__list">
                            <li>
                                <Link
                                    href="/"
                                    aria-current="page"
                                    onClick={closeMenu}
                                >
                                    Home
                                </Link>
                            </li>

                            {categories.map((n) => (
                                <li key={n.slug}>
                                    <Link
                                        href={`/${n.slug}`}
                                        onClick={closeMenu}
                                    >
                                        {n.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <form
                        method="get"
                        className="form-inline"
                        role="search"
                    >
                        <label
                            htmlFor="search"
                            className="sr-only"
                        >
                            Search articles
                        </label>

                        <input
                            className="input"
                            type="search"
                            id="search"
                            name="q"
                            placeholder="Search..."
                            enterKeyHint="search"
                            autoComplete="off"
                        />

                        <button
                            type="submit"
                            className="btn btn--primary"
                        >
                            Search
                        </button>
                    </form>

                </div>
            </div>
        </nav>
    );
};

export default MobileNav;
