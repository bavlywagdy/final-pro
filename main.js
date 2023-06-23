const sr = ScrollReveal ({
    distance: '60px',
    duration:2500,
    delay:400,
    reset:true
})


sr.reveal ('.text', {delay:200, origin:'top'})
sr.reveal ('.container form', {delay:800, origin:'left'})
sr.reveal ('.heading', {delay:800, origin:'top'})
sr.reveal ('.ride-container .box', {delay:600, origin:'top'})
sr.reveal ('.rented', {delay:600, origin:'top'})
sr.reveal ('.services-container .box', {delay:600, origin:'top'})
sr.reveal ('.about-container .box', {delay:600, origin:'top'})
sr.reveal ('.reviews-container', {delay:600, origin:'top'})





window.addEventListener('DOMContentLoaded', () => {
            
  const rentButtons = document.querySelectorAll('.serv-btn');

  // w hykon feh method bt3mlk remove l kol item anta bt-click 3leh
  rentButtons.forEach(button => {
      button.addEventListener('click', () => {
          button.parentElement.remove();
      });
  });
});