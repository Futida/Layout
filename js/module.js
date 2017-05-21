var infograf = document.querySelectorAll(".infograf")


for (var i = 0; i < 43; i++) {
	var el = infograf[i];
	var height = [];

	for (var k = 0; k < 12; k++) {
		var random = Math.floor((Math.random() * 10));
		height.push(random)
	}

	for (var j = 0; j < height.length; j++) {
		var h = height[j];
		var span = document.createElement("span");
		span.classList.add("infograf-item");
		if (j == height.length - 1)//последний спан черный
		span.classList.add("black");
		span.style.height = h + 'px';
		el.appendChild(span);
	}
}