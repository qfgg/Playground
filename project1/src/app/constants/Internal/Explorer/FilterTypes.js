export const INFILTER_TYPES = [{
  name: 'A',
  list: [{
  //   name: 'Router'
  // }, {
    name: 'IDC'
  }, {
    name: 'ESM'
  }],
  advancedList: [{
    name: 'Prefix'
  }]
}, {
  name: 'B',
  list: [{
  //   name: 'Router'
  // }, {
    name: 'IDC'
  }, {
    name: 'ESM'
  }],
  advancedList: [{
    name: 'Prefix'
  }]
}, {
  name: 'Direction',
  list: [{
    text: 'A->B',
    value: 'ab'
  }, {
    text: 'B->A',
    value: 'ba'
  }]
}, {
  name: 'Protocol',
  list: [{
    text: 'ALL',
    value: 'all'
  }, {
    text: 'TCP',
    value: 'tcp'
  }, {
    text: 'UDP',
    value: 'udp'
  }, {
    text: 'ICMP',
    value: 'icmp'
  }]
}, {
  name: 'TCP Flag',
  list: [{
    text: 'ALL',
    value: 'all'
  }, {
    text: 'SYN',
    value: 'syn'
  }, {
    text: 'SYN+ACK',
    value: 'synack'
  }, {
    text: 'ACK',
    value: 'ack'
  }, {
    text: 'RST',
    value: 'rst'
  }, {
    text: 'FIN',
    value: 'fin'
  }]
}, {
  name: 'Packet Size',
  list: [{
    text: 'ALL',
    value: 'all'
  }, {
    text: '64kb',
    value: '64'
  }, {
    text: '128kb',
    value: '128'
  }, {
    text: '256kb',
    value: '256'
  }, {
    text: '512kb',
    value: '512'
  }, {
    text: '1024kb',
    value: '1024'
  }, {
    text: '>=1024kb',
    value: '1025'
  }]
}, {
  name: 'Data',
  list: [{
    text: 'Traffic',
    value: 'traffic'
  }, {
    text: 'Flow',
    value: 'flow'
  }, {
    text: 'Packet',
    value: 'packet'
  }]
}, {
  name: 'Period',
  list: {
    hour: [{
      text: 'Last 1 hour',
      value: 1
    }, {
      text: 'Last 6 hours',
      value: 6
    }, {
      text: 'Last 12 hours',
      value: 12
    }, {
      text: 'Last 24 hours',
      value: 24
    }],
    day: [{
      text: 'Today',
      value: 0
    }, {
      text: 'Yesterday',
      value: 1
    }, {
      text: 'Last 7 days',
      value: 7
    }],
    week: [{
      text: 'Last Week (Monday - Sunday)',
      value: 7
    }, {
      text: 'Last Week (Monday - Friday)',
      value: 5
    }, {
      text: 'This Week',
      value: 0
    }],
    month: [{
      text: 'This Month',
      value: 0
    }],
    year: [{
      text: 'This Year',
      value: 0
    }, {
      text: 'Last Year',
      value: 1
    }]
  }
}, {
  name: 'Aggregation',
  list: [{
    text: 'Avg',
    value: 'avg'
  }, {
    text: 'Max',
    value: 'max'
  }]
}, {
  name: 'Interval',
  list: [{
    text: '1Min',
    value: '1m'
  }, {
    text: '5Mins',
    value: '5m'
  }, {
    text: '30Mins',
    value: '30m'
  }, {
    text: '2Hours',
    value: '2h'
  }, {
    text: '1Day',
    value: '1d'
  }]
}, {
  name: 'Top',
  list: [{
    text: 'by last',
    value: 'bylast'
  }, {
    text: 'Avg(Yesterday)',
    value: 'yesterday'
  }]
}];
