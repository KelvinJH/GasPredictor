const img_cont = document.querySelector(".image_container");
const about = document.querySelector(".about");
const home = document.querySelector(".home");
const headline = document.querySelector(".gen_prediction");
const slider = document.querySelector(".slider");

const tl = new TimelineMax();

tl.fromTo(img_cont, 2, {height: "0%"}, {height: '80%', ease: Power2.easeInOut}
	).fromTo(slider, 2, {x: "-100%"}, {x: '0%', ease: Power2.easeInOut}, "-=2")
	.fromTo(home, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=1")
	.fromTo(about, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=0.5")
	.fromTo(headline, 0.5, {opacity: 0, x: -30}, {opacity: 1, x: 0}, "-=1.5");

var chartLoaded = false;
window.addEventListener("load", function(){
	home.addEventListener("click", function(){
		window.location.pathname = "";
		window.reload();
	});

	about.addEventListener("click", function(){
		window.location.pathname = "about";
		window.reload();
	});

	headline.addEventListener("click", insertChart);
		
	



});
function insertChart(){
	let img = document.querySelector(".image_container img");
	img.remove();
	$('.image_container').after("<iframe id='eia_widget' style='width:100%;height:80%' src='//www.eia.gov/opendata/embed/iframe.php?series_id=PET.EER_EPMRR_PF4_Y05LA_DPG.D' load='iframe_load'></iframe>");
	chartLoaded = !chartLoaded;
	checkChart()
}

function checkChart(){
	headline.removeEventListener("click", insertChart );
}