alert("mew");
function ready(){
	window.oninput = function oninputColor() {
	var newColor=document.getElementById("color").value;
	document.body.setAttribute("class", "newcolor");
	
}
}
window.onload=ready;