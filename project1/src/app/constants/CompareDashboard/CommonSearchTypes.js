export const DATA_SOURCE = [{
  text: 'Traffic',
  value: 'traffic',
}, {
  text: 'Flow',
  value: 'flow',
}, {
  text: 'Packet',
  value: 'packet',
}];

export const INTERVALS_TYPES = [{
  text: '1Day',
  value: '1d',
  num: 1,
  unit: 'day',
  agg: '5m'
}, {
  text: '1Week',
  value: '1w',
  num: 1,
  unit: 'week',
  agg: '30m'
}, {
  text: '1Month',
  value: '1m',
  num: 1,
  unit: 'month',
  agg: '2h'
}, {
  text: '1Year',
  value: '1y',
  num: 1,
  unit: 'year',
  agg: '1d'
}];

export const AVG = [{
  text: 'Avg',
  value: 'avg',
}, {
  text: 'Max',
  value: 'max',
}];

export const TOP_VALUE = 100;

export const COMPARE_METHOD = [{
  text: 'Absolute',
  value: 'absolute',
}, {
  text: 'Relative',
  value: 'relative',
}];
