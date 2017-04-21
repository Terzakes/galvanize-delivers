$(document).ready(function(){
  $('.button-collapse').sideNav();
  $('.parallax').parallax();
  var $btn = $('.orderBtn');

  $btn.click(function (event) {
    var $target = event.target;
    var tr = $('<tr>');
    var tdCost = $('<td>');
    var tdPrice = $('<td class="right">');
    var tBody = $('tbody');
    let item = $target.dataset.name;
    let price = $target.dataset.cost;
    let total = 0;

    tdCost.text(item);
    tdPrice.text(price);
    tr.append(tdCost, tdPrice);
    tBody.append(tr);
    totalItems(tBody, total);
  });

  function totalItems (tBody, total) {
    let itemCosts = [];
    let itemCostNumbers = [];
    let $subTotal = $('#subTotal')
    for (let i = 1; i < $(tBody).children().children().length; i+=2) {
      itemCosts.push($($(tBody).children().children()[i]).text());
      console.log(itemCosts);
    }
    for (let i = 0; i < itemCosts.length; i++) {
      let val = [];
      val = itemCosts[i].split('');
      val.shift();
      itemCostNumbers.push(Number(val.join('')));
    }

    total = itemCostNumbers.reduce(function(a, b) {
      return a + b;
    });
    $subTotal.text('');
    $subTotal.text(total);
    taxAndTotal(total);
  }
  function taxAndTotal (total) {
    let $tax = $('#tax');
    let $total = $('#total');
    let tax = 0.08845;
    let itemsTax = (tax * total).toFixed(2);
    let sum = (Number(itemsTax) + Number(total)).toFixed(2);
    console.log(total);
    console.log(tax);
    console.log(itemsTax);
    $tax.text(itemsTax);
    $total.text(sum);
  }
});
