function merge(arr, s, m, e) {
  var i = s;
  var j = m;
  while(i < j && j <= e) {
    if (arr[j] < arr[i]) {
      var tmp = arr[j];
      for(var k = j; k > i; k--) {
        arr[k] = arr[k - 1];
      }
      arr[i] = tmp;
      j++;
    }
    i++;
  }
}

function sort(arr, start, end) {
  if (start < end) {
    var mid = Math.ceil((end + start) / 2);
    sort(arr, start, mid - 1);
    sort(arr, mid, end);
    merge(arr, start, mid, end);
  }
}

function mergeo(arr, s, m, e) {
  var l = [];
  var r = [];
  var tmp = [];
  for (var i = 0; i < m - s; i++) {
    l[i] = arr[i + s];
  }
  for (var j = 0; j <= e - m; j++) {
    r[j] = arr[j + m];
  }
  i = 0;
  j = 0;
  for (var k = 0; k <= e - s; k++) {
    if ((l[i] !== undefined && r[j] === undefined) || l[i] < r[j]) {
      arr[k + s] = l[i];
      i++;
    } else if ((l[i] === undefined && r[j] !== undefined) || l[i] >= r[j]) {
      arr[k + s] = r[j];
      j++;
    }
  }
}

function sorto(arr, start, end) {
  if (start < end) {
    var mid = Math.ceil((end + start) / 2);
    sorto(arr, start, mid - 1);
    sorto(arr, mid, end);
    mergeo(arr, start, mid, end);
  }
}

function mergeSorto(input) {
  sorto(input, 0, input.length - 1);
}

function mergeSort(input) {
  sort(input, 0, input.length - 1);
}
