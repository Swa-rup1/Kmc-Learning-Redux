import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];
const defaultData = [200, 400, 600, 800, 1000, 1200, 1400];

const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: defaultData,
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: defaultData,
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const AdminDashboard = () => {
  return <Bar options={options} data={data} />;
};

export default AdminDashboard;
