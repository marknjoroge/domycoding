window.onscroll = function () {
	if (window.pageYOffset == 0) {
		document.getElementById("navbar").style.top = "60px";
		// document.getElementById("top-nav-part").style.top = "0px";
		document.getElementById("navbar").style.backgroundColor = "#C6CEBF";
	} else {
		document.getElementById("navbar").style.top = "0px";
		document.getElementById("navbar").style.width = "100%";
		document.getElementById("navbar").style.borderRadius = "0";
		// document.getElementById("top-nav-part").style.top = "-90px";
		document.getElementById("navbar").style.backgroundColor = "white";
	}
}
