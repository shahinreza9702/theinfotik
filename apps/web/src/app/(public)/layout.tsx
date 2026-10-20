
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer"

export const metadata: Metadata = {
    title: {
        default: "TheInfotik — Latest News & Updates",
        template: "%s | TheInfotik",
    },
    description:
        "Read the latest news, breaking stories, technology, business, sports, and more on TheInfotik.",
};

export default function PublicLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}
