var button = document.querySelector("button");
var isTomato = false;

button.addEventListener("click", function(){
	document.body.classList.toggle("tomato");
})


// button.addEventListener("click", function(){
// 	if(isTomato){
// 		document.body.style.background = "white";
// 	} else {
// 		document.body.style.background = "tomato";
// 	}
// 	isTomato = !isTomato;
// });