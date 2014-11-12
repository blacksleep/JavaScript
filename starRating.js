/**
 * Created by BlackSleep on 10/30/2014.
 */
$(document).ready(function() {

    var star = $('li');
    (star).mouseenter(function () {
        $(this).addClass('starred');
        $(this).prevAll('.star').addClass('starred');

    });

    (star).mouseleave(function(){
        $('li.starred').each(function (){
            $(this).removeClass('starred');
        });
    });

    (star).click(function (){
        (star).removeClass('current');
        $(this).addClass('current');
        $(this).prevAll(".star").addClass('current');
    });
});






