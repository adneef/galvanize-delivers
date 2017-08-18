$(document).ready(function() {
  console.log('ready!')
  let subtotal = 0
  let tax = 0
  let total = 0

$('.orderBtn').click(function(){
  // get item and price, make new td's and new tr,
  // append all together and append to table body

  let item = $(event.target).attr('id')
  let price = $(event.target).val()
  let td1 = $('<td>').text(item)
  let td2 = $('<td>').text('$' + price)
  let tr = $('<tr>')
  tr.append(td1, td2)
  $('.tableBody').append(tr)

  // update subtotal, tax amount, and total for each click

  subtotal += Number(price)
  tax = subtotal * .0885
  total = subtotal + tax

  $('#subtotal').text('$' + (subtotal.toFixed(2)))
  $('#tax').text('$' + tax.toFixed(2))
  $('#total').text('$' + total.toFixed(2))

})

})
