$(document).ready(function() {
  $('.button-collapse').sideNav();
  $('.parallax').parallax();


  const $btn = $('.orderBtn');
  const $submit = $('#submit');


  $btn.click(function(event) {
    let $target = event.target;
    const tr = $('<tr>');
    const tdCost = $('<td>');
    const tdPrice = $('<td class="right">');
    const tBody = $('tbody');
    let item = $target.dataset.name;
    let price = $target.dataset.cost;
    let total = 0;

    tdCost.text(item);
    tdPrice.text(price);
    tr.append(tdCost, tdPrice);
    tBody.append(tr);
    totalItems(tBody, total);
  });

  $submit.click(function() {
    let check = $('#total').text();
    let success = $('.success');
    let fail = $('.fail');
    if (check) {
      alert('Order Placed');
    } else {
      fail.toggleClass('hidden');
    }
  });


  function totalItems(tBody, total) {
    let itemCosts = [];
    let itemCostNumbers = [];
    let $subTotal = $('#subTotal')
    for (let i = 1; i < $(tBody).children().children().length; i += 2) {
      itemCosts.push($($(tBody).children().children()[i]).text());
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

  function taxAndTotal(total) {
    const $tax = $('#tax');
    const $total = $('#total');
    const tax = 0.08845;
    let itemsTax = (tax * total).toFixed(2);
    let sum = (Number(itemsTax) + Number(total)).toFixed(2);
    $tax.text(itemsTax);
    $total.text(sum);
  }
});
