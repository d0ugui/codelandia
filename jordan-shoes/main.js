var typed = new Typed('#typed', {
  stringsElement: '#typed-strings',
  typeSpeed: 30,
  showCursor: false
})

const scroll = ScrollReveal({
  origin: 'top',
  distance: '50px',
  duration: 2000,
  reset: true
})

ScrollReveal().reveal('#content, #cards_scroll', { delay: 200 })
