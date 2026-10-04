import React from 'react';

const Header = () => {
    return (
        <>
            <header className="site-header">
                <div className="container">
                    {/* <!-- Logo --> */}
                    <a href="/" className="brand">
                        <span className="brand__mark">
                            <svg viewBox="0 0 19.9 40" xmlns="http://www.w3.org/2000/svg" aria-label="The Infotik logo"
                                role="img">
                                <path fill="currentColor"
                                    d="M16.64,14.42c-.12.44-.23.87-.34,1.29-.84,3.22-1.7,6.43-2.53,9.65-.45,1.74-.84,3.5-1.09,5.28-.11.77-.19,1.54-.11,2.32.12,1.12.67,1.81,1.75,2.12.78.23,1.57.26,2.37.31.2.01.39.05.62.08-.36.49-.79.85-1.25,1.17-1.24.86-2.62,1.37-4.08,1.65-1.08.21-2.17.28-3.27.13-1.43-.19-2.67-.73-3.54-1.92-.53-.72-.73-1.54-.66-2.43.27-3.2.85-6.35,1.55-9.48.23-1.03.47-2.06.47-3.13,0-1.15-.5-1.82-1.64-2.04-.76-.15-1.54-.19-2.31-.28-.06,0-.12,0-.21-.02.06-.44.1-.86.17-1.28.04-.26.12-.52.2-.77.2-.6.58-1.05,1.19-1.23.67-.2,1.36-.37,2.05-.48,1.46-.24,2.92-.46,4.39-.66,1.31-.18,2.63-.36,3.94-.49.51-.05,1.03.05,1.55.09.26.02.51.06.79.1Z" />
                                <path fill="currentColor"
                                    d="M17.54,6c-.09,2.42-1.25,4.11-3.34,5.13-1.47.72-3.03.89-4.62.41-1.75-.52-2.95-2.02-3.11-3.85-.15-1.72.3-3.23,1.54-4.46.92-.91,2.06-1.4,3.32-1.62,1.11-.19,2.21-.2,3.3.13,1.61.49,2.52,1.59,2.81,3.23.06.36.08.72.11,1.03Z" />
                            </svg>
                        </span>
                        <span className="brand__text">
                            <span className="brand__name">
                                The Infotik
                            </span>
                            <span className="brand__tagline">
                                Your source of information
                            </span>
                        </span>
                    </a>
                </div>
            </header>
            {/* <!-- Site Navigation --> */}
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
                                <li><a href="/#">Bangladesh</a></li>
                                <li><a href="/#">World</a></li>
                                <li><a href="/#">Business</a></li>
                                <li><a href="/#">Technology</a></li>
                                <li><a href="/#">Lifestyle</a></li>
                                <li><a href="/#">Opinion</a></li>
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
        </>
    );
};

export default Header;