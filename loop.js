/**
 * Created by BlackSleep on 10/16/2014.
 */
function findLongestWord(str) {

    var words = str.trim().split(" ");
    var longest = {
        word: '',
        length: 0
    }

    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        if (word.length > longest.length) {
            longest = word;
        }
    }
return longest;

}

console.log(findLongestWord("What is the longest word in the sentence?"))

//10/20/14 notes

//looping through an array

arr forEach(function(item; index)) {  //this "arr forEach()"  method that comes with all arrays, and executes a provided function                                        //once per array element,it will do a "for (int;____;____)" sequence
}
//or

function output(item) {
    console.log(item);
}

arr forEach(output)

