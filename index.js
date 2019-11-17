// dynamically import algorithm
// var js = document.createElement('script');
// js.src = 'maxheap.js';
// document.body.appendChild(js);
// var js1 = document.createElement('script');
// js1.src = 'arraytree.js';
// document.body.appendChild(js1);
// var js1 = document.createElement('script');
// js1.src = 'randomArr.js';
// document.body.appendChild(js1);
// var js1 = document.createElement('script');
// js1.src = 'quicksort.js';
// document.body.appendChild(js1);
var js1 = document.createElement('script');
js1.src = 'list.js';
document.body.appendChild(js1);

// after script has been loaded, run test code
window.onload = function() {


function threeProductSuggestions(numProducts, repository, customerQuery)
{
    len = customerQuery.length;
    if (len < 2) {
        return [];
    }

    var lowerQuery = customerQuery.toLowerCase();
    var substr;
    var i;
    var j;
    var result = [];
    repository.sort(function(a, b) {
        return a.localeCompare(b);
    });
    
    var tmpArr;
    for (i = 2; i <= len; i++) {
        tmpArr = [];
        substr = lowerQuery.slice(0, i);
        for (j = 0; j < numProducts; j++) {
            if (repository[j].toLowerCase().indexOf(substr) !== -1) {
                tmpArr.push(repository[j]);
            }
        }
        result.push(tmpArr.slice(0, 3));
    }
    
    return result;
}

var r = threeProductSuggestions(5,['bags', 'baggage', 'banner', 'box', 'cloths'], 'bags');
console.log(r);
};

