

function loadData(){
	var item = localStorage.getItem('_item');
	if (!item) return false;
	item = atob(item);

	item = JSON.parse(item);
	
	fillFields(item.title, item.image);
	alert(false);
	return true;

}

function fillFields(a, b){
	var fill = document.getElementById("fill");
	var header = document.createElement("H4");
	var name = document.createTextNode(a);
	header.appendChild(name);
	var image = document.createElement("IMG");
	image.src = b; 

	fill.appendChild(header);
	fill.appendChild(image);


	return true;
}

function loadCart(n = true){
	if (n === false){
		var cart = [];
		localStorage.setItem("cart", JSON.stringify(cart));
		return cart;
	}
	else{
		var temp = JSON.parse(localStorage.getItem("cart"))
		return temp;
	}

}

function addToCart (){

	
	var item = localStorage.getItem('_item');
	item = atob(item);

	item = JSON.parse(item);

	var quantity = document.getElementById("quantity");
	var quantitySelected = quantity.value;

	var size = document.getElementById("size");
	var sizeSelected = size.value;

	var orien = document.getElementById("orien");
	var orienSelected = orien.value;

	var cost = generatePrice(false);
	var cash = 0.00;
	if (cost === "$9.00"){
		cash = 9.00;
	}
	if (cost === "$12.00"){
		cash = 12.00;
	}
	if (cost === "$15.00"){
		cash = 15.00;
	}


	var cartItem = {
		name: item.title,
		quantity: quantitySelected,
		size: sizeSelected,
		orientation: orienSelected,
		price: cost,
		money: cash
	};
	cart = loadCart(true);
	cart.push(cartItem);

	localStorage.setItem("cart", JSON.stringify(cart));


	alert(true);
	
	return true;
}


function generatePrice(b = true){
	var price = "0";
	var q = document.getElementById("quantity");
	var quantity = q.value;

	var s = document.getElementById("size");
	var size = s.value;

	if (quantity === "15" && size == 'Medium'){
		price = "$9.00";
	}

	else if (quantity === "9" && size == 'Large'){
		price = "$12.00";
	}
	else if(quantity === "12" && size === 'Medium'){
		price = "$12.00";
	}
	else{
		price = "$15.00";
	}
	if (b){
		placePrice(price);
	}

	return price;
}

function placePrice(price){
	var fill = document.getElementById("price");
	var header = document.createElement("H4");
	var name = document.createTextNode(price);
	header.append(name);
	fill.appendChild(header);

	return true;
}

function removePrice(){
	var fill = document.getElementById("price");
	var y = fill.childNodes[0];
	fill.removeChild(y);
	return true;
}

function alert(on = false){
	var fill = document.getElementById("alert");
	if (on == false){
		fill.style.display = 'none';
	}
	else{
		fill.style.display = '';
	}

	return true;
}

