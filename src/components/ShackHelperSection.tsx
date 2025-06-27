import "@/i18n";
import { useTranslation } from "react-i18next";
import Headline from "./Headline";
import InfiniteSlider from "./InfiniteSlider";

export default function ShackHelperSection() {
  const { t } = useTranslation(["home"]);

  return (
    <div className="w-screen">
      <div className="p-8">
        <Headline
          namespace="home"
          headingKey="shackHelperHeadline"
          headingSecondKey="shackHelperHeadlineSecond"
          paragraphKey="shackHelperParagraph"
        />
      </div>
      <div className="p-4">
        <InfiniteSlider />
      </div>
    </div>
  );
}
