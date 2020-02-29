// Take website's url
websiteUrl = window.location;

// Create linkedin's button link
linkedinUrl = 'https://www.linkedin.com/shareArticle?mini=true&url='+websiteUrl+'';

document.getElementById("linkedin-btn").setAttribute("href", linkedinUrl);

/*-- Copy link btn --*/
$('.btn-copy-url').on('click', function() {
	
    var text = $(this).parent().find('.input-copy-url');
    text.val(websiteUrl);
    var alert = $('#copied-alert-message');
    // Select the text
  	text.select(); 

  	// Copy it
  	document.execCommand('copy');

  	// Remove focus from the input
  	text.blur();

  	// Show message
  	alert.removeClass('d-none');
  	$('#share-link-text').addClass('d-none');
  
  	// Hide message after 2 seconds
  	setTimeout(function () {
    	alert.addClass('d-none');
    	$('#share-link-text').removeClass('d-none');
  	}, 2000);

});