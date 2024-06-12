'use client'

import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

export default function CardLineChart() {
  const chartRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const config = {
      type: "line",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        datasets: [
          {
            label: new Date().getFullYear(),
            backgroundColor: "#D2B183",
            borderColor: "#D2B183",
            data: [65, 78, 66, 44, 56, 67, 75, 90, 89, 77, 97],
            fill: false,
          },
          {
            label: new Date().getFullYear() - 1,
            fill: false,
            backgroundColor: "#4c51bf",
            borderColor: "#4c51bf",
            data: [40, 68, 86, 74, 56, 60, 87, 85, 90, 94, 90 ],
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Sales Charts",
          fontColor: "white",
        },
        legend: {
          labels: {
            fontColor: "white",
          },
          align: "end",
          position: "bottom",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        scales: {
          x: {
            ticks: {
              fontColor: "rgba(255,255,255,.7)",
            },
            display: true,
            title: {
              display: false,
              text: "Month",
              color: "white",
            },
            grid: {
              display: false,
              borderDash: [2],
              borderDashOffset: [2],
              color: "rgba(33, 37, 41, 0.3)",
              zeroLineColor: "rgba(0, 0, 0, 0)",
              zeroLineBorderDash: [2],
              zeroLineBorderDashOffset: [2],
            },
          },
          y: {
            ticks: {
              fontColor: "rgba(255,255,255,.7)",
            },
            display: true,
            title: {
              display: false,
              text: "Value",
              color: "white",
            },
            grid: {
              borderDash: [3],
              borderDashOffset: [3],
              drawBorder: false,
              color: "rgba(33, 37, 41, 0.2)",
              zeroLineColor: "rgba(33, 37, 41, 0.15)",
              zeroLineBorderDash: [2],
              zeroLineBorderDashOffset: [2],
            },
          },
        },
      },
    };

    const ctx = canvasRef.current.getContext("2d");

    // Destroy the previous chart instance if it exists
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    // Create a new chart instance and save the reference
    chartRef.current = new Chart(ctx, config);

    // Cleanup the chart instance when the component is unmounted
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
      <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full max-w-full flex-grow flex-1">
            <h6 className="uppercase text-blueGray-100 mb-1 text-xs font-semibold">
              Overview
            </h6>
            <h2 className="text-gray-900 text-xl font-semibold">Sales value</h2>
          </div>
        </div>
      </div>
      <div className="p-4 flex-auto">
        {/* Chart */}
        <div className="relative h-[320px]"> 
          <canvas id="line-chart" ref={canvasRef}></canvas>
        </div>
      </div>
    </div>
  );
}
