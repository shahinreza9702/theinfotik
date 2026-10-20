import HeroSection from "@/components/home/HeroSection";
import { Suspense } from "react";



export default function HomePage() {
  return (
    <main className="site-main">
        <div className="container">
            <Suspense>
                <HeroSection />
            </Suspense>
        </div>
      
    </main>
  );
}
