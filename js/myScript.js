$( document ).ready(function() {
    


$('.myButton').hover(
    function(){ $(this).addClass('animated pulse infinite') },
    function(){ $(this).removeClass('animated pulse infinite') }
)

$('.nav-item').hover(
    function () {
        $(this).addClass('animated pulse infinite')
    },
    function () {
        $(this).removeClass('animated pulse infinite')
    }
)

});
