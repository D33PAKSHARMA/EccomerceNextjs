"use client";
import HomeCard from "@/components/Homecard/HomeCard";
import MainCarousel from "@/components/MainCarousel/Carousel";

export default function Home() {
  return (
    <main>
      <div>
        <div>
          <MainCarousel />
        </div>
        <div className="my-8">
          <h1 className="font-bold text-2xl px-4">Products</h1>
          <div>
            <HomeCard />
            {/* <HomeCard /> */}
          </div>
        </div>
      </div>
    </main>
  );
}
