$(document).ready(function() {
  console.log('ready!')
  let subtotal = 0
  let tax = 0
  let total = 0
  let cart = []

$('.orderBtn').click(function(){
  // get item and price, make new td's and new tr,
  // append all together and append to table body

  let item = $(event.target).attr('id')
  let price = $(event.target).val()

  console.log(item);

  if(cart.includes(item)) {

  let clickedQty = Number($(`td:contains(${item})`).next().text())

  $(`td:contains(${item})`).next().text(clickedQty+=1)

  } else {
  let tdItem = $('<td>').text(item)
  let tdQty = $('<td>').text(1)
  let tdPrice = $('<td>').text('$' + price)
  let tr = $('<tr>')
  tr.append(tdItem, tdQty, tdPrice)
  $('.tableBody').append(tr)
  cart.push(item)

  }
  // update subtotal, tax amount, and total for each click

  subtotal += Number(price)
  tax = subtotal * .0885
  total = subtotal + tax

  $('#subtotal').text('$' + (subtotal.toFixed(2)))
  $('#tax').text('$' + tax.toFixed(2))
  $('#total').text('$' + total.toFixed(2))

})

// submitBtn functionality and modal call

$('.submitBtn').click(function(){
  if (cart.length === 0) {
    $('#myModal').modal('toggle')
  } else if(cart.length > 0){
    $('.modal-body').children().remove()
    let orderClone = $('.orderAndInfo').clone()
    orderClone.find('button').remove()
    orderClone.find('aside').remove()
    orderClone.removeClass('col-md-4')
    orderClone.find('table').css('width', '95%')
    $('.modal-body').append(orderClone)
    $('#modalConfirm').text('Confirm Order')
    console.log($('#modalConfirm'));
    $('#modalCancel').text('Cancel')
    $('#myModal').modal('toggle')
  }
})

modal confirm update

$('#modalConfirm').click(function(){
  $('.modalBody').children().remove()
  $('.modalBody').append($('<p/>'))
  $('.modalBody').children().text(`Your order will arrive as soon as this site exists!
    If you gave us an email, your receipt has been emailed.`)

  $('#myModal2').modal('toggle')

})

})
