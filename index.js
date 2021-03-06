 
//  ------------------------------------
//  script para menu que se contrae
//  ------------------------------------


const navSlide =() => {
  const burger = document.querySelector('.hambicon');
  const nav = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-menu li');
  var linkCloseMenus = document.getElementsByClassName('actionlink');
  
burger.addEventListener('click',() => {
      //Toggle Nav
  nav.classList.toggle('nav-active');
  
  //Animate Links
  //osea va a ser la animacion para cada uno de los links
  navLinks.forEach((link, index) => {
    if(link.style.animation){
      link.style.animation = '';
    }else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;  
      }
  });
});

// close hamburger menu after click a
$( '.nav-menu li a' ).on("click", function(){
  burger.click();
});
}


  function stickyMenu(){
  // Transition effect for navbar 
  $(window).scroll(function() {
    // checks if window is scrolled more than 500px, adds/removes solid class
    if($(this).scrollTop() > 700) { 
        $('.topnav').addClass('transparent');
        $('.topnav').addClass('sticky');
    } else {
        $('.topnav').removeClass('transparent');
        $('.topnav').removeClass('sticky');
    }
  });
};
var sizes = window.matchMedia("(min-width: 767px)")
//is for 767 because i want to have the stickiy form since
//768...
function navmobile(sizes){
  if (sizes.matches) { // If media query matches
    stickyMenu();
};
};
navmobile(sizes);

const menu = () => {
  navSlide();

}
// ---------REED MORE---------------------

function leerMas() {
  // var linkMore = document.getElementById("linkMore");
  var moreText = document.getElementById("more");
  var linkMore = document.getElementById("linkMore");

  if (moreText.style.display === "none") {
    // linkMore.style.display = "inline";
    moreText.style.display = "inline";

    linkMore.innerHTML = 'Leer menos';

     
   
  } else {
    linkMore.innerHTML = 'Leer mas';
    moreText.style.display = "none";
  
  }
}
function mobileView(x) {
  if (x.matches) { // If media query matches
      leerMas();
  } 
}
var x = window.matchMedia("(max-width: 768px)")
mobileView(x) // Call listener function at run time
x.addListener(mobileView)
// ------------------------------
menu();

 




// --------------------------------
// CONTACT VALIDATION
// --------------------------------

$(document).ready(function(){
  $("#btnSubmit").click(validateForm);
})

function validateForm() {
  

      
  if( document.contactForm.nombreV.value == "" ) {
     alert( "Por favor, ingrese Nombre y Apellido" );
     document.contactForm.nombreV.focus() ;
     return false;
  }
  if( document.contactForm.emailV.value == "" ) {
    alert( "Por favor, ingrese un e-mail" );
    document.contactForm.emailV.focus() ;
    return false;
 }
  if( document.contactForm.empresaV.value == "" ) {
  alert( "Por favor, ingrese el nombre de su Empresa" );
  document.contactForm.empresaV.focus() ;
  return false;
  }
  if( document.contactForm.comentariosV.value == "" ) {
    alert( "Por favor, ingrese una consulta" );
    document.contactForm.comentariosV.focus() ;
    return false;
    }
    //alert("Gracias por su consulta!");
    {
      //get input field values data to be sent to server
      post_data = {
        'nombre': $('input[name=nombreV]').val(),
        'email': $('input[name=emailV]').val(),
        'empresa': $('input[name=empresaV]').val(),
        'comentarios': $('textarea[name=comentariosV]').val()
      };

      
      $.post('consulta.php', post_data, function(response) {
        location.reload();
      });
    }

}



