'use strict'

document.getElementById('deliver').addEventListener('click', pizzaOrder)

function pizzaOrder () {
  const size_one = document.getElementById('large').value
  // variable assigned to a large pizza
  const size_two = document.getElementById('extra').value
  // variable assigned to an extra large pizza
  const topping_one = document.getElementById('topping1').value
  // variable assigned to 1 topping
  const topping_two = document.getElementById('topping2').value
  // variable assigned to 2 toppings
  const topping_three = document.getElementById('topping3').value
  // variable assgined to 3 toppings
  const topping_four = document.getElementById('topping4').value
  // variable assigned to 4 toppings
  const menu_one = document.getElementById('size').value
  // variable assigned to value of the first selection box
  const menu_two = document.getElementById('garnish').value
  // variable assigned to value of the second selection box
  if (menu_one === size_one && menu_two === topping_one) {
    alert('Subtotal = $7, Tax = $0.91, Final Cost = $7.91')
  } else if (menu_one === size_one && menu_two === topping_two) {
    alert('Subtotal = $7.75, Tax = $1.01, Final Cost = $8.76')
  } else if (menu_one === size_one && menu_two === topping_three) {
    alert('Subtotal = $8.50, Tax = $1.11, Final Cost = $9.61')
  } else if (menu_one === size_one && menu_two === topping_four) {
    alert('Subtotal = $9.35, Tax = $1.22, Final Cost = $10.57')
  } else if (menu_one === size_2 && menu_two === topping_one) {
    alert('Subtotal = $11.00, Tax = $1.43, Final Cost = $12.43')
  } else if (menu_one === size_2 && menu_two === topping_two) {
    alert('Subtotal = $11.75, Tax = $1.53, Final Cost = $13.28')
  } else if (menu_one === size_2 && menu_two === topping_three) {
    alert('Subtotal = $12.50, Tax = $1.63, Final Cost = $14.13')
  } else if (menu_one === size_2 && menu_two === topping_four) {
    alert('Subtotal = $13.35, Tax = $1.74, Final Cost = $15.09')
  }
  // conditions to check if the user selections matches to what the conditions are then it will alert the web page and show an alert of their subtotal, tax, and final cost
}
