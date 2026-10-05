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
}){
    const searchParams = new URLSearchParams();
    if(params?.limit) searchParams.set("limit", String(params.limit));
    if(params?.offset) searchParams.set("offset", String(params.offset));
    if(params?.category) searchParams.set("category", params.category);
    if(params?.q) searchParams.set("q", params.q);

    const url = `${API_URL}/news?${searchParams.toString()}`;
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error("Failed to fetch news");
    }

    const data = await res.json();
    return data.data;
}

export async function getNewsSection(){
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
    const res = await fetch(`${API_URL}/category/${slug}`);

    if (!res.ok) {
        throw new Error("Failed to fetch category");
    }

    const data = await res.json();

    return data.data;
}

export async function getArticle(id: string) {
    const res = await fetch(`${API_URL}/article/${id}`);

    if (!res.ok) {
        throw new Error("Failed to fetch article");
    }

    const data = await res.json();

    return data.data;
}