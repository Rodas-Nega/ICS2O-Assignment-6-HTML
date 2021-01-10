'use strict'

document.getElementById('deliver').addEventListener('click', pizzaOrder)

function pizzaOrder () {
  const sizeOne = document.getElementById('large').value
  // variable assigned to a large pizza
  const sizeTwo = document.getElementById('extra').value
  // variable assigned to an extra large pizza
  const toppingOne = document.getElementById('topping1').value
  // variable assigned to 1 topping
  const toppingTwo = document.getElementById('topping2').value
  // variable assigned to 2 toppings
  const toppingThree = document.getElementById('topping3').value
  // variable assgined to 3 toppings
  const toppingFour = document.getElementById('topping4').value
  // variable assigned to 4 toppings
  const menuOne = document.getElementById('size').value
  // variable assigned to value of the first selection box
  const menuTwo = document.getElementById('garnish').value
  // variable assigned to value of the second selection box
  if (menuOne === sizeOne && menuTwo === toppingOne) {
    alert('Subtotal = $7, Tax = $0.91, Final Cost = $7.91')
  } else if (menuOne === sizeOne && menuTwo === toppingTwo) {
    alert('Subtotal = $7.75, Tax = $1.01, Final Cost = $8.76')
  } else if (menuOne === sizeOne && menuTwo === toppingThree) {
    alert('Subtotal = $8.50, Tax = $1.11, Final Cost = $9.61')
  } else if (menuOne === sizeOne && menuTwo === toppingFour) {
    alert('Subtotal = $9.35, Tax = $1.22, Final Cost = $10.57')
  } else if (menuOne === sizeTwo && menuTwo === toppingOne) {
    alert('Subtotal = $11.00, Tax = $1.43, Final Cost = $12.43')
  } else if (menuOne === sizeTwo && menuTwo === toppingTwo) {
    alert('Subtotal = $11.75, Tax = $1.53, Final Cost = $13.28')
  } else if (menuOne === sizeTwo && menuTwo === toppingThree) {
    alert('Subtotal = $12.50, Tax = $1.63, Final Cost = $14.13')
  } else if (menuOne === sizeTwo && menuTwo === toppingFour) {
    alert('Subtotal = $13.35, Tax = $1.74, Final Cost = $15.09')
  }
  // conditions to check if the user selections matches to what the conditions are then it will alert the web page and show an alert of their subtotal, tax, and final cost
}
