import React, { useEffect, useState } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import apiService from '../../services/apiService';
import graphicData from '../../db/graphicData';
import './LineChart.css'; // Importa los estilos específicos para el LineChart


const LineChart = ({ title, width, height }) => {
    const [chartOptions, setChartOptions] = useState({});
  
    useEffect(() => {
      const options = {
        chart: {
          type: 'line',
          width: width || '400',
          height: height || '300'
        },
        title: {
          text: title,
        },
        xAxis: {
          categories: graphicData.map(dataPoint => dataPoint.x), // Configuración de las categorías del eje X
        },
        yAxis: {
          title: {
            text: 'Cantidad',
          },
        },
        series: [{
          name: 'Cantidad',
          data: graphicData.map(dataPoint => dataPoint.y), // Configuración de los valores en el eje Y
        }],
      };
  
      setChartOptions(options);
    }, [title, width, height]);
  
    return (
      <div className="custom-chart">
        <h2>{title}</h2>
        <HighchartsReact    
            highcharts={Highcharts} 
            options={chartOptions} 
            containerProps={{ style: { width: `${width}px`, height: `${height}px` } }}
        />
      </div>
    );
  };
  
export default LineChart;
