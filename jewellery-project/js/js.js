/** HERE WE WRITE JAVASCRIPT **/

/* search field - https://www.w3schools.com/howto/howto_js_filter_lists.asp */

/* show serch bar on click */
function showSearch() {
	var search = document.getElementById("searchField");

	if (search.classList.contains("visible")) {
		search.classList.remove("visible");
	} else {
		search.classList.add("visible");
	}
}

function searchFunction() {
	// Declare variables
	var input, filter, ul, li, t, y, txtValue;
	input = document.getElementById('productName');
	filter = input.value.toUpperCase();
	ul = document.getElementById("myUL");
	li = ul.getElementsByTagName('li');

	// Loop through all list items, and hide those who don't match the search query
	for (y = 0; y < li.length; y++) {
		t = li[y].getElementsByTagName("a")[0];
		txtValue = t.textContent || t.innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
			li[y].style.display = "";
		} else {
			li[y].style.display = "none";
		}
	}
}



/** slideshow on home page - https://www.w3schools.com/howto/howto_js_slideshow.asp **/
var slideIndexFrontpage = 0;
showSlidesFrontpage();

function showSlidesFrontpage() {
	var f;
	var slidesFrontpage = document.getElementsByClassName("mySlidesFrontpage");
	for (f = 0; f < slidesFrontpage.length; f++) {
		slidesFrontpage[f].style.display = "none";
	}
	slideIndexFrontpage++;
	if (slideIndexFrontpage > slidesFrontpage.length) {
		slideIndexFrontpage = 1
	}
	try {
		slidesFrontpage[slideIndexFrontpage - 1].style.display = "block";
	} catch {
		console.log('cannot read style property')
	}
	setTimeout(showSlidesFrontpage, 5000);
}


/** mobile version for slideshow on home page - https://www.w3schools.com/howto/howto_js_slideshow.asp **/

var slideIndexMobile = 0;
showSlidesMobile();

function showSlidesMobile() {
	var m;
	var slidesMobile = document.getElementsByClassName("mySlidesMobile");
	for (m = 0; m < slidesMobile.length; m++) {
		slidesMobile[m].style.display = "none";
	}
	slideIndexMobile++;
	if (slideIndexMobile > slidesMobile.length) {
		slideIndexMobile = 1
	}
	try {
		slidesMobile[slideIndexMobile - 1].style.display = "block";
	} catch {
		console.log('cannot read style property')
	}
	setTimeout(showSlidesMobile, 5000);
}




/** filter options can be selected on shop page **/

function myFunction1() {
	var filterBtn1 = document.getElementById("filter_button1");

	if (filterBtn1.classList.contains("active_button")) {
		filterBtn1.classList.remove("active_button");
	} else {
		filterBtn1.classList.add("active_button");
	}
}

function myFunction2() {
	var filterBtn2 = document.getElementById("filter_button2");

	if (filterBtn2.classList.contains("active_button")) {
		filterBtn2.classList.remove("active_button");
	} else {
		filterBtn2.classList.add("active_button");
	}
}

function myFunction3() {
	var filterBtn3 = document.getElementById("filter_button3");

	if (filterBtn3.classList.contains("active_button")) {
		filterBtn3.classList.remove("active_button");
	} else {
		filterBtn3.classList.add("active_button");
	}
}

function myFunction4() {
	var filterBtn4 = document.getElementById("filter_button4");

	if (filterBtn4.classList.contains("active_button")) {
		filterBtn4.classList.remove("active_button");
	} else {
		filterBtn4.classList.add("active_button");
	}
}

function myFunction5() {
	var filterBtn5 = document.getElementById("filter_button5");

	if (filterBtn5.classList.contains("active_button")) {
		filterBtn5.classList.remove("active_button");
	} else {
		filterBtn5.classList.add("active_button");
	}
}

function myFunction6() {
	var filterBtn6 = document.getElementById("filter_button6");

	if (filterBtn6.classList.contains("active_button")) {
		filterBtn6.classList.remove("active_button");
	} else {
		filterBtn6.classList.add("active_button");
	}
}



/** pop up window after using contact form - https://www.w3schools.com/howto/howto_css_modals.asp **/

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("window");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the button that closes the modal
var btnClose = document.getElementsByClassName("close_button")[0];

// When the user clicks on the button, open the modal
try {
	btn.onclick = function () {
		modal.style.display = "block";
	}
} catch {
	console.log('page without pop up window button')
}


// When the user clicks on <span> (x), close the modal
try {
	span.onclick = function () {
		modal.style.display = "none";
	}
} catch {
	console.log('page without pop up window button')
}

// When the user clicks on button, close the modal
try {
	btnClose.onclick = function () {
		modal.style.display = "none";
	}
} catch {
	console.log('page without pop up window button')
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}





/** changes amount of products **/

var productAmount = 1;

function addOne() {
	productAmount++;

	document.getElementById('productAmount').innerHTML = productAmount;
	return true
}


var productAmount;

function minusOne() {
	if (productAmount > 1)
		productAmount--;

	document.getElementById('productAmount').innerHTML = productAmount;
	return true
}




/** product page hide and show product description **/

function hideFunction() {
	var paragraph = document.getElementById("description");

	if (paragraph.classList.contains("hide")) {
		paragraph.classList.remove("hide");
	} else {
		paragraph.classList.add("hide");
	}
}

function hideFunction2() {
	var paragraph = document.getElementById("details");

	if (paragraph.classList.contains("hide")) {
		paragraph.classList.remove("hide");
	} else {
		paragraph.classList.add("hide");
	}
}

function hideFunction3() {
	var paragraph = document.getElementById("shipping");

	if (paragraph.classList.contains("hide")) {
		paragraph.classList.remove("hide");
	} else {
		paragraph.classList.add("hide");
	}
}

/** in the product page changes the arrow next to description button **/
function changeArrow1() {
	var arrow = document.getElementById("arrow1");
	if (arrow.innerHTML === "▼") {
		arrow.innerHTML = "▲";
	} else {
		arrow.innerHTML = "▼";
	}
}

function changeArrow2() {
	var arrow = document.getElementById("arrow2");
	if (arrow.innerHTML === "▼") {
		arrow.innerHTML = "▲";
	} else {
		arrow.innerHTML = "▼";
	}
}

function changeArrow3() {
	var arrow = document.getElementById("arrow3");
	if (arrow.innerHTML === "▼") {
		arrow.innerHTML = "▲";
	} else {
		arrow.innerHTML = "▼";
	}
}


/* Open and close mobile menu */

function openMenu() {
	document.getElementById("overlay").style.width = "100%";
}

function closeMenu() {
	document.getElementById("overlay").style.width = "0%";
}




/* slideshow - https://www.w3schools.com/howto/howto_js_slideshow.asp */

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	if (n > slides.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = slides.length
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	try {
		slides[slideIndex - 1].style.display = "block";
	} catch {
		console.log('cannot read style property')
	}
	try {
		dots[slideIndex - 1].className += " active";
	} catch {
		console.log('cannot read className property')
	}
}
