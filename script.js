$(document).ready(function() {
	var baseUrl = "https://api.github.com/users/Myxelium/repos";
	$.get(baseUrl, function(response) {
		$.each(response, function(i, obj) {
			let hidden = JSON.stringify(obj.description);
			if(hidden.includes("-hidden") != true) {
				var html = '<div data-toggle="modal" data-target="#' + i + 'modal' + '" data-aos="fade-up" class="wrapper">' + '<div class="shard" id="' + obj.name + '"> ' + '<p>' + obj.name + ' </p>' + '<div class="gradi_box"><div class="text_content"><b>>' + obj.name + '</b><div class="card_desc">' + obj.description + '</div></div></div>' + '<div class="chardnumber">' + i + '</div> ' + '</div> ' + '<div class="bgborder"></div> ' + '</div> ' + '<!-- Modal --> ' + '<div class="modal fade" id="' + i + 'modal' + '" role="dialog"> ' + '<div class="modal-dialog modal-lg"> ' + '<div class="modal-content"> ' + '<div class="modal-header">' + '<h4 class="modal-title">' + obj.name + '</h4>' + '<button type="button" class="close" data-dismiss="modal">&times;</button>' + '</div> ' + '<div class="modal-body"> ' + '<p>' + obj.description + '</p> ' + '</div> ' + '<div class="modal-footer" id="' + i + 'btn' + '"> ' + '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button> ';
				var html_end = '</div> ' + '</div> ' + '</div> ' + '</div>' + '<!-- End modal -->';
				$('#boxes-nodes').append(html + html_end)
				jQuery(".gradi").fitText(0.5);
				var info = "https://raw.githubusercontent.com/Myxelium/" + obj.name + "/master/information.azaa";
				$.get(info, function(response) {
					let hidden = JSON.stringify(response.shard.display);
					if(hidden.includes("true")) {
						$('#' + obj.name).css("background-image", "url(" + response.shard.image + ")");
						$('#' + obj.name).css("background-size", "cover");
						$('#' + obj.name).css("background-position", "unset");
						$('#' + obj.name).css("background-position-x", "center");
					}
					websitename = JSON.stringify(response.shard.website);
					if(websitename != "") {
						var html_button = '<button type=\"button\" class=\"btn btn-default\" onclick=\"window.location.href =\'' + response.shard.website + '\';\">Website</button>';
						$('#' + i + 'btn').append(html_button);
					}
				}, 'json')
			}
		});
	}, 'json')
});
if($(window).width() < 800) {
	$("#mySidebar").css("width", "0px");
	$(".sideline, .boxes").css("margin-left", "0px");
	$("#mySidebar").css("right", "0px");
	$(".closebtn").css("display", "block");
	$(".hamburger").css("display", "block");
	$("#mySidebar").css("right", "0px");
	$("#mySidebar").css("left", "unset");
	$("#ajaxcontent").css("margin-left", "0");
	$(".logotext").css("margin-left", "0px");
	$(".scrollToTop").css("margin-left", "0px");
} else {
	$(".sidebar").css("width", "250px");
	$(".sideline, .boxes").css("margin-right", "0px");
	$(".sideline, .boxes").css("margin-left", "250px");
	$(".closebtn").css("display", "none");
	$(".hamburger").css("display", "none");
	$("#mySidebar").css("left", "0px");
	$("#mySidebar").css("right", "unset");
	$("#ajaxcontent").css("margin-left", "250px");
	$(".logotext").css("margin-left", "260px");
	$(".scrollToTop").css("margin-left", "260px");
}
$(window).resize(function() {
	if($(window).width() < 800) {
		$("#mySidebar").css("width", "0px");
		$(".sideline, .boxes").css("margin-left", "0px");
		$("#mySidebar").css("right", "0px");
		$(".closebtn").css("display", "block");
		$(".hamburger").css("display", "block");
		$("#mySidebar").css("right", "0px");
		$("#mySidebar").css("left", "unset");
		$("#ajaxcontent").css("margin-left", "0");
		$(".logotext").css("margin-left", "0px");
		$(".scrollToTop").css("margin-left", "0px");
	} else {
		$(".sidebar").css("width", "250px");
		$(".sideline, .boxes").css("margin-right", "0px");
		$(".sideline, .boxes").css("margin-left", "250px");
		$(".closebtn").css("display", "none");
		$(".hamburger").css("display", "none");
		$("#mySidebar").css("left", "0px");
		$("#mySidebar").css("right", "unset");
		$("#ajaxcontent").css("margin-left", "250px");
		$(".logotext").css("margin-left", "260px");
		$(".scrollToTop").css("margin-left", "260px");
	}
});
$(".hamburger, .hamburger span").click(function() {
	if($(window).width() < 800) {
		$("#mySidebar").css("width", "250px");
		$("#mySidebar").css("float", "right");
		$(".sideline, .boxes").css("margin-right", "250px");
	} else {
		$(".hamburger").css("display", "none");
	}
});
$(".closebtn").click(function() {
	if($(window).width() < 800) {
		$("#mySidebar").css("width", "0px");
		$(".sideline, .boxes").css("margin-right", "0px");
	} else {
		$(".closebtn").css("display", "none");
	}
});
$(document).mouseup(function(e) {
	let menu = $("#mySidebar, .hamburger, .hamburger span");
	if(!menu.is(e.target) && menu.has(e.target).length === 0) {
		if($(window).width() < 800) {
			$("#mySidebar").css("width", "0px");
			$(".sideline, .boxes").css("margin-right", "0px");
		}
	}
});
$(".scrollToTop").click(function() {
	window.scrollTo(0, 0);
});
var bar = document.getElementsByClassName('sideline');
new simpleParallax(bar, {
	orientation: 'down',
	customWrapper: '#slider HTML',
	maxTransition: 90
});