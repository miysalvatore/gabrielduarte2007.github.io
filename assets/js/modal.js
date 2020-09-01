// Get the body
const body = $('body');

// Get the modal
const modal = $('#project_details');

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

        if (!popped) {
            const url = new URL(document.URL);
            const nextUrl = lastSearchUrl || url.origin + url.pathname;

            // TODO: Apenas mudar a URL não funciona, precisa disparar para adicionar as chips de busca
            history.pushState({}, null, nextUrl);
        }
    });
};

// When the user clicks anywhere outside of the modal, close it
body.on('click', function (event) {
    if (event.target === modal[0]) {
        hideModal();
    }
});
