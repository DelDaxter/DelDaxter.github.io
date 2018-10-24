function greet() {
	window.alert("Hello ! ");
}
function init() {
	document.getElementById("first").src = "icons/flower2.png";
	let images = document.getElementById("container").getElementsByTagName("img");
	images[1].src = "icons/flower2.png";
	images[3].src = "icons/flower2.png";

	document.getElementById("ht").innerHTML = "Your are doing great!";

	let image = document.createElement("img");
	image.src="icons/flower2.png";
	let im = document.getElementById("new_element");
	im.appendChild(image);

	let spans = document.getElementById("rainbow").getElementsByTagName('span');
	let colors = ["red", "orange","yellow","green","blue","purpule","pink"];

	for (var i = spans.length - 1; i >= 0; i--) {
		spans[i].style.color = colors[i];
	}

	var changeSrc = function(event) {
		let recup=event.target.src.search(/flower\d\.png$/);
	  if (event.target.src.slice(recup)=== "flower1.png") {
	    event.target.src = "icons/flower2.png";
	  }
	  else if (event.target.src.slice(recup)=== "flower2.png") {
	    event.target.src = "icons/flower1.png";
	  }
	};

	document.getElementById("event").addEventListener("mouseover", changeSrc);
}