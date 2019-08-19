function cp(a, b) {
	if (a[1] === undefined) {
		return 1;
	} else if (b[1] === undefined) {
		return -1;
	} else {
		return a[1] - b[1];
	}
}

function dijkstra(chart, start = 0) {
	var short = [];
	short[start] = 0;
	var waitlist = [];
	var i;
	var count = chart.length;

	for(i = 0; i < count; i++) {
		if (i !== start) {
			insertHeap(waitlist, [i, chart[start][i]], cp);
		}
	}
	console.log(waitlist);
}