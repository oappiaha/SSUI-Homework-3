function showCart(){

	var cart = JSON.parse(localStorage.getItem("cart"));
	
	if (cart.length === 0){
		return 0;
	}
	for (var i = 0; i < cart.length; i++){
		var item = cart[i];
		var fill = document.getElementById("cartTable");
		var table = document.createElement("TR");
		var col1 = document.createElement("TD");
		var col2 = document.createElement("TD");
		var col3 = document.createElement("TD");
		var col4 = document.createElement("TD");
		var col5 = document.createElement("TD");
		var col6 = document.createElement("TD");

		var name = document.createTextNode(item.name);
		col1.append(name);

		var quantity = document.createTextNode(item.quantity);
		col2.append(quantity);

		var size = document.createTextNode(item.size);
		col3.append(size);

		var o = document.createTextNode(item.orientation);
		col4.append(o);

		var price = document.createTextNode(item.price);
		col5.append(price);

		var remove = document.createTextNode("X");
		col6.append(remove);

		table.appendChild(col1);
		table.appendChild(col2);
		table.appendChild(col3);
		table.appendChild(col4);
		table.appendChild(col5);
		table.appendChild(col6);

		fill.appendChild(table);

	}
	return cart.length;
}

function updateCart(){

}

function removeItem(){



}