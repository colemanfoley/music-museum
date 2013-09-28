$("#museum-container").isotope({
	itemSelector: '.item', 
	masonry: {
   		columnWidth: 120,
    	cornerStampSelector: '.corner-stamp'
  }
});

randomBg = function () { 
	var arrayOfImgs = ["http://missrosen.files.wordpress.com/2010/05/312a_43.jpg", "http://positivemed.com/wp-content/uploads/2012/05/bruce-lee-2.jpg", "http://www.robyntwomey.com/data/photos/1484_1sideshow12058__52_color_corrected.jpg", "http://occupyrva.org/files/2011/10/oakland-ga.jpg"];
	var randNum = Math.floor(Math.random() * arrayOfImgs.length);

	var randURL = arrayOfImgs[randNum];

	$("body").css("background-image", "url('" + randURL + "')");
}
$( document ).ready(function() {
  randomBg();
});