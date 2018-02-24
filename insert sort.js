function insertSort(input) {
  var output = input.slice();
  for (var i = 1, len = output.length; i < len; i++) {
    var tmp = output[i];
    var j = i - 1;
    while (j >= 0 && output[j] > tmp) {
      output[j + 1] = output[j];
      j--;
    }
    output[j + 1] = tmp;
  }
  return output;
}
