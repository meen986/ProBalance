//top to bottom

$(document).ready(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
			$('#back-to-top').fadeIn();
		} else {
			$('#back-to-top').fadeOut();
		}
	});
	// scroll body to 0px on click
	$('#back-to-top').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 400);
		return false;
	});
});

// to include header footer sidebar bottombar starts
fetch('includes/header.html')
	.then(response => response.text()) // Convert the response to text
	.then(data => {
		document.getElementById('header').innerHTML = data; // Insert the content into the div
	})
	.catch(error => console.error('Error fetching the HTML:', error));

fetch('includes/footer.html')
	.then(response => response.text()) // Convert the response to text
	.then(data => {
		document.getElementById('footer').innerHTML = data; // Insert the content into the div
	})
	.catch(error => console.error('Error fetching the HTML:', error));

fetch('includes/sidebar.html')
	.then(response => response.text()) // Convert the response to text
	.then(data => {
		document.getElementById('sidebar').innerHTML = data; // Insert the content into the div
	})
	.catch(error => console.error('Error fetching the HTML:', error));

fetch('includes/bottombar.html')
	.then(response => response.text()) // Convert the response to text
	.then(data => {
		document.getElementById('bottombar').innerHTML = data; // Insert the content into the div
	})
	.catch(error => console.error('Error fetching the HTML:', error));

// to include header footer sidebar bottombar ends

// page animation
window.onload = function () {
	scrolly();
};