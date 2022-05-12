
let opacity;
let current;
$(".action-button").click(function(){
 let firstname = $('.firstname').val();
 let lastname =  $('.lastname').val();
 let phone = $('.number').val();

if(firstname !== "" &&  lastname !== "" &&  phone !== ""){
   
    current = $(this).parent();
    let next = $(this).parent().next();

    next.show();
    current.animate({opacity: 0}, {
        step: function(now) {
            opacity = 1 - now;

            current.css({
            'display': 'none',
            'position': 'relative'
            });
            next.css({'opacity': opacity});
            },
            duration: 500
        });
    }
$('.text-content').append(`<h2>${firstname}</h2>`);
$('.text-content').append(`<h2> ${lastname} </h2>`);
$('.text-content').append(`<h2> ${phone} </h2>`);
});
$(".next").click(function(){
   
    let email = $('.email').val();
    let pass = $('.password').val();
   
   if(email !== "" &&  pass !== ""){
     
       current = $(this).parent();
       let next = $(this).parent().next();
   
       next.show();
       current.animate({opacity: 0}, {
           step: function(now) {
               opacity = 1 - now;
   
               current.css({
               'display': 'none',
               'position': 'relative'
               });
               next.css({'opacity': opacity});
               },
               duration: 500
           });
       }
      
       $('.text-content').append(`<h2> ${pass} </h2>`);
       $('.text-content').append(`<h2> ${email} </h2>`);

    });

$(".previous").click(function(){
current = $(this).parent();
let previous = $(this).parent().prev();

previous.show();

current.animate({opacity: 0}, {
    step: function(now) {

        opacity = 1 - now;

        current.css({
        'display': 'none',
        'position': 'relative'
        });
        previous.css({'opacity': opacity});
        },
        duration: 500
        });
});
