import React, { useRef, useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { fetchExpenseRecords, fetchIncome } from "../services/apiService";

const LineChart = () => {
  const canvasRef = useRef(null); 
  const chartRef = useRef(null); 
  const currentYear = new Date().getFullYear();
  const [incomes, setIncomes] = useState(Array(12).fill(0));
  const [expenses, setExpenses] = useState(Array(12).fill(0));
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchExpenseRecords().then(data => {
      const monthlyExpenses = Array(12).fill(0);
      data.filter(expense => expense.year == currentYear).forEach(expense => {
        const month = expense.getMonth();
        monthlyExpenses[month] += parseFloat(expense.amount);
        setExpenses(monthlyExpenses);
      });
    });

    fetchIncome().then(data => {
      const monthlyIncomes = Array(12).fill(0)
      data.filter(income => new Date(income.income_date).getFullYear === currentYear).forEach(income => {
        const month = new Date(income.income_date).getMonth();
        monthlyIncomes[month] += parseFloat(income.gross_receipts_sales)
        setIncomes(monthlyIncomes)
      }) 
    
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
          type: "line", 
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
              "Sept",
              "Oct",
              "Nov,",
              "Dec"
            ],
            datasets: [
              {
                label: "Expenses",
                data: expenses,
                backgroundColor: "rgba(0, 141, 255, 0.2)", 
                borderColor: "#008cff", 
                borderWidth: 2, 
                fill: true, 
                tension: 0.4 
              },
              {
                label: "Income",
                data: incomes, 
                backgroundColor: "rgba(236, 83, 108, 0.2)", 
                borderColor: "#ec536c", 
                borderWidth: 2, 
                fill: true, 
                tension: 0.4 
              }
            ]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                display: true 
              }
            },
            scales: {
              x: {
                beginAtZero: true 
              },
              y: {
                beginAtZero: true 
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

export default LineChart;
