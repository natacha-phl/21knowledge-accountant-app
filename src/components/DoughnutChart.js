import React, { useRef, useEffect, useState } from "react";
import Chart from "chart.js/auto"; 
import { fetchExpenseRecords, fetchIncome } from "../services/apiService";

const DoughnutChart = () => {
  const canvasRef = useRef(null); 
  const chartRef = useRef(null); 
  const currentYear = new Date().getFullYear();

  const [expenseRecords, setExpenseRecords] = useState();
  const [income, setIncome] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchExpenseRecords().then(data => {
      setExpenseRecords(
        data
          .filter(expense => expense.year == currentYear)
          .reduce((total, expense) => {
            return total + parseFloat(expense.amount);
          }, 0)
      );
    });

    fetchIncome().then(data => {
      setIncome(
        data
          .filter(
            income => new Date(income.income_date).getFullYear() == currentYear
          )
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
        const ctx = canvasRef.current.getContext("2d"); 
        chartRef.current = new Chart(ctx, {
          type: "doughnut",
          data: {
            labels: ["Income", "Expense"],
            datasets: [
              {
                backgroundColor: ["#00e795", "#f6d365"],
                hoverBackgroundColor: ["#0095e2", "#ff7850"],
                data: [income, expenseRecords],
                borderWidth: [0.8, 0.8, 0.8]
              }
            ]
          },
          options: {
            cutoutPercentage: 75,
            legend: {
              position: "bottom",
              display: false,
              labels: {
                boxWidth: 12
              }
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


export default DoughnutChart