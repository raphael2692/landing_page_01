$(document).ready(function () {



    $('.myButton').hover(
        function () {
            $(this).addClass('animated pulse')
        },
        function () {
            $(this).removeClass('animated pulse')
        }
    )


});