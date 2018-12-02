// navbar
$(document).ready(function () {
    // close navbar on page open
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
    });

});