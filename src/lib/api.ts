const API_URL = "https://news-api-v2.vercel.app/api";

export async function fetchCategories() {
    const res = await fetch(`${API_URL}/categories`);

    if (!res.ok) {
        throw new Error("Failed to fetch categories");
    }

    const data = await res.json();

    return data.data;
}

export async function getNews(params?: {
    limit?: number;
    offset?: number;
    category?: string;
    q?: string;
    sortBy?: string;
    order?: "asc" | "desc";
}) {
    const searchParams = new URLSearchParams();

    if (params?.limit !== undefined) {
        searchParams.set("limit", String(params.limit));
    }

    if (params?.offset !== undefined) {
        searchParams.set("offset", String(params.offset));
    }

    if (params?.category) {
        searchParams.set("category", params.category);
    }

    if (params?.q) {
        searchParams.set("q", params.q);
    }

    if (params?.sortBy) {
        searchParams.set("sortBy", params.sortBy);
    }

    if (params?.order) {
        searchParams.set("order", params.order);
    }

    const query = searchParams.toString();

    const url = query
        ? `${API_URL}/news?${query}`
        : `${API_URL}/news`;

    const res = await fetch(url);

    if (!res.ok) {
        throw new Error("Failed to fetch news");
    }

    const data = await res.json();

    return data.data;
}

export async function getNewsSection() {
    const res = await fetch(`${API_URL}/news/sections`);

    if (!res.ok) {
        throw new Error("Failed to fetch news sections");
    }

    const data = await res.json();

    return data.data;
}

export async function getMostRead() {
    const res = await fetch(`${API_URL}/news/most-read`);

    if (!res.ok) {
        throw new Error("Failed to fetch most read news");
    }

    const data = await res.json();

    return data.data;
}

export async function getCategory(slug: string) {
    const res = await fetch(`${API_URL}/category/${encodeURIComponent(slug)}`);

    if (!res.ok) {
        return null;
    }

    const data = await res.json();

    return data.data;
}

export async function getArticle(id: string) {
    const res = await fetch(`${API_URL}/article/${id}`);

    if (!res.ok) {
        return null;
    }

    const data = await res.json();

    return data.data;
}

/**
 * Find an article by slug.
 *
 * If your API has a dedicated endpoint such as:
 * /article/slug/:slug
 * then use that endpoint here.
 *
 * Otherwise this implementation searches the news API.
 */
export async function getArticleBySlug(slug: string) {
    const res = await fetch(
        `${API_URL}/news?q=${encodeURIComponent(slug)}`
    );

    if (!res.ok) {
        return null;
    }

    const data = await res.json();

    const articles = data.data;

    if (!Array.isArray(articles)) {
        return null;
    }

    return (
        articles.find(
            (article) =>
                article.slug === slug ||
                article.title === slug
        ) ?? null
    );
}


/**
 * Resolve a frontend slug.
 *
 * First checks whether the slug belongs to an article,
 * then checks whether it belongs to a category.
 */
export async function getBySlug(slug: string) {
    const article = await getArticleBySlug(slug);

    if (article) {
        return {
            type: "article" as const,
            data: article,
        };
    }

    const category = await getCategory(slug);

    if (category) {
        return {
            type: "category" as const,
            data: category,
        };
    }

    return null;
}

