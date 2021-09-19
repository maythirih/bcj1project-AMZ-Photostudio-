$(document).ready(function(){
    // console.log('hay');
// Start Navbar 

//for navbutton
$('.navbuttons').click(function(){
    // console.log('hay');
    $('.navbuttons').toggleClass('changes');
});

//for navbar
$(window).scroll(function(){
    let getscrolly = $(this).scrollTop();
    if(getscrolly >= 200){
        $('.navbar').addClass('navmenus')
    }else{
        $('.navbar').removeClass('navmenus');
    }
});

//End Navbar

//Mission Start

$(window).scroll(function(){
    let getscrolly = $(this).scrollTop();

    if(getscrolly >= 650){
        $('.cameraimgs').addClass('fromlefts');
        $('.missiontexts').addClass('fromrights');
    }else{
        $('.cameraimgs').removeClass('fromlefts');
        $('.missiontexts').removeClass('fromrights');
    }
});

//End Mission

// Start Gallery Selection

$('.gallerylists').click(function(){
    // console.log('hay');
    let datafilter = $(this).attr('data-filter');
    // console.log(datafilter);

    if(datafilter === "all"){
        $('.filters').show();
    }else{
         $('.filters').not('.'+datafilter).hide(400);

         $('.filters').filter('.'+datafilter).show(300);
    }
});

// $('.gallerylists').click(function(){
//     let datafilter = $(this).attr('data-filter');
//     // console.log(datafilter);

//     if(datafilter === "all"){
//         $('.filters').show();
//     }else{
//          $('.filters').not('.'+datafilter).hide(400);

//          $('.filters').filter('.'+datafilter).show(300);
//     }
// });

$('.gallerylists').click(function(){
    $(this).addClass('activeitems').siblings().removeClass('activeitems');
});


// Remove current active item

// End Gallery Selection

// Start Pricing Section 

$(window).scroll(function(){
    let getscrolly = $(this).scrollTop();

    if(getscrolly >= 4200){
        $('.cardones').addClass('movefromlefts');
        $('.cardtwos').addClass('movefrombottoms');
        $('.cardthrees').addClass('movefromrights');
    }else{
        $('.cardones').removeClass('movefromlefts');
        $('.cardtwos').removeClass('movefrombottoms');
        $('.cardthrees').removeClass('movefromrights');
    }
});


//end pricing secttion

//Start Foooter Section
const showyear = document.getElementById('showyear');
const getfullyear = new Date().getUTCFullYear();
showyear.textContent = getfullyear;
//End Footer Section

});