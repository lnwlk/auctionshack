// CustomSwiper.tsx
import { Swiper, SwiperSlide } from "swiper/react";
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
    descriptionKey: "shack1.description",
  },
  {
    image: "/app/shack_sherlock.png",
    nameKey: "shack2.name",
    titleKey: "shack2.title",
    descriptionKey: "shack2.description",
  },
  {
    image: "/app/shack.png",
    nameKey: "shack3.name",
    titleKey: "shack3.title",
    descriptionKey: "shack3.description",
  },
  {
    image: "/app/shack_sherlock.png",
    nameKey: "shack1.name",
    titleKey: "shack1.title",
    descriptionKey: "shack1.description",
  },
  {
    image: "/app/shack.png",
    nameKey: "shack2.name",
    titleKey: "shack2.title",
    descriptionKey: "shack2.description",
  },
];

export default function CustomSwiper() {
  return (
    <div className="w-full">
      <Swiper
        modules={[Parallax, Pagination, A11y]}
        spaceBetween={16}
        slidesPerView={1.2} // Slightly more than 1
        centeredSlides={true}
        speed={600}
        parallax={true}
        loop={true} // ✅ enables infinite looping
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
            <ShackSlide
              image={slide.image}
              nameKey={slide.nameKey}
              titleKey={slide.titleKey}
              descriptionKey={slide.descriptionKey}
            />
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
