var swiper1 = new Swiper('.swiper-1', {
  spaceBetween: 10,

  scrollbar: {
    el: '.swiper-scrollbar-1',
    hide: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },

    1020: {
      slidesPerView: 4,
    },
  },
})

var swiper2 = new Swiper('.swiper-2', {
  spaceBetween: 10,

  scrollbar: {
    el: '.swiper-scrollbar-2',
    hide: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },

    1020: {
      slidesPerView: 2,
    },
  },
})

const Menu = (e) => {
  let list = document.querySelector('ul')
  let burgerMenu = document.querySelector('.burger-menu')
  let closeMenu = document.querySelector('.close-menu')

  if (list.classList.contains('top-[45px]')) {
    list.classList.remove('top-[45px]')
    list.classList.remove('opacity-100')
    burgerMenu.style.display = 'block'
    closeMenu.style.display = 'none'
  } else {
    list.classList.add('top-[45px]')
    list.classList.add('opacity-100')
    burgerMenu.style.display = 'none'
    closeMenu.style.display = 'block'
  }
}

const destroySwiper1 = () => {
  swiper1.destroy()
}

const destroySwiper2 = () => {
  swiper2.destroy()
}

const initSwiper1 = () => {
  swiper1.init()
}

const initSwiper2 = () => {
  swiper2.init()
}
