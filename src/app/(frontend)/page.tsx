import HeroSection from "../components/frontend/home/HeroSection";
import FeatureStories from "../components/frontend/home/FeatureStories";
import CategorySection from "../components/frontend/home/CategorySection";
import LatestNews from "../components/frontend/home/LatestNews";
import MagazineSlider from "../components/frontend/home/MagazineSlider";
import TrendingNow from "../components/frontend/home/TrendingNow";
import SubscribeSection from "../components/frontend/home/SubscribeSection";

export default function HomePage() {
  return (
    <main className="site-main">
      <div className="container">
        <HeroSection />
        <CategorySection />
        <FeatureStories />
        <section className="spotlight">
          <div className="spotlight__grid">
            <LatestNews />
            <MagazineSlider />
            <TrendingNow />
          </div>
        </section>
        <SubscribeSection />
      </div>
    </main>
  );
}
