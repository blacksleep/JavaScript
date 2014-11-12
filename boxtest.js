/**
 * Created by BlackSleep on 10/28/2014.
 */
$(function(){

   var box = $('#box');

    box.on('mouseenter', function(){
        box
            .stop(true)
            .animate({
                backgroundColor: 'green'
                , width: 500
                , height: 500
            }, 10000);
    });

    box.on('mouseleave', function(){
        box
            .stop(true)
            .animate({
                backgroundColor: 'red'
                , width: 5
                , height: 5
            }, -10000);
    });













});