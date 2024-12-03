import { Line, PolarArea } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const SalesChart = () => {
  // Sales data for the Chart
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"], // Months as x-axis labels
    datasets: [
      {
        label: "Sales ($)",
        data: [150, 250, 400, 350, 500], // Sales data points
        borderColor: "rgb(75, 192, 192)", // Line color
        backgroundColor: "rgba(75, 192, 192, 0.2)", // Area under the line
        borderWidth: 1,
        tension: 0.1, // Smooth the line
        fill: true, // Fill area under the line
      },
    ],
  };

  // Chart options (customizations for axes, tooltips, etc.)
  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true, // Start y-axis from 0
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mt-5">
      <h3 className="text-xl font-bold mb-4">Sales Overview</h3>
      <div className="h-auto w-5/6">
        {/* Render the chart with data and options */}
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default SalesChart;
