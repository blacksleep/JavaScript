/**
 * Created by BlackSleep on 10/28/2014.
 */
$(document).ready(function(){

    var maxChars = 140;

    var inputBox = $('#textarea');
    var count = $('#counter');

    inputBox.on('keyup', checkAndUpdateCount);


    function checkAndUpdateCount(event){
        var currentText = inputBox.val();
        var remaining = maxChars - currentText.length;

        if(remaining > 20) {
            count.removeClass('warn');
        } else {
            count.addClass('warn');
        }

        if(remaining >= 0) {
            count.text(remaining);

        } else {
            count.text(0);
            var truncate = currentText.substring(0, maxChars-1);
            inputBox.val(truncate);
        }

    }

});