export interface NavLink {
    slug: string;
    title: string;
    topicId: string | null;
    url: string;
    scrapable: boolean;
}

export interface Category {
    id: string;
    title: string;
    slug: string;
    count: number;
    page: number;
    pageCount: number;
}

export interface Article {
    id: string;
    title: string;
    slug: string;
    description: string;
    link: string;
    imageUrl: string;
    imageAlt: string;
    category: string;
    type: string;
    isLive: boolean;
    firstPublished: string;
    lastPublished: string;
    source: string;
}

export interface CategoryWithPosts extends Category {
    posts: Article[];
}

export interface Post {
    id: string;
    title: string;
    description?: string;
    link?: string;
    imageUrl?: string;
    imageAlt?: string;
    category?: string;
    type?: string;
    isLive?: boolean;
    firstPublished?: string;
    lastPublished?: string;
    source?: string;
    slug?: string;
}