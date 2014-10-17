/*


function isSpeeding(speed, isBirthday) {  //Works for only one defined speed limit

    if (speed <= 60) {return 0;}

    if (speed > 60 && speed <= 80) {return 1;}

    if (speed > 80) {return 2;}

    if (isBirthday){speed = speed-5;}
}

    console.log(isSpeeding(81,true));
*/

function isSpeeding(speed, isBirthday, limit) {  //Works if limit changes

    if(!limit) {limit = 60}  //Limit is defined here, could be set as other number

    if(isBirthday){limit += 5}

    if (speed <= limit) {return 0;}

    if (speed > limit && speed <= (limit + 20)) {return 1;}

    if (speed > (limit + 20)) {return 2;}

    if (isBirthday){speed = speed-5;}
}

console.log(isSpeeding(81,false));