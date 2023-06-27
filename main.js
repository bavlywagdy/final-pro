const sr = ScrollReveal ({
    distance: '30px',
    duration:1250,
    delay:200,
    reset:true
})


sr.reveal ('.text', {delay:100, origin:'top'})
sr.reveal ('.container form', {delay:400, origin:'left'})
sr.reveal ('.heading', {delay:400, origin:'top'})
sr.reveal ('.ride-container .box', {delay:300, origin:'top'})
sr.reveal ('.rented', {delay:300, origin:'top'})
sr.reveal ('.services-container .box', {delay:300, origin:'top'})
sr.reveal ('.services-container-2 .box', {delay:300, origin:'top'})
sr.reveal ('.services-container-3 .box', {delay:300, origin:'top'})
sr.reveal ('.about-container .about-text', {delay:300, origin:'top'})
sr.reveal ('.reviews-container', {delay:300, origin:'top'})




window.addEventListener('DOMContentLoaded', () => {
            
  const rentButtons = document.querySelectorAll('.serv-btn');

  // w hykon feh method bt3mlk remove l kol item anta bt-click 3leh
  rentButtons.forEach(button => {
      button.addEventListener('click', () => {
          button.parentElement.remove();
      });
  });
});



// getting all the btns for rent cars
const rentNowButtons = document.querySelectorAll('.serv-btn');

// click eventlistener 
rentNowButtons.forEach(button => {
  button.addEventListener('click', rentCar);
});

// Renting a car
function rentCar(event) {
  
  const car = event.target.closest('.box');

  // Clone the car
  const clonedCar = car.cloneNode(true);

  // Removing the car from the old section
  car.remove();

  // Append the cloned to the new section
  const rentedSection = document.querySelector('#rented');
  rentedSection.appendChild(clonedCar);
}