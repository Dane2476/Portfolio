document.addEventListener('DOMContentLoaded', function(){
  const name = document.querySelector('.name');
  const nav = document.querySelector('.nav');
  const particles1 = document.querySelector('#particles-js');
  const particles2 = document.querySelector('#particles-js2');


 // When any desktop menu button is clicked
  document.querySelectorAll('.content-link').forEach(function(button){


    button.onclick = function (){

      // On first click
      document.querySelectorAll('.content-link').forEach(function(item){

        if (!item.classList.contains('nvbar')){
            item.classList.add('nvbar')
            document.querySelector('#menu_open').classList.add('vis');
            document.querySelector('#header').classList.add('main');
        }
      });

      if (! name.classList.contains('nvbar') && ! nav.classList.contains('.nvbar')) {
        name.classList.add('nvbar');
        nav.classList.add('nvbar');
      }
      if (! particles1.classList.contains('shift') && ! particles2.classList.contains('shift')){
        particles1.classList.add('shift');
        particles2.classList.add('shift');
      }
      if (document.querySelector('#landing').classList.contains('active')){
        //wait to remove active class so animation can take place
        setTimeout(function(){
          document.querySelector('#landing').classList.remove('active');
        }, 1000)
      }
      else if (document.querySelector('.active')){
        document.querySelector('.active').classList.remove('active');
      }

      if (button.classList.contains('about')){
        document.querySelector('#about').classList.add('active');
      }
      if (button.classList.contains('projects')){
        document.querySelector('#projects').classList.add('active');
      }
      if (button.classList.contains('work')){
        document.querySelector('#work').classList.add('active');
      }
    }
  });
});

// Mobile menu function on click..

var active = false;
function mobileMenu(){
  var menu = document.querySelector("#menu");
  var one = document.querySelector("#one");
  var two = document.querySelector("#two");
  var three = document.querySelector("#three");
  var four = document.querySelector("#four");
  var menuOpen = document.querySelector("#menu_open");
  var menuClose = document.querySelector("#menu_close");
  var z = document.querySelector("#mobileNav");


  var navItems = document.querySelectorAll(".mobile_nav_item");

  var x = 0.3;

  // If the menu is not open when func is called
  if(active == false){
    menuOpen.style.visibility = 'hidden';
    menuOpen.style.fontSize = '0px';
    menuClose.style.fontSize = '25px';
    menuOpen.style.padding = '0vw';

    menuClose.style.visibility = 'visible';
    z.style.zIndex = '9999';
    for(var i = 0; i < navItems.length; i++){

      navItems[i].className +=(' mobile_menu_active');
      // Delays animation effect
      navItems[i].style.transition = x + "s"; //concatenate x with s
      x += 0.2;
      active = true;
    }
  }
  // Hide menu
  else{
    x=0.3;
    active = false;
    menuOpen.style.visibility = 'visible';
    menuClose.style.visibility = 'hidden';
    menuClose.style.fontSize = '0px';
    menuOpen.style.fontSize = '25px';
    menuClose.style.padding = '0vw';
    setTimeout(function(){z.style.zIndex= '0';}, 400);


    for(var i = 0; i < navItems.length; i++){

      // Return to original class name
      navItems[i].className=('mobile_nav_item');
      navItems[i].style.transition = x +"s all";
      x += 0.2;
    }
  }
}
function about(){
  document.querySelector('.active').classList.remove('active');
  document.querySelector('#about').classList.add('active');
}
function projects(){
  document.querySelector('.active').classList.remove('active');
  document.querySelector('#projects').classList.add('active');
}
function work(){
  document.querySelector('.active').classList.remove('active');
  document.querySelector('#work').classList.add('active');
}


window.addEventListener("resize", function(event) {
    if(document.body.clientWidth > 680){
      document.querySelector("#menu_open.vis").style.visibility = 'hidden';
    }
    else{
      document.querySelector("#menu_open.vis").style.visibility = 'visible';
    }
});
