function dijkstra(chart, start = 0) {
	var short = [];
	short[start] = 0;
	var waitlist = [];
	var i;
	var count = chart.length;

	for(i = 0; i < count; i++) {
		if (i !== start) {
			waitlist[i] = chart[start][i];
		}
	}
}

var chart = [
	[0, 4, undefined, 2, undefined],
	[4, 0, 4, 1, undefined],
	[undefined, 4, 0, 1, 3],
	[2, 1, 1, 0, 7],
	[undefined, undefined, 3, 7, 0]
];

dijkstra(chart);