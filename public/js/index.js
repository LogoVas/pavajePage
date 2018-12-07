// on page load script
$(document).ready(function () {


});

function showModalAndcarousel(x){
    // carousel settings
    $('#carousel').carousel({
        interval: 3000
    })
    $('#carousel').modal('show');
    // x = what image will be displayed first on modal
    $('#carouselExampleIndicators').carousel(x);
}