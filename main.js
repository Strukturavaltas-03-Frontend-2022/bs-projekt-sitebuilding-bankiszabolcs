$('#privacyModal').on('shown.bs.modal', function () {
    $('#privacy').trigger('focus')
  })

  $('#faqModal').on('shown.bs.modal', function () {
    $('#faq').trigger('focus')
  })

  $('#termsModal').on('shown.bs.modal', function () {
    $('#terms').trigger('focus')
  })

  const navbar = document.querySelector('#menu')
  const startMenuItem = document.querySelector('.start')
  const menuItems = Array.from(document.querySelectorAll('.menu--item'))
  document.addEventListener('scroll', ()=>{
    if(window.pageYOffset>0){
        navbar.style.background = 'white'
        startMenuItem.style.color = 'grey';
        menuItems.map(element => element.style.color = 'grey')
      }else{
        navbar.style.background = 'unset'
        startMenuItem.style.color = 'var(--yellow)' 
        menuItems.map(element => element.style.color = '#e1c4d6') 
      }

  })

