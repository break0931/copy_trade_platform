import React from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';

const LineChartWithDynamicAreaColor = ({ style}) => {
  const data = [
    { name: 'Point 1', value: -10 },
    { name: 'Point 2', value: -20 },
    { name: 'Point 3', value: 15 },
    { name: 'Point 4', value: 40 },
    { name: 'Point 5', value: 50 },
    { name: 'Point 1', value: 40 },
    { name: 'Point 2', value: 20 },
    { name: 'Point 3', value: 35 },
    { name: 'Point 1', value: 40 },
    { name: 'Point 2', value: 60 },
    { name: 'Point 3', value: 75 },
    { name: 'Point 3', value: 75 },
  ];

  const positiveData = [];
  const negativeData = [];

  for (let i = 0; i < data.length - 1; i++) {
    const current = data[i].value;
    const next = data[i + 1].value;

    // Add the current value to the appropriate dataset
    positiveData.push(current >= 0 ? current : null);
    negativeData.push(current < 0 ? current : null);

    // Check for a sign change between current and next values
    if ((current >= 0 && next < 0) || (current < 0 && next >= 0)) {
      const zeroPoint = (current + next) / 2; // Interpolate to find the zero crossing
      positiveData.push(zeroPoint);
      negativeData.push(zeroPoint);
    }
  }

  // Add the last value
  positiveData.push(data[data.length - 1].value >= 0 ? data[data.length - 1].value : null);
  negativeData.push(data[data.length - 1].value < 0 ? data[data.length - 1].value : null);


  const option = {
    grid: {
      top: 0,      // Adjust space above the chart
      bottom: 0,   // Adjust space below the chart
      left: 10,     // Adjust space on the left
      right: 10,    // Adjust space on the right
      containLabel: true, // Ensures labels fit inside the grid
    },
    tooltip: {
      trigger: 'axis',
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: data.map((point) => point.name),
      axisLabel: {
        show: false, // Hide x-axis labels
      },
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        show: false, // Hide x-axis labels
      },
    },
    series: [
      {
        name: 'Positive Area',
        type: 'line',
        data: positiveData,
        smooth: true,
        lineStyle: {
          color: 'rgb(129, 255, 192)',
          width: 2,
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgb(129, 255, 192)' }, // Start gradient (red)
            { offset: 1, color: 'rgba(255, 255, 255, 0)' },   // End gradient (transparent)
          ]),
        },
        itemStyle: {
          color: 'rgb(129, 255, 192)',
        },
      },
      {
        name: 'Negative Area',
        type: 'line',
        data: negativeData,
        smooth: true,
        lineStyle: {
          color: 'red',
          width: 2,
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 1, color: 'rgba(255, 0, 0, 0.3)' }, // Start gradient (red)
            { offset: 0, color: 'rgba(255, 0, 0, 0)' },   // End gradient (transparent)
          ]), // Red area
        },
        itemStyle: {
          color: 'red',
        },
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: '100%', width: '100%',margin:0,padding:0}} />;
};

export default LineChartWithDynamicAreaColor;
