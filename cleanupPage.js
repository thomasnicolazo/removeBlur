/* This snippet can be used to remove paywall on the html,
if it is on the clien side */

function cleanupPage() {
	/* POP-UP */
	// find the modal elemment
	const modal = document.getElementById('modal-OVERLAPABLE');
	// If the Modal exist remove it
	if(modal){
		modal.remove();
	}
	
	// remove blur from the content
	const postCcontent = document.getElementById('post_content');
	if(postContent){
		postContent.style.filter = 'none';
	}	
	//remove any other blur effects (in case there are multiple)
	const blurredElements = document.querySelectorAll('[style*="blur"]');
	blurredElements.forEach( element => {
		element.style.filter = 'none';
	});

	/* POP-UP */
	// also remove any modal-related classes from the body 
	document.body.classList.remove('modal-open');
	// restore scrolling on the body if it was  disabled
	document.body.style.overflow = 'initial';
	
}

// run the function when the DOM if fully loaded
document.addEventListener('DOMContentLoaded',cleanupPage);

// Also run it immediatly in case the DOM is already loaded
cleanupPage();

