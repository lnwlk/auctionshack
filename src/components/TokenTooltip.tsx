import { TooltipProps } from "recharts";
import { TFunction } from "i18next";

type DataItem = { name: string; value: number };

type TokenTooltipProps = {
  active?: boolean;
  payload?: Array<{ payload: DataItem }>;
  t: TFunction;
};

const TokenTooltip = (props: TokenTooltipProps) => {
  const { active, payload, t } = props;
  if (active && payload && payload.length) {
    const { name, value } = payload[0].payload;
    return (
      <div
        style={{
          backgroundColor: "#fff",
          padding: "8px 12px",
          borderRadius: 4,
          color: "#000",
          textAlign: "center",
          fontSize: "1.2rem",
          pointerEvents: "none",
        }}
      >
        <div>{t(name)}</div>
        <div>{value}%</div>
      </div>
    );
  }
  return null;
};

export default TokenTooltip;
