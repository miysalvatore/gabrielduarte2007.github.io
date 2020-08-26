// Get the body
const body = $('body');

// Get the modal
const modal = $('#project_details');

const hideModal = (popped) => {
    const modalContent = $('.modal-content');
    modalContent.animate({
        'opacity': 0
    }, 600, () => {
        modal.hide();

        modal.find('iframe').each(function () {
            $(this).attr('src', $(this).attr('src'));
        });

        $('body').removeClass('modal-open');

        if (!popped) {
            const url = new URL(document.URL);
            history.pushState({}, null, url.origin + url.pathname);
        }
    });
};

// When the user clicks anywhere outside of the modal, close it
body.on('click', event => {
    if (event.target === modal[0]) {
        hideModal();
    }
});
