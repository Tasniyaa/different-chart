import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement
  );
  

export const LineChart = () =>{
    var labels = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
      ];
    
      const data = {
        labels: labels,
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3, 6],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    };
      var options ={
          maintainAspectRatio: false,
          scales: {
              y:{
                  beginArZero: true
              }
          },
          legend: {
              labels: {
                  fontSize: 26
              }
          }
      }
    return (
        <div>
          <h1 className="my-5">LineChart</h1>
          <div>
            <Line
                data={data}
                height={400}
                options={options}
            />
          </div>
        </div>
      )
}