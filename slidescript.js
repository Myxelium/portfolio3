//https://raw.githubusercontent.com/Azaaxin/portfolio-content/master/README.md
function add_bootstrap() {
	$("table").attr("class", "table table-striped table-dark")
	$("th").attr("scope", "col");
	$("tbody tr td").attr("scope", "row");
};
$("#mySidebar>a:not(:nth-child(-n+2))").click(function() {
	var url;
	document.getElementById("slider").style.transform = "translateX(-100vw)";
	document.getElementById("agile_div").style.transform = "translateX(0vw)";
	document.querySelector(".scrollToTop").style.display = "none";
	document.getElementById("agile_div").style.display = "flex";
	document.getElementById("agile_div").style.width = "100%";
	document.getElementById("slider").style.width = "0px";
	document.getElementById("slider").style.height = "0px";
	$.get("https://raw.githubusercontent.com/Myxelium/portfolio-content/master/" + this.text.toLowerCase().replace(/\s/g, '') + ".md", function(data) {
		document.getElementById('ajaxcontent').innerHTML = marked.parse(data);
		add_bootstrap();
	});
	if($(window).width() < 800) {
		$("#mySidebar").css("width", "0px");
	} else {
		$("#mySidebar").css("width", "250px");
	}
	$(".sideline, .boxes").css("margin-right", "0px");
	$("#agile_div").removeClass("hidediv");
	document.getElementsByTagName("body")[0].style.overflowY = "scroll";
});
$("#backarrow, #home").click(function() {
	document.getElementById("agile_div").style.width = "0%";
	document.getElementById("slider").style.width = "100%";
	document.getElementById("slider").style.height = "unset";
	document.getElementById("slider").style.display = "block";
	document.getElementById("slider").style.transform = "none";
	document.getElementById("agile_div").style.transform = "translateX(100vw)";
	document.querySelector(".scrollToTop").style.display = "flex";
	$("#agile_div").addClass("hidediv");
	document.getElementsByTagName("body")[0].style.overflowY = "hidden ";
});