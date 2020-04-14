export const SETSAVES = [{
  No: 1,
  savename: 'testsave1',
  perspective: 'Internal',
  added: '2016/1/1 13:59:00',
  selectedItemList: {
    'aAR': ['cr2.mx480.sgeq1'],
    'aPoP': ['US East'],
    'aESM': ['N1160', 'KRBS0328'],
    'bPoP': ['TH', 'JP', 'TW'],
    'bLine': ['Internet Access', 'IP Transit']
  },
  separatedItemList: {
    'aAR': true,
    'aPoP': false,
    'aESM': true,
    'aLine': false,
    'aCarrier': true,
    'aIF': false,
    'aIP': false,
    'bAR': false,
    'bPoP': true,
    'bESM': false,
    'bLine': false,
    'bCarrier': false,
    'bIF': false,
    'bIP': false,
  },
  checkedItemList: {
    'Direction': 'A->B',
    'Protocol': 'TCP',
    'TCP Flag': 'ALL',
    'Packet Size': '511kb',
    'Data': 'Traffic',
    'Aggregation': 'Max',
    'Interval': '1min',
    'Top': 'by Last'
  },
  selectedPeriod: {
    start: '2016/1/1 15:00:00',
    end: '2016/1/1 17:30:00'
  },
  top: 5
}, {
  No: 2,
  savename: 'testsave2',
  perspective: 'Internal',
  added: '2016/2/20 09:23:00',
  selectedItemList: {
    'aPoP': ['DE'],
    'aESM': ['A010617'],
    'bIF': ['HQWAN']
  },
  separatedItemList: {
    'aAR': false,
    'aPoP': false,
    'aESM': true,
    'aLine': true,
    'aCarrier': true,
    'aIF': false,
    'aIP': false,
    'bAR': false,
    'bPoP': false,
    'bESM': false,
    'bLine': false,
    'bCarrier': true,
    'bIF': false,
    'bIP': true,
  },
  checkedItemList: {
    'Direction': 'B->A',
    'Protocol': 'ALL',
    'Packet Size': '63kb',
    'Data': 'Flow',
    'Aggregation': 'Avg',
    'Interval': '5min',
    'Top': 'by Last'
  },
  selectedPeriod: {
    start: '2016/2/21 08:00:00',
    end: '2016/2/1 11:10:00'
  },
  top: undefined
}, {
  No: 3,
  savename: 'testsave3',
  perspective: 'Internal',
  added: '2016/4/3 08:02:00',
  selectedItemList: {},
  separatedItemList: {
    'aAR': true,
    'aPoP': true,
    'aESM': true,
    'aLine': false,
    'aCarrier': true,
    'aIF': false,
    'aIP': false,
    'bAR': true,
    'bPoP': true,
    'bESM': false,
    'bLine': true,
    'bCarrier': false,
    'bIF': true,
    'bIP': false,
  },
  checkedItemList: {
    'Direction': 'A->B',
    'Protocol': 'TCP',
    'TCP Flag': 'ACK',
    'Packet Size': 'ALL',
    'Data': 'Packet',
    'Aggregation': 'Max',
    'Interval': '30min',
    'Top': 'Avg'
  },
  selectedPeriod: {
    start: '2016/8/2 18:40:00',
    end: '2016/8/5 09:30:00'
  },
  top: 10
}, {
  No: 4,
  savename: 'testsave4',
  perspective: 'Internal',
  added: '2016/5/15 10:25:00',
  selectedItemList: {
    'aLine': ['Internet Access']
  },
  separatedItemList: {
    'aAR': false,
    'aPoP': false,
    'aESM': false,
    'aLine': false,
    'aCarrier': false,
    'aIF': false,
    'aIP': false,
    'bAR': false,
    'bPoP': false,
    'bESM': false,
    'bLine': false,
    'bCarrier': false,
    'bIF': false,
    'bIP': false,
  },
  checkedItemList: {
    'Direction': 'A->B',
    'Protocol': 'ALL',
    'Packet Size': '>=1024kb',
    'Data': 'Traffic',
    'Aggregation': 'Avg',
    'Interval': '120min',
    'Top': 'by Last'
  },
  selectedPeriod: {
    start: '2016/5/20 06:35:00',
    end: '2016/5/31 19:55:00'
  },
  top: undefined
}, {
  No: 5,
  savename: 'testsave5',
  perspective: 'Internal',
  added: '2016/9/1 20:48:00',
  selectedItemList: {
    'aAR': ['ar1.s4810.useq5', 'cr2.mx480.sgeq1'],
    'aPoP': ['KR'],
    'aESM': ['N1160', 'N5180'],
    'aLine': ['STM-64c'],
    'aCarrier': ['Teliasonera', 'AMS-IX', 'DE-CIX'],
    'aIF': ['EMEA Juniper 3200'],
    'aIP': ['168.99.105.3'],
    'bPoP': ['HK'],
  },
  separatedItemList: {
    'aAR': true,
    'aPoP': false,
    'aESM': true,
    'aLine': false,
    'aCarrier': true,
    'aIF': false,
    'aIP': false,
    'bAR': false,
    'bPoP': true,
    'bESM': false,
    'bLine': false,
    'bCarrier': false,
    'bIF': false,
    'bIP': false,
  },
  checkedItemList: {
    'Direction': 'A->B',
    'Protocol': 'TCP',
    'TCP Flag': 'ALL',
    'Packet Size': '511kb',
    'Data': 'traffic',
    'Aggregation': 'Max',
    'Interval': '1min',
    'Top': 'by Last'
  },
  selectedPeriod: {
    start: '2016/1/1 15:00:00',
    end: '2016/1/1 17:30:00'
  },
  top: 5
}];