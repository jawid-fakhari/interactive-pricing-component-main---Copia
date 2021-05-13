
var slider = document.getElementById("myRange");
var output = document.getElementById("value");

var pricePerMonth = document.getElementById("price");

output.innerHTML = slider.value;
pricePerMonth.innerHTML = slider.value * 0.16;

slider.oninput = function() {
    output.innerHTML = this.value;
    pricePerMonth.innerHTML = this.value * 0.16;
}

// change the value of linear-gradient in range slidet
slider.addEventListener("mousemove", function() {
    var x = slider.value;
    var color = 'linear-gradient(90deg, hsl(174, 77%, 80%)' + x + '%, hsl(224, 65%, 95%)' + x + '%)';
    slider.style.background = color;
});