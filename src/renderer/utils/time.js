import { toLocale } from '@utils';

export const TIME_UNIT = {
  day: 'day',
  hour: 'hour',
  minute: 'minute',
  second: 'second',
};

const TIME_CONFIG = {
  [TIME_UNIT.day]: {
    includes: [
      TIME_UNIT.day,
      TIME_UNIT.hour,
      TIME_UNIT.minute,
      TIME_UNIT.second,
    ],
    step: 1000 * 60 * 60 * 24,
    template: 'time_template_day',
  },
  [TIME_UNIT.hour]: {
    includes: [TIME_UNIT.hour, TIME_UNIT.minute, TIME_UNIT.second],
    step: 1000 * 60 * 60,
    max: 24,
    template: 'time_template_hour',
  },
  [TIME_UNIT.minute]: {
    includes: [TIME_UNIT.minute, TIME_UNIT.second],
    step: 1000 * 60,
    max: 60,
    template: 'time_template_minute',
  },
  [TIME_UNIT.second]: {
    includes: [TIME_UNIT.second],
    step: 1000,
    max: 60,
    template: 'time_template_second',
  },
};

const getTimeSpan = ({ base, timestamp, maxUnit }) => {
  const span = Math.abs(timestamp - base);
  const isAgo = timestamp < base;

  const res = {
    isAgo,
    [TIME_UNIT.day]: 0,
    [TIME_UNIT.hour]: 0,
    [TIME_UNIT.minute]: 0,
    [TIME_UNIT.second]: 0,
  };

  TIME_CONFIG[maxUnit].includes.forEach((unit, index) => {
    const { step, max } = TIME_CONFIG[unit];
    const value = Math.floor(span / step);
    res[unit] = index ? value % (max || 1) : value;
  });

  return res;
};

export const TIME_SPAN_FORMAT_TYPE = {
  abbr: 'abbr',
  full: 'full',
};

const addPrefix = (num) => {
  return num >= 10 ? num : `0${num}`;
};

export const formatTimeSpan = ({
  base,
  timestamp,
  formatType = TIME_SPAN_FORMAT_TYPE.abbr,
  maxUnit = TIME_UNIT.hour,
}) => {
  const timeSpan = getTimeSpan({ base, timestamp, maxUnit });

  let template = 'time_template_abbr';

  if (formatType === TIME_SPAN_FORMAT_TYPE.full) {
    template = TIME_CONFIG[maxUnit].template;
  }

  return toLocale(template, {
    day: addPrefix(timeSpan[TIME_UNIT.day]),
    hour: addPrefix(timeSpan[TIME_UNIT.hour]),
    minute: addPrefix(timeSpan[TIME_UNIT.minute]),
    second: addPrefix(timeSpan[TIME_UNIT.second]),
  });
};

export const formatDateTime = (timestamp) => {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = addPrefix(date.getHours());
  const minute = addPrefix(date.getMinutes());
  const second = addPrefix(date.getSeconds());

  return `${year}/${month}/${day} ${hour}:${minute}:${second}`;
};
