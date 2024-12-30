import React, { useRef, useEffect, useState } from "react";
import Chart from "chart.js/auto"; // Importation de la bibliothèque Chart.js
import { fetchIncome } from "../services/apiService";

const BarDataChart = () => {
  const canvasRef = useRef(null); // Crée une référence pour le canvas
  const chartRef = useRef(null); // Référence pour le graphique
  const currentYear = new Date().getFullYear();
  const [incomeJan, setIncomeJan] = useState(0);
  const [incomeFeb, setIncomeFeb] = useState(0);
  const [incomeMar, setIncomeMar] = useState(0);
  const [incomeApr, setIncomeApr] = useState(0);
  const [incomeMay, setIncomeMay] = useState(0);
  const [incomeJun, setIncomeJun] = useState(0);
  const [incomeJul, setIncomeJul] = useState(0);
  const [incomeAug, setIncomeAug] = useState(0);
  const [incomeSep, setIncomeSep] = useState(0);
  const [incomeOct, setIncomeOct] = useState(0);
  const [incomeNov, setIncomeNov] = useState(0);
  const [incomeDec, setIncomeDec] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchIncome().then(data => {
      setIncomeJan(
        data
          .filter(
            income => new Date(income.income_date).getFullYear() == currentYear
          )
          .filter(income => new Date(income.income_date).getMonth() + 1 == 1)
          .reduce((total, income) => {
            return total + parseFloat(income.gross_receipts_sales);
          }, 0)
      );
      setIncomeFeb(
        data
          .filter(
            income => new Date(income.income_date).getFullYear() == currentYear
          )
          .filter(income => new Date(income.income_date).getMonth() + 1 == 2)
          .reduce((total, income) => {
            return total + parseFloat(income.gross_receipts_sales);
          }, 0)
      );
      setIncomeMar(
        data
          .filter(
            income => new Date(income.income_date).getFullYear() == currentYear
          )
          .filter(income => new Date(income.income_date).getMonth() + 1 == 3)
          .reduce((total, income) => {
            return total + parseFloat(income.gross_receipts_sales);
          }, 0)
      );
      setIncomeApr(
        data
          .filter(
            income => new Date(income.income_date).getFullYear() == currentYear
          )
          .filter(income => new Date(income.income_date).getMonth() + 1 == 4)
          .reduce((total, income) => {
            return total + parseFloat(income.gross_receipts_sales);
          }, 0)
      );
      setIncomeMay(
        data
          .filter(
            income => new Date(income.income_date).getFullYear() == currentYear
          )
          .filter(income => new Date(income.income_date).getMonth() + 1 == 5)
          .reduce((total, income) => {
            return total + parseFloat(income.gross_receipts_sales);
          }, 0)
      );
      setIncomeJun(
        data
          .filter(
            income => new Date(income.income_date).getFullYear() == currentYear
          )
          .filter(income => new Date(income.income_date).getMonth() + 1 == 6)
          .reduce((total, income) => {
            return total + parseFloat(income.gross_receipts_sales);
          }, 0)
      );
      setIncomeJul(
        data
          .filter(
            income => new Date(income.income_date).getFullYear() == currentYear
          )
          .filter(income => new Date(income.income_date).getMonth() + 1 == 7)
          .reduce((total, income) => {
            return total + parseFloat(income.gross_receipts_sales);
          }, 0)
      );
      setIncomeAug(
        data
          .filter(
            income => new Date(income.income_date).getFullYear() == currentYear
          )
          .filter(income => new Date(income.income_date).getMonth() + 1 == 8)
          .reduce((total, income) => {
            return total + parseFloat(income.gross_receipts_sales);
          }, 0)
      );
      setIncomeSep(
        data
          .filter(
            income => new Date(income.income_date).getFullYear() == currentYear
          )
          .filter(income => new Date(income.income_date).getMonth() + 1 == 9)
          .reduce((total, income) => {
            return total + parseFloat(income.gross_receipts_sales);
          }, 0)
      );
      setIncomeOct(
        data
          .filter(
            income => new Date(income.income_date).getFullYear() == currentYear
          )
          .filter(income => new Date(income.income_date).getMonth() + 1 == 10)
          .reduce((total, income) => {
            return total + parseFloat(income.gross_receipts_sales);
          }, 0)
      );
      setIncomeNov(
        data
          .filter(
            income => new Date(income.income_date).getFullYear() == currentYear
          )
          .filter(income => new Date(income.income_date).getMonth() + 1 == 11)
          .reduce((total, income) => {
            return total + parseFloat(income.gross_receipts_sales);
          }, 0)
      );
      setIncomeDec(
        data
          .filter(
            income => new Date(income.income_date).getFullYear() == currentYear
          )
          .filter(income => new Date(income.income_date).getMonth() + 1 == 11)
          .reduce((total, income) => {
            return total + parseFloat(income.gross_receipts_sales);
          }, 0)
      );
      setIsLoading(false);
    });
  }, []);

  useEffect(
    () => {
      if (!isLoading) {
        if (chartRef.current) {
          chartRef.current.destroy();
        }
        const ctx = canvasRef.current.getContext("2d"); // Récupère le contexte du canvas

        // Crée le graphique avec Chart.js
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
                data: [
                  incomeJan,
                  incomeFeb,
                  incomeMar,
                  incomeApr,
                  incomeMay,
                  incomeJun,
                  incomeJul,
                  incomeAug,
                  incomeSep,
                  incomeOct,
                  incomeNov,
                  incomeDec
                ],
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
