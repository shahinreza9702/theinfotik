import { notFound } from "next/navigation";

import PostDetails from "@/app/components/frontend/PostDetailsPage";
import CategoryDetails from "@/app/components/frontend/CategoryDetailsPage";
import { getBySlug } from "@/lib/api";

const Page = async ({
    params,
}: {
    params: Promise<{ slug: string }>;
}) => {
    const { slug } = await params;

    const decodedSlug = decodeURIComponent(slug);

    console.log("Encoded:", slug);
    console.log("Decoded:", decodedSlug);

    const result = await getBySlug(decodedSlug);

    if (!result) {
        return (
            <div>
                <h1>Not Found</h1>
                <p>{decodedSlug}</p>
            </div>
        );
    }

    if (result.type === "article") {
        return <PostDetails post={result.data} />;
    }

    if (result.type === "category") {
        return <CategoryDetails category={result.data} />;
    }

    notFound();
};

export default Page;
