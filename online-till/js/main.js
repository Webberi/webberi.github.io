$(document).ready(function () {
	let modalLink = $('[data-toggle="modal"]');
	let modal = $('.modal');
	let modalClose = $('.modal-close');

	modalLink.on('click', function openModal(e) {
		e.preventDefault();
		$('body').addClass('no-scroll');
		$('.modal-header__title').text($(this).attr('data-title'));
		modal.toggleClass('modal_visible');
	})

	modalClose.on('click', function closeModal(e) {
		e.preventDefault();
		$('body').removeClass('no-scroll');
		modal.toggleClass('modal_visible');
	})

});