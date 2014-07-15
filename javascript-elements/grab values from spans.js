
function populateInput1() {
	//retrieve select data as well as input value
    var name = $("span#name1").html();
    var formfield1 = document.getElementById('hidden-form-field1');
    var tdL = $( "#select-option-1 option:selected" ).text();
    var tdD = $( "#select-option-2 option:selected" ).text();
	var tdG = document.getElementById('inputvalue1').value;

	// create string to pass along to form
	var name = "Variable 1" + name + " Variable 2" + tdL + " Variable 3" + tdD + " Variable 4" + tdG;
	
	//Insert Custom String into order form
	formfield1.value = name;
	
	//get price date from price span
    var price = $("span#price1").html();
	//remove currency signs
	price = price.replace('$','');
	price = price.replace('€','');
	//format price variable into number format
	price = Number(price);
	//set variable for price input
    var pricename = document.getElementById('price');
	//insert variable into price input
	pricename.value = price;
}

	//attach button to function
$(function () {
	$('#b1').on('click', populateInput1);
});