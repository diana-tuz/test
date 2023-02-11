$(document).ready((function () {
    $('.nav__burger').click(function () {
        $('.nav__burger, .show').toggleClass('active');
        $('body').toggleClass('lock')
    })
}))

