$(document).ready(function(){

    /* Open lightbox on button click */
    $('.photo1 img').click(function(){
        $('.backdrop').animate({'opacity':'.50'}, 300, 'linear').css('display', 'block');
        $('.box').fadeIn();

        //Check if lightbox has an image
        if ($('.box').contents('img')) {
            $('.box').contents().remove('img'); //If true, clear image
        }

        //Get text content in attribute
        var $altvalue = $(this).attr('alt'); //or var altvalue = $(this).attr('alt');

        if ($altvalue=="gallery1") {
            var img = $('.photo1:nth-child(1) img').clone(); //Duplicate DOM element
            $('.box').append(img); //Insert duplicated element in another element
        }
    });

    /* Click to close lightbox */
    $('.close, .backdrop').click(function(){
        $('.backdrop').animate({'opacity':'0'}, 300, 'linear', function(){
            $('.backdrop').css('display', 'none');
        });
        $('.box').fadeOut();
    });

});

$(document).ready(function(){

    /* Open lightbox on button click */
    $('.photo2 img').click(function(){
        $('.backdrop').animate({'opacity':'.50'}, 300, 'linear').css('display', 'block');
        $('.box').fadeIn();

        //Check if lightbox has an image
        if ($('.box').contents('img')) {
            $('.box').contents().remove('img'); //If true, clear image
        }

        //Get text content in attribute
        var $altvalue = $(this).attr('alt'); //or var altvalue = $(this).attr('alt');

        if ($altvalue=="gallery2") {
            var img = $('.photo2:nth-child(2) img').clone(); //Duplicate DOM element
            $('.box').append(img); //Insert duplicated element in another element
        }
    });

    /* Click to close lightbox */
    $('.close, .backdrop').click(function(){
        $('.backdrop').animate({'opacity':'0'}, 300, 'linear', function(){
            $('.backdrop').css('display', 'none');
        });
        $('.box').fadeOut();
    });

});

$(document).ready(function(){

    /* Open lightbox on button click */
    $('.photo3 img').click(function(){
        $('.backdrop').animate({'opacity':'.50'}, 300, 'linear').css('display', 'block');
        $('.box').fadeIn();

        //Check if lightbox has an image
        if ($('.box').contents('img')) {
            $('.box').contents().remove('img'); //If true, clear image
        }

        //Get text content in attribute
        var $altvalue = $(this).attr('alt'); //or var altvalue = $(this).attr('alt');

        if ($altvalue=="gallery3") {
            var img = $('.photo3:nth-child(3) img').clone(); //Duplicate DOM element
            $('.box').append(img); //Insert duplicated element in another element
        }
    });

    /* Click to close lightbox */
    $('.close, .backdrop').click(function(){
        $('.backdrop').animate({'opacity':'0'}, 300, 'linear', function(){
            $('.backdrop').css('display', 'none');
        });
        $('.box').fadeOut();
    });

});

$(document).ready(function(){

    /* Open lightbox on button click */
    $('.photo4 img').click(function(){
        $('.backdrop').animate({'opacity':'.50'}, 300, 'linear').css('display', 'block');
        $('.box').fadeIn();

        //Check if lightbox has an image
        if ($('.box').contents('img')) {
            $('.box').contents().remove('img'); //If true, clear image
        }

        //Get text content in attribute
        var $altvalue = $(this).attr('alt'); //or var altvalue = $(this).attr('alt');

        if ($altvalue=="gallery4") {
            var img = $('.photo4:nth-child(4) img').clone(); //Duplicate DOM element
            $('.box').append(img); //Insert duplicated element in another element
        }
    });

    /* Click to close lightbox */
    $('.close, .backdrop').click(function(){
        $('.backdrop').animate({'opacity':'0'}, 300, 'linear', function(){
            $('.backdrop').css('display', 'none');
        });
        $('.box').fadeOut();
    });

});

$(document).ready(function(){

    /* Open lightbox on button click */
    $('.photo5 img').click(function(){
        $('.backdrop').animate({'opacity':'.50'}, 300, 'linear').css('display', 'block');
        $('.box').fadeIn();

        //Check if lightbox has an image
        if ($('.box').contents('img')) {
            $('.box').contents().remove('img'); //If true, clear image
        }

        //Get text content in attribute
        var $altvalue = $(this).attr('alt'); //or var altvalue = $(this).attr('alt');

        if ($altvalue=="gallery5") {
            var img = $('.photo5:nth-child(5) img').clone(); //Duplicate DOM element
            $('.box').append(img); //Insert duplicated element in another element
        }
    });

    /* Click to close lightbox */
    $('.close, .backdrop').click(function(){
        $('.backdrop').animate({'opacity':'0'}, 300, 'linear', function(){
            $('.backdrop').css('display', 'none');
        });
        $('.box').fadeOut();
    });

});

$(document).ready(function(){

    /* Open lightbox on button click */
    $('.photo6 img').click(function(){
        $('.backdrop').animate({'opacity':'.50'}, 300, 'linear').css('display', 'block');
        $('.box').fadeIn();

        //Check if lightbox has an image
        if ($('.box').contents('img')) {
            $('.box').contents().remove('img'); //If true, clear image
        }

        //Get text content in attribute
        var $altvalue = $(this).attr('alt'); //or var altvalue = $(this).attr('alt');

        if ($altvalue=="gallery6") {
            var img = $('.photo6:nth-child(6) img').clone(); //Duplicate DOM element
            $('.box').append(img); //Insert duplicated element in another element
        }
    });

    /* Click to close lightbox */
    $('.close, .backdrop').click(function(){
        $('.backdrop').animate({'opacity':'0'}, 300, 'linear', function(){
            $('.backdrop').css('display', 'none');
        });
        $('.box').fadeOut();
    });

});


$(document).ready(function(){

    /* Open lightbox on button click */
    $('.photo7 img').click(function(){
        $('.backdrop').animate({'opacity':'.50'}, 300, 'linear').css('display', 'block');
        $('.box').fadeIn();

        //Check if lightbox has an image
        if ($('.box').contents('img')) {
            $('.box').contents().remove('img'); //If true, clear image
        }

        //Get text content in attribute
        var $altvalue = $(this).attr('alt'); //or var altvalue = $(this).attr('alt');

        if ($altvalue=="gallery7") {
            var img = $('.photo1:nth-child(7) img').clone(); //Duplicate DOM element
            $('.box').append(img); //Insert duplicated element in another element
        }
    });

    /* Click to close lightbox */
    $('.close, .backdrop').click(function(){
        $('.backdrop').animate({'opacity':'0'}, 300, 'linear', function(){
            $('.backdrop').css('display', 'none');
        });
        $('.box').fadeOut();
    });

});


$(document).ready(function(){

    /* Open lightbox on button click */
    $('.photo8 img').click(function(){
        $('.backdrop').animate({'opacity':'.50'}, 300, 'linear').css('display', 'block');
        $('.box').fadeIn();

        //Check if lightbox has an image
        if ($('.box').contents('img')) {
            $('.box').contents().remove('img'); //If true, clear image
        }

        //Get text content in attribute
        var $altvalue = $(this).attr('alt'); //or var altvalue = $(this).attr('alt');

        if ($altvalue=="gallery8") {
            var img = $('.photo8:nth-child(8) img').clone(); //Duplicate DOM element
            $('.box').append(img); //Insert duplicated element in another element
        }
    });

    /* Click to close lightbox */
    $('.close, .backdrop').click(function(){
        $('.backdrop').animate({'opacity':'0'}, 300, 'linear', function(){
            $('.backdrop').css('display', 'none');
        });
        $('.box').fadeOut();
    });

});

$(document).ready(function(){

    /* Open lightbox on button click */
    $('.photo9 img').click(function(){
        $('.backdrop').animate({'opacity':'.50'}, 300, 'linear').css('display', 'block');
        $('.box').fadeIn();

        //Check if lightbox has an image
        if ($('.box').contents('img')) {
            $('.box').contents().remove('img'); //If true, clear image
        }

        //Get text content in attribute
        var $altvalue = $(this).attr('alt'); //or var altvalue = $(this).attr('alt');

        if ($altvalue=="gallery9") {
            var img = $('.photo9:nth-child(9) img').clone(); //Duplicate DOM element
            $('.box').append(img); //Insert duplicated element in another element
        }
    });

    /* Click to close lightbox */
    $('.close, .backdrop').click(function(){
        $('.backdrop').animate({'opacity':'0'}, 300, 'linear', function(){
            $('.backdrop').css('display', 'none');
        });
        $('.box').fadeOut();
    });

});


$(document).ready(function(){

    /* Open lightbox on button click */
    $('.photo10 img').click(function(){
        $('.backdrop').animate({'opacity':'.50'}, 300, 'linear').css('display', 'block');
        $('.box').fadeIn();

        //Check if lightbox has an image
        if ($('.box').contents('img')) {
            $('.box').contents().remove('img'); //If true, clear image
        }

        //Get text content in attribute
        var $altvalue = $(this).attr('alt'); //or var altvalue = $(this).attr('alt');

        if ($altvalue=="gallery10") {
            var img = $('.photo10:nth-child(10) img').clone(); //Duplicate DOM element
            $('.box').append(img); //Insert duplicated element in another element
        }
    });

    /* Click to close lightbox */
    $('.close, .backdrop').click(function(){
        $('.backdrop').animate({'opacity':'0'}, 300, 'linear', function(){
            $('.backdrop').css('display', 'none');
        });
        $('.box').fadeOut();
    });

});

$(document).ready(function(){

    /* Open lightbox on button click */
    $('.photo11 img').click(function(){
        $('.backdrop').animate({'opacity':'.50'}, 300, 'linear').css('display', 'block');
        $('.box').fadeIn();

        //Check if lightbox has an image
        if ($('.box').contents('img')) {
            $('.box').contents().remove('img'); //If true, clear image
        }

        //Get text content in attribute
        var $altvalue = $(this).attr('alt'); //or var altvalue = $(this).attr('alt');

        if ($altvalue=="gallery11") {
            var img = $('.photo11:nth-child(11) img').clone(); //Duplicate DOM element
            $('.box').append(img); //Insert duplicated element in another element
        }
    });

    /* Click to close lightbox */
    $('.close, .backdrop').click(function(){
        $('.backdrop').animate({'opacity':'0'}, 300, 'linear', function(){
            $('.backdrop').css('display', 'none');
        });
        $('.box').fadeOut();
    });

});

$(document).ready(function(){

    /* Open lightbox on button click */
    $('.photo12 img').click(function(){
        $('.backdrop').animate({'opacity':'.50'}, 300, 'linear').css('display', 'block');
        $('.box').fadeIn();

        //Check if lightbox has an image
        if ($('.box').contents('img')) {
            $('.box').contents().remove('img'); //If true, clear image
        }

        //Get text content in attribute
        var $altvalue = $(this).attr('alt'); //or var altvalue = $(this).attr('alt');

        if ($altvalue=="gallery12") {
            var img = $('.photo12:nth-child(12) img').clone(); //Duplicate DOM element
            $('.box').append(img); //Insert duplicated element in another element
        }
    });

    /* Click to close lightbox */
    $('.close, .backdrop').click(function(){
        $('.backdrop').animate({'opacity':'0'}, 300, 'linear', function(){
            $('.backdrop').css('display', 'none');
        });
        $('.box').fadeOut();
    });

});