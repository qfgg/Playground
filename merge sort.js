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
  if (start === end) {
    return;
  }
  var mid = Math.ceil((end + start) / 2);
  sort(arr, start, mid - 1);
  sort(arr, mid, end);
  merge(arr, start, mid, end);
}

function mergeSort(input) {
  var output = input.slice();
  sort(output, 0, output.length - 1);
  return output;
}
