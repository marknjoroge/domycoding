var prevScrollpos = window.pageYOffset;

window.onscroll = function () {
	var currentScrollPos = window.pageYOffset;
	if (prevScrollpos > currentScrollPos) {
		document.getElementById("navbar").style.top = "90px";
		// document.getElementById("top-nav-part").style.top = "0px";
		document.getElementById("navbar").style.backgroundColor = "silver";
	} else {
		document.getElementById("navbar").style.top = "0px";
		// document.getElementById("top-nav-part").style.top = "-90px";
		document.getElementById("navbar").style.backgroundColor = "white";
	}
	prevScrollpos = currentScrollPos;
}
