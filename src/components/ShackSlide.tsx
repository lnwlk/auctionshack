import { useTranslation } from "react-i18next";

type ShackSlideProps = {
  image: string;
  nameKey: string;
  titleKey: string;
  descriptionKey: string;
};

export default function ShackSlide({
  image,
  nameKey,
  titleKey,
  descriptionKey,
}: ShackSlideProps) {
  const { t } = useTranslation(["home"]);

  return (
    <div className="glass-effect mx-auto flex aspect-3/4 w-full flex-col items-center justify-end overflow-hidden rounded-2xl bg-white p-4 shadow-lg">
      <img className="absolute top-0 w-full" src={image} alt={t(nameKey)} />
      <div className="glass-effect absolute top-4 left-4 rounded-full px-2 py-1 text-sm">
        <p>{t(nameKey)}</p>
      </div>
      <div
        className="glass-effect parallax-content mx-8 flex w-full items-center gap-4 rounded-2xl p-4"
        data-swiper-parallax-y="-40"
      >
        <div className="glass-effect h-16 w-16 flex-none rounded-2xl p-2">
          <img src="/brand/app-icon.png" alt="AuctionShack Logo" />
        </div>
        <div>
          <p className="text-base leading-snug font-bold">{t(titleKey)}</p>
          <p className="text-base leading-snug">{t(descriptionKey)}</p>
        </div>
      </div>
    </div>
  );
}
