// Get the body
const body = $('body');

// Get the modal
const modal = $('#project_details');

var lastScrollY;

var isHidingModal;

const hideModal = function (popped) {
    isHidingModal = true;

    if (!popped) {
        const url = new URL(document.URL);
        const nextUrl = lastSearchUrl || url.origin + url.pathname;

        history.pushState({}, null, nextUrl);

        if (lastSearchUrl) {
            loadCurrentUrl();
        }
    }

    $('body').removeClass('modal-open');

    window.scrollTo(0, lastScrollY);

    const modalContent = $('.modal-content');

    modalContent.animate({
        'opacity': 0
    }, 600, function () {
        modal.hide();

        modal.find('iframe').each(function () {
            $(this).attr('src', $(this).attr('src'));
        });

        isHidingModal = false;
    });
};

// When the user clicks anywhere outside of the modal, close it
body.on('click', function (event) {
    if (event.target === modal[0]) {
        hideModal();
    }
});

body.on('keydown', function (event) {
    const isShowingModal = modal.css('display') !== 'none';

    if (isShowingModal
        && !isHidingModal
        && event.key === 'Escape') {
        hideModal();
    }
});
