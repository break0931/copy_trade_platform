
'use client'
import { useEffect, useRef } from "react";

const TradingViewChart = ({ symbol }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;

    new window.TradingView.widget({
      container_id: chartRef.current.id,
      symbol: symbol,
      interval: "D",
      theme: "light",
      style: "1",
      locale: "en",
    });
  }, [symbol]);

  return <div ref={chartRef} style={{ height: "500px" }} />;
};

export default TradingViewChart;
