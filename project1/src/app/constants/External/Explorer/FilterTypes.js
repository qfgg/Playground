export const EXFILTER_TYPES = [{
  name: 'Server',
  list: [{
    name: 'ASN'
  }, {
    name: 'Router'
  }, {
    name: 'PoP'
  }, {
    name: 'Country'
  }, {
    name: 'ESM'
  }],
  advancedList: [{
    name: 'Line'
  }, {
    name: 'Carrier'
  }, {
    name: 'IF'
  }, {
    name: 'Prefix'
  }]
}, {
  name: 'User',
  list: [{
    name: 'ASN'
  }, {
    name: 'Country'
  }],
  advancedList: [{
    name: 'Prefix'
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

export const VALUE_TEXT_MAP = {
  all: 'ALL',
  tcp: 'TCP',
  udp: 'UDP',
  icmp: 'ICMP',
  syn: 'SYN',
  synack: 'SYN+ACK',
  ack: 'ACK',
  rst: 'RST',
  fin: 'FIN',
  64: '64kb',
  128: '128kb',
  256: '256kb',
  512: '512kb',
  1024: '1024kb',
  1025: '>=1024kb',
  traffic: 'Traffic',
  flow: 'Flow',
  packet: 'Packet',
  avg: 'Avg',
  max: 'Max',
  '1m': '1Min',
  '5m': '5Mins',
  '30m': '30Mins',
  '2h': '2Hours',
  '1d': '1Day',
};

export const A_TOP_LIST = [{
  text: '10',
  value: 10
}, {
  text: '20',
  value: 20
}, {
  text: '50',
  value: 50
}, {
  text: '100',
  value: 100
}, {
  text: '200',
  value: 200
}, {
  text: '500',
  value: 500
}];

export const A_STAT_LIST = [{
  text: 'Server IP Address',
  value: 'server_ip'
}, {
  text: 'User IP Address',
  value: 'user_ip'
}, {
  text: 'Server AS',
  value: 'server_asn'
}, {
  text: 'User AS',
  value: 'user_asn'
}, {
  text: 'Server Port',
  value: 'server_port'
}, {
  text: 'User Port',
  value: 'user_port'
}];

export const A_ORDER_LIST = [{
  text: 'flows',
  value: 'flows'
}, {
  text: 'packets',
  value: 'packets'
}, {
  text: 'bytes',
  value: 'bytes'
}, {
  text: 'pps',
  value: 'pps'
}, {
  text: 'bps',
  value: 'bps'
}, {
  text: 'bpp',
  value: 'bpp'
}];

export const ANA_FILED_MAP = {
  server_asn: 'serverAsn',
  user_asn: 'userAsn',
  server_ip: 'serverIp',
  user_ip: 'userIp',
  server_port: 'serverPort',
  user_port: 'userPort'
};
