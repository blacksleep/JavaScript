/**
 * Created by BlackSleep on 10/16/2014.
 */
function mason(small, large, total_length) {
    var totalSmall = small;
    var totalLarge = large * 5;
    var availableLength = totalSmall + totalLarge;
    if(availableLength >= total_length){
        return 'complete';
    } else {
        return 'incomplete';
    }
}

console.log (mason(3,5,100))