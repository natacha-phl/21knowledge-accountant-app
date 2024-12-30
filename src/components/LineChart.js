import React, { useRef, useEffect, useState } from "react";
import Chart from "chart.js/auto"; // Importation de la bibliothèque Chart.js
import { fetchExpenseRecords, fetchIncome } from "../services/apiService";

const LineChart = () => {
  const canvasRef = useRef(null); // Crée une référence pour le canvas
  const chartRef = useRef(null); // Référence pour le graphique
  const currentYear = new Date().getFullYear();
  const [expenseRecordsJan, setExpenseRecordsJan] = useState(0);
  const [expenseRecordsFeb, setExpenseRecordsFeb] = useState(0);
  const [expenseRecordsMar, setExpenseRecordsMar] = useState(0);
  const [expenseRecordsApr, setExpenseRecordsApr] = useState(0);
  const [expenseRecordsMay, setExpenseRecordsMay] = useState(0);
  const [expenseRecordsJun, setExpenseRecordsJun] = useState(0);
  const [expenseRecordsJul, setExpenseRecordsJul] = useState(0);
  const [expenseRecordsAug, setExpenseRecordsAug] = useState(0);
  const [expenseRecordsSep, setExpenseRecordsSep] = useState(0);
  const [expenseRecordsOct, setExpenseRecordsOct] = useState(0);
  const [expenseRecordsNov, setExpenseRecordsNov] = useState(0);
  const [expenseRecordsDec, setExpenseRecordsDec] = useState(0);
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
    fetchExpenseRecords().then(data => {
      setExpenseRecordsJan(
        data
          .filter(expense => expense.year == currentYear)
          .filter(expense => expense.month == 1)
          .reduce((total, expense) => {
            return total + parseFloat(expense.amount);
          }, 0)
      );
      setExpenseRecordsFeb(
        data
          .filter(expense => expense.year == currentYear)
          .filter(expense => expense.month == 2)
          .reduce((total, expense) => {
            return total + parseFloat(expense.amount);
          }, 0)
      );
      setExpenseRecordsMar(
        data
          .filter(expense => expense.year == currentYear)
          .filter(expense => expense.month == 3)
          .reduce((total, expense) => {
            return total + parseFloat(expense.amount);
          }, 0)
      );
      setExpenseRecordsApr(
        data
          .filter(expense => expense.year == currentYear)
          .filter(expense => expense.month == 4)
          .reduce((total, expense) => {
            return total + parseFloat(expense.amount);
          }, 0)
      );
      setExpenseRecordsMay(
        data
          .filter(expense => expense.year == currentYear)
          .filter(expense => expense.month == 5)
          .reduce((total, expense) => {
            return total + parseFloat(expense.amount);
          }, 0)
      );
      setExpenseRecordsJun(
        data
          .filter(expense => expense.year == currentYear)
          .filter(expense => expense.month == 6)
          .reduce((total, expense) => {
            return total + parseFloat(expense.amount);
          }, 0)
      );
      setExpenseRecordsJul(
        data
          .filter(expense => expense.year == currentYear)
          .filter(expense => expense.month == 7)
          .reduce((total, expense) => {
            return total + parseFloat(expense.amount);
          }, 0)
      );
      setExpenseRecordsAug(
        data
          .filter(expense => expense.year == currentYear)
          .filter(expense => expense.month == 8)
          .reduce((total, expense) => {
            return total + parseFloat(expense.amount);
          }, 0)
      );
      setExpenseRecordsSep(
        data
          .filter(expense => expense.year == currentYear)
          .filter(expense => expense.month == 9)
          .reduce((total, expense) => {
            return total + parseFloat(expense.amount);
          }, 0)
      );
      setExpenseRecordsOct(
        data
          .filter(expense => expense.year == currentYear)
          .filter(expense => expense.month == 10)
          .reduce((total, expense) => {
            return total + parseFloat(expense.amount);
          }, 0)
      );
      setExpenseRecordsNov(
        data
          .filter(expense => expense.year == currentYear)
          .filter(expense => expense.month == 11)
          .reduce((total, expense) => {
            return total + parseFloat(expense.amount);
          }, 0)
      );
      setExpenseRecordsDec(
        data
          .filter(expense => expense.year == currentYear)
          .filter(expense => expense.month == 12)
          .reduce((total, expense) => {
            return total + parseFloat(expense.amount);
          }, 0)
      );
    });

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
          type: "line", // Type de graphique
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
            ], // Les labels de l'axe X
            datasets: [
              {
                label: "Expenses", // Légende du premier jeu de données
                data: [
                  expenseRecordsJan,
                  expenseRecordsFeb,
                  expenseRecordsMar,
                  expenseRecordsApr,
                  expenseRecordsMay,
                  expenseRecordsJun,
                  expenseRecordsJul,
                  expenseRecordsAug,
                  expenseRecordsSep,
                  expenseRecordsOct,
                  expenseRecordsNov,
                  expenseRecordsDec
                ], // Données à afficher
                backgroundColor: "rgba(0, 141, 255, 0.2)", // Couleur de fond de la ligne
                borderColor: "#008cff", // Couleur de la bordure de la ligne
                borderWidth: 2, // Largeur de la bordure
                fill: true, // Remplir l'espace sous la courbe
                tension: 0.4 // Rendre la courbe plus arrondie (valeur entre 0 et 1)
              },
              {
                label: "Income", // Légende du deuxième jeu de données
                data: [incomeJan, incomeFeb, incomeMar, incomeApr, incomeMay, incomeJun, incomeJul, incomeAug, incomeSep, incomeOct, incomeNov, incomeDec], // Données à afficher
                backgroundColor: "rgba(236, 83, 108, 0.2)", // Couleur de fond de la ligne
                borderColor: "#ec536c", // Couleur de la bordure de la ligne
                borderWidth: 2, // Largeur de la bordure
                fill: true, // Remplir l'espace sous la courbe
                tension: 0.4 // Rendre la courbe plus arrondie (valeur entre 0 et 1)
              }
            ]
          },
          options: {
            responsive: true, // Rendre le graphique responsive
            plugins: {
              legend: {
                display: true // Affiche la légende du graphique
              }
            },
            scales: {
              x: {
                beginAtZero: true // Démarre l'axe X à zéro
              },
              y: {
                beginAtZero: true // Démarre l'axe Y à zéro
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
  ); // Le tableau vide [] signifie que ce code ne s'exécutera qu'une seule fois après le rendu initial

  return <canvas id="line-chart" ref={canvasRef} width="400" height="200" />;
};

export default LineChart;
