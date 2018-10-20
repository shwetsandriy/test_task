$(window).scroll(function function_name(argument) {
	var st = $(this).scrollTop();
	$(".vision-hand").css({
		"transform" : "translate(0%, " + st /5 + "%"
	});
});

let menu = document.getElementsByClassName('menu')[0];

function toggleMenu() {
  if (menu.className === "menu") {
    menu.className += " open";
  } else {
    menu.className = "menu";
  }
}