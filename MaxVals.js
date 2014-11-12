/**
 * Created by BlackSleep on 10/20/2014.
 */

/*
maxVals([1,3,8,9,4,2,10,7], 5);

function maxVals(arr, max) {
    var newarr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] <= max) {
            newarr.push(arr[i]);
        }
    }
    return newarr;
}
console.log (maxVals);

*/

/*
maxVals ([1, 3, 8, 9, 4, 2, 10, 7]);

function maxVals(arr, max) {
    return arr.filter(function(val, idx){
        return(val <= max);
    });
  */


//Collatz//

console.log(oneness(100));
function oneness (x){
    var steps = 0;
    while (x !== 1){
        if (x % 2) x = (x * 3) + 1;
        else {x= x / 2;}
        steps++;
    }
    return steps;
}



