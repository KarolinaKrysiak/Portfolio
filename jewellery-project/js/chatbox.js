/** chatbox **/

/** Chat box based on example on codepe.io by Mehmet mert
link: https://codepen.io/mehmetmert/pen/zbKpv **/

(function() {

	$('#live-chat header').on('click', function() {

		$('.chat').slideToggle(300, 'swing');

	});

	$('.chat-close').on('click', function(e) {

		e.preventDefault();
		$('#live-chat').fadeOut(300);

	});

}) ();