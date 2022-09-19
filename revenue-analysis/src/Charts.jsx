import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

function Charts({charData, period}) {
    console.log(charData)

    // const options = {
    //     responsive: true,
    //     plugins: {
    //       legend: {
    //         position: 'top', // as const
    //       },
    //       title: {
    //         display: true,
    //         text: 'Chart.js Line Chart',
    //       },
    //     },
    //   };
  return (
    <div><Line
    data={
        labels: 
    }
    
    /></div>
  )
}

export default Charts