document.addEventListener("DOMContentLoaded", function(event) {
	resetScreen();
	window.addEventListener('resize', resetScreen);

	
});



function resetScreen() {
	var winHeight = window.innerHeight;
	winHeight = winHeight - document.getElementById("header").offsetHeight;
	winHeight = winHeight - document.getElementById("footer").offsetHeight;
	var pageContainer = document.getElementById("page_container");
	pageContainer.style.minHeight = winHeight + "px";
	winHeight = winHeight - pageContainer.getElementsByClassName("title").item(0).offsetHeight -22;
	pageContainer.getElementsByClassName("page_body").item(0).style.minHeight = winHeight + "px";
	winHeight = winHeight - document.getElementById("main-container").offsetTop + pageContainer.getElementsByClassName("page_body").item(0).offsetTop;
	document.getElementById("main-container").style.minHeight = winHeight + "px";
}

function addQuestion(exampleID) {
	if (document.getElementById(exampleID)) {
		var question_html = document.getElementById(exampleID).innerHTML;
		document.getElementById('questionsContainer').innerHTML += question_html;
	}
}

function addChild(exampleID) {
	if (document.getElementById(exampleID)) {
		var child_question = document.getElementById(exampleID).innerHTML;
		document.getElementById('childContainer').innerHTML += child_question;
	}
}

