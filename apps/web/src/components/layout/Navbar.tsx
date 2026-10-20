import React from 'react';
import { fetchCategories } from '@/lib/api';
import MobileMenu from '@/components/layout/MobileMenu';

interface NavLink {
    slug: string;
    title: string;
    topicId: string | null;
    url: string;
    scrapable: boolean;
}

const Navbar = async () => {
    const categories: NavLink[] = await fetchCategories();

    const filteredNavs = categories.filter((n) => n.scrapable);

    return <MobileMenu categories={filteredNavs} />;
};

export default Navbar;
