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
