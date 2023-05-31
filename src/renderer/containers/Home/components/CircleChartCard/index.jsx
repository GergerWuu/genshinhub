import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

import { getStyleVar } from '@renderer/utils';

import style from './index.module.less';

const CircleChartCard = ({ title, max, value, countdown, detail }) => {
  const chartDomRef = useRef();
  const chartRef = useRef();

  useEffect(() => {
    const chart = echarts.init(chartDomRef.current);
    chartRef.current = chart;
  }, []);

  useEffect(() => {
    const done = max <= value;

    chartRef.current.setOption({
      title: [
        {
          text: title,
          textStyle: {
            color: getStyleVar('--color-text-black'),
            fontSize: getStyleVar('--font-size-default'),
            fontWeight: getStyleVar('--font-weight-bold'),
          },
        },
        {
          text: `${value} / ${max}`,
          right: 0,
          textStyle: {
            color: getStyleVar('--color-text-black'),
            fontSize: getStyleVar('--font-size-default'),
          },
        },
        {
          text: detail,
          bottom: 10,
          left: 'center',
          textStyle: {
            color: getStyleVar('--color-text-light'),
            fontSize: getStyleVar('--font-size-sm'),
          },
        },
      ],
      series: {
        silent: true,
        type: 'gauge',
        startAngle: -45,
        endAngle: 225,
        clockwise: false,
        max,
        data: [{ value: max - value }],
        detail: {
          fontSize: getStyleVar(done ? '--font-size-lg' : '--font-size-xl'),
          offsetCenter: [0, 0],
          formatter: () => {
            return countdown;
          },
        },
        axisLine: {
          lineStyle: {
            width: 12,
            color: [
              [
                1,
                {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 0,
                  colorStops: [
                    {
                      offset: 0,
                      color: getStyleVar('--color-blue-400'),
                    },
                    {
                      offset: 0.85,
                      color: getStyleVar('--color-yellow-400'),
                    },
                    {
                      offset: 1,
                      color: getStyleVar('--color-orange-400'),
                    },
                  ],
                },
              ],
            ],
          },
        },
        progress: {
          show: true,
          overlap: false,
          itemStyle: {
            color: getStyleVar('--color-gray-700'),
          },
        },
        pointer: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
      },
    });
  }, [title, max, value, countdown, detail]);

  return <div ref={chartDomRef} className={style.chart} />;
};

export default CircleChartCard;
