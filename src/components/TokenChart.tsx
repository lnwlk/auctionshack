import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { useTranslation } from "react-i18next";
import TokenTooltip from "./TokenTooltip";

const data = [
  { name: "section1", value: 15, color: "#00d256" },
  { name: "section2", value: 35, color: "#80dbad" },
  { name: "section3", value: 25, color: "#bbe2bb" },
  { name: "section4", value: 25, color: "#a8e8ef" },
];

export default function TokenChart() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { t } = useTranslation("token");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const chartSize = isMobile ? 450 : 600;

  return (
    <div
      style={{
        position: "relative",
        width: chartSize,
        height: chartSize,
        margin: "0 auto",
      }}
    >
      <PieChart width={chartSize} height={chartSize}>
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={isMobile ? 140 : 190}
          outerRadius={isMobile ? 200 : 260}
          startAngle={90}
          endAngle={450}
          paddingAngle={0}
          onMouseLeave={() => setActiveIndex(null)}
          onMouseEnter={(_, index) => setActiveIndex(index)}
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={entry.color}
              fillOpacity={activeIndex === index ? 0.8 : 0.6}
              stroke="none"
              cursor="pointer"
            />
          ))}
        </Pie>
        <Tooltip content={<TokenTooltip t={t} />} />
      </PieChart>

      {/* Center headline overlay */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "1.5rem",
          pointerEvents: "none",
          userSelect: "none",
          color: "#fff",
          textAlign: "center",
          width: "100%",
        }}
      >
        {t("chartHeadline")}
      </div>
    </div>
  );
}
