const sr = ScrollReveal ({
    distance: '30px',
    duration:1250,
    delay:100,
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
sr.reveal ('.locations iframe', {delay:300, origin:'top'})
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

const menuIcon = document.getElementById('menu-icon');
        const rentedList = document.querySelector('.rented-list');

        // Function to add an element to the rented list
        function addElementToRentedList(imgSrc, carName, carSpecs, price) {
            const listItem = document.createElement('li');
            listItem.className = 'rented-item';

            const carImage = document.createElement('img');
            carImage.className = 'rented-img';
            carImage.src = imgSrc;
            carImage.alt = carName;

            const carInfo = document.createElement('div');
            carInfo.className = 'rented-info';

            const nameHeading = document.createElement('h3');
            nameHeading.className = 'rented-name';
            nameHeading.textContent = carName;

            const specsParagraph = document.createElement('p');
            specsParagraph.className = 'rented-specs';
            specsParagraph.textContent = carSpecs;

            // const priceParagraph = document.createElement('p');
            // priceParagraph.className = 'price';
            // priceParagraph.textContent = price;

            carInfo.appendChild(nameHeading);
            carInfo.appendChild(specsParagraph);

            listItem.appendChild(carImage);
            listItem.appendChild(carInfo);
            listItem.appendChild(priceParagraph);

            rentedList.appendChild(listItem);
        }

        // Event listener for menu icon click
        menuIcon.addEventListener('click', function() {
            // Add functionality to show or hide the rented list
            rentedList.classList.toggle('show');
        });

        // Example usage of addElementToRentedList function
        addElementToRentedList('img/car1.jpg', 'Car 1', 'Car 1 specs', '$1000/month');
        addElementToRentedList('img/car2.jpg', 'Car 2', 'Car 2 specs', '$2000/month');
        // Add more elements as needed