/**
* chart utilities, functions provided:
* 1. chartFetcher: request chart data
* 2. chartGenerator: convert chart response data to rechart form
* 3. tableGenerator: convert chart response data to table
*/
import chartReqCommon from './ChartRequestCommon';
import chartGenerate from './ChartGenerateCommon';


const chartUtils = (function() {
  return {
    // common chart data requester
    chartFetcher(query, url, type, succCallback, failCallback) {
      window.dispatch(chartReqCommon(query, url, type, succCallback, failCallback));
    },

    // common chart response data convertor
    chartGenerator(chartlines, type, option) {
      return chartGenerate.genChart(chartlines, type, option);
    },

    // common chart to table convertor
    tableGenerator(chartlines, type, option) {
      return chartGenerate.genTable(chartlines, type, option);
    },
  };
}());

export default chartUtils;