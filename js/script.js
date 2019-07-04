'use strict';

var skillDesc = document.getElementsByClassName('skill__desc');
var skillScreenDesc = document.querySelector('.skill__screen-desc');
var navigationCheckbox = document.querySelector('.navigation__checkbox');
var menuElement = document.getElementsByClassName('navigation__menu__elt');
var headerName = document.querySelector('.header-name');
var targetTitle = document.getElementById('top-title');
var options = {
  rootMargin: '-100px 0px 0px 0px',
}

var observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      // Header without name
      if (headerName.classList.contains('show')) {
        headerName.classList.remove('show');
      }
    } else {
      // Name visible in the header
      headerName.classList.add('show');
    }
  })
}, options);


var swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows : false,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  on: {
    init : function() {
      showSkillDesc(0);
    },
    slideChange: function() {
      if (swiper) {
        showSkillDesc(swiper.realIndex);
      }
    },
  },
});


function showSkillDesc(index) {
  skillScreenDesc.innerText = skillDesc[index].innerText;
}

function menuElementClickHandle() {
  navigationCheckbox.checked = false;
}

for (var i = 0; i < menuElement.length; i++) {
  menuElement[i].addEventListener('click', menuElementClickHandle);
}

observer.observe(targetTitle);
