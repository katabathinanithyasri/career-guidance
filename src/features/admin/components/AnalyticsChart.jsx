import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const AnalyticsChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        label: "Users Growth",
        data: [200, 400, 800, 1200],
      },
    ],
  };

  return (
    <div className="bg-white p-6 shadow rounded-xl">
      <Line data={data} />
    </div>
  );
};

export default AnalyticsChart;