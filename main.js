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
sr.reveal ('.locations h1', {delay:300, origin:'top'})
sr.reveal ('.reviews-container', {delay:300, origin:'top'})



// window.addEventListener('DOMContentLoaded', () => {
          
//   const rentButtons = document.querySelectorAll('.serv-btn');

//   // w hykon feh method bt3mlk remove l kol item anta bt-click 3leh

//   rentButtons.forEach(button => {
//       button.addEventListener('click', () => {
//           button.parentElement.remove();
//       });
//   });
// });



// // getting all the btns for rent cars
// const rentNowButtons = document.querySelectorAll('.serv-btn');

// // click eventlistener 
// rentNowButtons.forEach(button => {
//   button.addEventListener('click', rentCar);
// });

// // Renting a car
// function rentCar(event) {

//   const car = event.target.closest('.box');

//   // Clone the car
//   const clonedCar = car.cloneNode(true);

//   // Removing the car from the old section
//   car.remove();

//   // Append the cloned to the new section
//   const rentedSection = document.querySelector('#rented');
//   rentedSection.appendChild(clonedCar);
// }

// const menuIcon = document.getElementById('menu-icon');
//         const rentedList = document.querySelector('.rented-list');

//         // Function to add an element to the rented list
//         function addElementToRentedList(imgSrc, carName, carSpecs, price) {
//             const listItem = document.createElement('li');
//             listItem.className = 'rented-item';

//             const carImage = document.createElement('img');
//             carImage.className = 'rented-img';
//             carImage.src = imgSrc;
//             carImage.alt = carName;

//             const carInfo = document.createElement('div');
//             carInfo.className = 'rented-info';

//             const nameHeading = document.createElement('h3');
//             nameHeading.className = 'rented-name';
//             nameHeading.textContent = carName;

//             const specsParagraph = document.createElement('p');
//             specsParagraph.className = 'rented-specs';
//             specsParagraph.textContent = carSpecs;

//             // const priceParagraph = document.createElement('p');
//             // priceParagraph.className = 'price';
//             // priceParagraph.textContent = price;

//             carInfo.appendChild(nameHeading);
//             carInfo.appendChild(specsParagraph);

//             listItem.appendChild(carImage);
//             listItem.appendChild(carInfo);
//             listItem.appendChild(priceParagraph);

//             rentedList.appendChild(listItem);
//         }

//         // Event listener for menu icon click
//         menuIcon.addEventListener('click', function() {
//             // Add functionality to show or hide the rented list
//             rentedList.classList.toggle('show');
//         });

//         // Example usage of addElementToRentedList function
//         addElementToRentedList('img/car1.jpg', 'Car 1', 'Car 1 specs', '$1000/month');
//         addElementToRentedList('img/car2.jpg', 'Car 2', 'Car 2 specs', '$2000/month');
//         // Add more elements as needed


//          const rentButtons = document.querySelectorAll('.serv-btn');


//         // Add event listeners to the Rent Now buttons
//          rentButtons.forEach(button => {
//            button.addEventListener('click', addToCart);
//          });
    
//         // // Function to add car details to the cart
//          function addToCart(event) {
//            const carContainer = event.target.closest('.box');
//            const carImage  = event.target.closest('.img');
//            const carName = carContainer.querySelector('h3').innerText;
//            const carPrice = carContainer.querySelector('h2').innerText;
    
//          // Create a new list item for the cart
//            const cartItem = document.createElement('li');
//            cartItem.innerText = `${carName} - ${carPrice}`;
    
//            // Add the item to the cart
//            const cart = document.getElementById('cart-items');
//            cart.appendChild(cartItem);

//            //const carImage = document.createElement('img');
//            //carImage.className = 'rented-img';
//              //carImage.src = imgSrc;
// }



// code for the shopping cart
// const shoppingcart = document.getElementsByClassName ("shopping-cart");
// const shoppingcartimg = document.getElementById("cart");
// showcart = () => {

// console.log("done")
// }
// shoppingcartimg.addEventListener("click", showcart);


document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.querySelectorAll(".serv-btn");
  const cart = document.getElementById("cart");
  const cartItemsContainer = document.getElementById("cartItems");

  addButton.forEach(button => {
      button.addEventListener("click", function () {
          const carCard = this.closest(".carcard");
          const carName = carCard.querySelector("h3").innerText;
          const carPrice = parseFloat(this.getAttribute("data-price"));

          const cartItem = document.createElement("div");
          cartItem.classList.add("cart-item");
          cartItem.innerHTML = `
              <div class="cart-item-details">
                  <h3>${carName}</h3>
                  <p>$${carPrice.toFixed(2)}</p>
              </div>
              <button class="remove-item">Remove</button>
          `;

          const removeButton = cartItem.querySelector(".remove-item");
          removeButton.addEventListener("click", function () {
              cartItemsContainer.removeChild(cartItem);
          });

          cartItemsContainer.appendChild(cartItem);
          //console.log("item appended");
      });
  });

  cart.addEventListener("click", function () {
      cartItemsContainer.classList.toggle("cart-open");
  });
});