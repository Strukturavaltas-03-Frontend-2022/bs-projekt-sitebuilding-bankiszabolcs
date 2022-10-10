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
        startMenuItem.classList.add('start--sticky')
        startMenuItem.classList.remove('start')
        menuItems.map(element => {
          element.classList.add('menu__item--sticky')
          element.classList.remove('menu--item')
        })

      }else{
        navbar.style.background = 'unset'
        startMenuItem.classList.remove('start--sticky')
        startMenuItem.classList.add('start')
        menuItems.map(element => {
          element.classList.remove('menu__item--sticky')
          element.classList.add('menu--item')
        })
      }

  })

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

