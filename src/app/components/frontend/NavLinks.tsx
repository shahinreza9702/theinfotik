import React from 'react';
import { fetchCategories } from '@/lib/api';
import MobileNav from '@/app/components/frontend/MobileNav';

interface NavLink {
    slug: string;
    title: string;
    topicId: string | null;
    url: string;
    scrapable: boolean;
}

const NavLinks = async () => {
    const categories: NavLink[] = await fetchCategories();

    const filteredNavs = categories.filter((n) => n.scrapable);

    return <MobileNav categories={filteredNavs} />;
};

export default NavLinks;
