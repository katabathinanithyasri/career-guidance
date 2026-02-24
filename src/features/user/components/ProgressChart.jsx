import { Bar } from "react-chartjs-2";

const ProgressChart = () => {
  const data = {
    labels: ["Skills", "Assessments", "Sessions"],
    datasets: [
      {
        label: "Progress",
        data: [80, 65, 40],
      },
    ],
  };

  return <Bar data={data} />;
};

export default ProgressChart;