import "@/i18n";
import { useTranslation } from "react-i18next";
import Headline from "./Headline";
import InfiniteSlider from "./InfiniteSlider";

export default function ShackHelperSection() {
  const { t } = useTranslation(["home"]);

  return (
    <div className="flex w-screen flex-col items-center py-8 md:py-16">
      <div className="max-w-4xl p-8">
        <Headline
          namespace="home"
          headingKey="shackHelperHeadline"
          headingSecondKey="shackHelperHeadlineSecond"
          paragraphKey="shackHelperParagraph"
        />
      </div>

      <InfiniteSlider />
    </div>
  );
}
