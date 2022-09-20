import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';

function Charts({ charData, period }) {
  console.log(charData);
  console.log(period)

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

   const options = {
    responsive: true,
    scales: {
        yAxes: [{
            display: true,
            scaleLabel: {
                display: true,
                labelString: '$ Value'
            }
        }]
    }
  };

  const data = {
    labels: period, 
    datasets: [
      {
        label: "Chart",
        data: charData,
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      }
    ]
  };

  return (
    <div>
      <Line data={data} />
    </div>
  );
}

export default Charts;
