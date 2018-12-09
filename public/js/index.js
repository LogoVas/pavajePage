// on page load script
$(document).ready(function () {
//   carousel settings
    $('#carousel').carousel({
        interval: 3000
    })

});

function showModalAndcarousel(x){

    $('#modal').modal('show');
    // x = what image will be displayed first on modal
    $('#carouselExampleIndicators').carousel(x);
}