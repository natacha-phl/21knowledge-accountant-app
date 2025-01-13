import React, { useRef, useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { fetchIncome } from "../services/apiService";

const BarDataChart = () => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);
  const currentYear = new Date().getFullYear();

  const [incomes, setIncomes] = useState(Array(12).fill(0));
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchIncome().then(data => {
      const monthlyIncomes = Array(12).fill(0);
      data.forEach(income => {
        const incomeDate = new Date(income.income_date);
        if (incomeDate.getFullYear() === currentYear) {
          const month = incomeDate.getMonth();
          monthlyIncomes[month] += parseFloat(income.gross_receipts_sales);
          setIncomes(monthlyIncomes);
        }
      });

      setIsLoading(false);
    });
  }, []);

  useEffect(
    () => {
      if (!isLoading) {
        if (chartRef.current) {
          chartRef.current.destroy();
        }
        const ctx = canvasRef.current.getContext("2d");

        chartRef.current = new Chart(ctx, {
          type: "bar",
          data: {
            labels: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Noc",
              "Dec"
            ],
            datasets: [
              {
                label: "Revenue",
                data: incomes,
                borderColor: "#5ecbf6",
                backgroundColor: "#8d44ad",
                hoverBackgroundColor: "#5ecbf6",
                pointRadius: 0,
                fill: false,
                borderWidth: 0
              }
            ]
          },

          options: {
            legend: {
              position: "bottom",
              display: false
            },
            tooltips: {
              displayColors: false,
              intersect: false
            },
            scales: {
              xAxes: [
                {
                  ticks: {
                    max: 100,
                    min: 20,
                    stepSize: 10
                  },
                  gridLines: {
                    display: false,
                    color: "#FFFFFF"
                  },
                  ticks: {
                    display: true,
                    fontFamily: "'Rubik', sans-serif"
                  }
                }
              ],
              yAxes: [
                {
                  gridLines: {
                    color: "#fff",
                    display: false
                  },
                  ticks: {
                    display: false,
                    fontFamily: "'Rubik', sans-serif"
                  }
                }
              ]
            }
          }
        });
        return () => {
          if (chartRef.current) {
            chartRef.current.destroy();
          }
        };
      }
    },
    [isLoading]
  );
  return <canvas id="line-chart" ref={canvasRef} width="400" height="200" />;
};

export default BarDataChart;
