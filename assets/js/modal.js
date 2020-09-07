// Get the body
const body = $('body');

// Get the modal
const modal = $('#project_details');

var lastScrollY;

const hideModal = function (popped) {
    const modalContent = $('.modal-content');
    modalContent.animate({
        'opacity': 0
    }, 600, function () {
        modal.hide();

        modal.find('iframe').each(function () {
            $(this).attr('src', $(this).attr('src'));
        });

        $('body').removeClass('modal-open');

        window.scrollTo(0, lastScrollY);

        if (!popped) {
            const url = new URL(document.URL);
            const nextUrl = lastSearchUrl || url.origin + url.pathname;

            history.pushState({}, null, nextUrl);

            if (lastSearchUrl) {
                loadCurrentUrl();
            }
        }
    });
};

// When the user clicks anywhere outside of the modal, close it
body.on('click', function (event) {
    if (event.target === modal[0]) {
        hideModal();
    }
});
