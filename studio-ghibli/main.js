/* ScrollReveal - mostrar elementos ao scrollar a página*/
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  durantion: 700,
  reset: true
})

scrollReveal.reveal(`#navigation .logo, #list, #hero .info, #ilustration`, {
  interval: 100
})
