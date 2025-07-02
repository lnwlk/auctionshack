import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import { Parallax, Pagination, A11y } from "swiper/modules";
import ShackSlide from "./ShackSlide";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/parallax";

const slides = [
  {
    image: "/app/shack.png",
    nameKey: "shack1.name",
    titleKey: "shack1.title",
    iconKey: "shack1.icon",
    descriptionKey: "shack1.description",
  },
  {
    image: "/app/shack_sherlock.png",
    nameKey: "shack2.name",
    titleKey: "shack2.title",
    iconKey: "shack2.icon",
    descriptionKey: "shack2.description",
  },
  {
    image: "/app/shack.png",
    nameKey: "shack3.name",
    titleKey: "shack3.title",
    iconKey: "shack3.icon",
    descriptionKey: "shack3.description",
  },
  {
    image: "/app/shack_sherlock.png",
    nameKey: "shack4.name",
    titleKey: "shack4.title",
    iconKey: "shack4.icon",
    descriptionKey: "shack4.description",
  },
];

export default function CustomSwiper() {
  const swiperRef = useRef<SwiperType | null>(null); // ✅ move here

  return (
    <div className="w-full md:px-8">
      <Swiper
        modules={[Parallax, Pagination, A11y]}
        spaceBetween={16}
        breakpoints={{
          0: { slidesPerView: 1.2 },
          768: { slidesPerView: 3, centeredSlides: true },
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        centeredSlides={true}
        speed={600}
        parallax={true}
        loop={true}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} custom-bullet"></span>`;
          },
        }}
        className="w-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div
              onClick={() => swiperRef.current?.slideToLoop(i)}
              className="cursor-pointer"
            >
              <ShackSlide
                image={slide.image}
                nameKey={slide.nameKey}
                titleKey={slide.titleKey}
                iconKey={slide.iconKey}
                descriptionKey={slide.descriptionKey}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom bullet styles */}
      <style jsx global>{`
        .swiper-pagination {
          margin-top: 24px;
          position: relative !important;
        }
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: white;
          border-radius: 50%;
          opacity: 0.4;
          transition: all 0.3s;
          margin: 0 4px;
        }
        .swiper-pagination-bullet-active {
          width: 30px;
          border-radius: 9999px;
          opacity: 0.6;
        }
      `}</style>
    </div>
  );
}
