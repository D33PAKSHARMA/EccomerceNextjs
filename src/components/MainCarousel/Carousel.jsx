import React from "react";
import AliceCarousel from "react-alice-carousel";
import { MainCarouselData } from "./MainCarouselData";
import "react-alice-carousel/lib/alice-carousel.css";
import Link from "next/link";
import Image from "next/image";

// const responsive = {
//   0: { items: 1 },
//   568: { items: 2 },
//   1024: { items: 3 },
// };

const items = MainCarouselData.map((item, count) => (
  <Image
    width={item.width * 2}
    height={item.height * 2}
    key={count}
    src={item.image}
    alt={item.alt}
  />
));
const MainCarousel = () => {
  return (
    <Link href="/products">
      <AliceCarousel
        mouseTracking
        items={items}
        controlsStrategy="alternate"
        autoPlay={true}
        autoPlayInterval={1500}
        disableAutoPlayOnAction
        autoHeight={true}
        disableButtonsControls
        infinite
        // responsive={responsive}
      />
    </Link>
  );
};

export default MainCarousel;
