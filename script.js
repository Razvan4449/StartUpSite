// var totalAfisare = document.querySelector(".totalAfisare");
// var popUpProduse = document.querySelector(".popUpProduse");

let total = 30;


$(document).ready(function () {
	const totalEl = $('.checkout-total span');

	$('#shop').hide();

	$('.show-cart').click(function() {
		$('#shop').slideToggle();
	});

	$('.buy-product').click(function() {
		const data = $(this).data();
		const price = data.price;
		const operation = data.operation;
		const id = data.id;
		const quantityEl = $('.product-quantity' + id);
		const priceEl = $('.product-price' + id);

		if (operation === '-') {
			const currentPrice = parseInt(priceEl.text());
			const currentQuantity = parseInt(quantityEl.text());
							
			if (currentQuantity > 0) {
				quantityEl.text(currentQuantity - 1);
				priceEl.text(currentPrice - price);
				total -= price;

				totalEl.text(total);
			}			
		} else {
			if (operation === '+') {				
				const currentPrice = parseInt(priceEl.text());
				const currentQuantity = parseInt(quantityEl.text());
				
				quantityEl.text(currentQuantity + 1);
				priceEl.text(currentPrice + price);
				
				total += price;
				totalEl.text(total);
			} else {
				if (operation === 'x') {		
					const currentPrice = parseInt(priceEl.text());
					const currentQuantity = parseInt(quantityEl.text());

					if (currentQuantity > 0) {
						quantityEl.text('0');
						priceEl.text('0');		
						total = total - currentPrice;
						totalEl.text(total);
					}
				}
			}
		}
	});	
})
