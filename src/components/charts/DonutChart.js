import React, { useEffect, useRef, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import './DonutChart.css';

const DonutChart = ({ title, width, height, dataUrl ,source}) => {
  const chartRef = useRef(null);
  const SOURCES = {
    GTI :"gti",
    COMSITELCO : "comsistelco",
    RAW : "raw"
  }

  useEffect(() => {
    const allColors = ['#FF5733', '#FFC300', '#36A2EB', '#6A1B9A', '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#8E5EA2', '#3E95CD', '#8A2BE2', '#5A9AFC', '#F4D03F', '#00CED1', '#20B2AA'];

    // Tomar cuatro colores aleatorios de la lista
    let colors = [];
    while (colors.length < 4) {
      const randomIndex = Math.floor(Math.random() * allColors.length);
      const randomColor = allColors[randomIndex];
      if (!colors.includes(randomColor)) {
        colors.push(randomColor);
      }
    }
    const options = {
      chart: {
        type: 'pie',
        title: title,
        width: width,
        height: width,
        backgroundColor: '#1f2128',
      },
      plotOptions: {
        pie: {
          
          innerSize: '50%',
          allowPointSelect: true,
          cursor: 'pointer',
          colors: colors,
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          },
        },
      },
      series: [
        {
          name: 'Data',
          data: [],
          showInLegend: true
        },
      ],
    };

    if (false) {
      fetch(dataUrl)
        .then(response => response.json())
        .then(data => {
          options.series[0].data = data;
          chartRef.current.chart.update(options);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    } else {
      let exampleData = [

      ]
      switch (source) {
        case SOURCES.GTI:
          exampleData = [
            { name: 'Incidente EMCALI', y: 2689 },
            { name: 'Requerimiento EMCALI', y: 950 }
          ];
          break;
        case SOURCES.COMSITELCO:
          exampleData = [
            { name: 'Incidente EMCALI', y: 1821 },
            { name: 'Requerimiento EMCALI', y: 317 }
          ];
          break;
        case SOURCES.RAW:
          exampleData = [
            { name: 'Resuelto', y: 2092 },
            { name: 'Abierto', y: 46 }
          ];
          break;
      
        default:
          break;
      }
      
      options.series[0].data = exampleData;
      chartRef.current.chart.update(options);
    }
  }, [dataUrl, title, width]);

  return (
    <div className="custom-chart">
      <h2>{title}</h2>
      <HighchartsReact
        highcharts={Highcharts}
        options={{
          chart: {
            type: 'pie',
          },
          title: {
            text: '',
          },
          series: [
            {
              name: 'Data',
              data: [],
            },
          ],
        }}
        containerProps={{ style: { width: `350px` } }}
        ref={chartRef}
      />
    </div>
  );
};

export default DonutChart;
