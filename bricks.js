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

//shortcut version below

function mason(sm, lg, len){
    return (sm + (lg * 5) >= len)? true:false;  //The "?" acts as "if '(sm + (lg *5) >= len)' is true, return 'true'" and the ":" acts as "if '(sm + (lg * 5) >= len)' is false, return 'false'"
}

console.log (mason(3,5,100))

