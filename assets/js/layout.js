// Animate scroll
const moveTo = (
    element,
    options = {
        container: undefined,
        callback: undefined
    }
) => {
    if (!options.container) {
        options.container = $('html, body');
    }

    const callbackWrapper = () => {
        if (options.callback) {
            options.callback();
        }
    }

    options.container
        .animate({
            scrollTop: element.offset().top - 87
        }, 'slow', callbackWrapper);
};

$(function () {
    // Project Share Link
    const projectShareLink = $('.project__share_link--project');

    // Search Share Link
    const searchShareLink = $('.project__share_link--search');
    searchShareLink.hide();

    // Modal display
    const projectDetailsModal = $('#project_details');

    // Button Share Link
    const projectUrlInput = $('.project__share_link_url');
    const searchUrlInput = $('.project__search_share_link_url');

    // Share Link copy
    const projectShareLinkCopy = $('.project__share_link_copy');
    const searchShareLinkCopy = $('.project__search-share_link_copy');

    const selectProjectUrlInput = () => {
        moveTo(projectUrlInput, {
            container: projectDetailsModal,
            callback: () => {
                projectUrlInput.focus();
            },
        });

        projectUrlInput[0].select();
        projectUrlInput[0].setSelectionRange(0, 99999); // For mobile devices
    };

    const selectSearchUrlInput = () => {
        moveTo(searchUrlInput, {
            container: projectDetailsModal,
            callback: () => {
                searchUrlInput.focus();
            },
        });

        searchUrlInput[0].select();
        searchUrlInput[0].setSelectionRange(0, 99999); // For mobile devices
    };

    $('.projectUrlInput').on('click', selectProjectUrlInput);

    $('.project__share_buttons-link').on('click', function () {
        const duration = 200;

        if (projectShareLink.css('display') === 'none') {
            projectShareLink.slideDown(duration, () => {
                selectProjectUrlInput();
                projectShareLinkCopy.trigger('click');
            });
        } else {
            projectShareLink.slideUp(duration);
        }
    });

    $('.project-share-search__button').on('click', function () {
        const duration = 200;

        if (searchShareLink.css('display') === 'none') {
            searchShareLink.fadeIn(duration, () => {
                selectSearchUrlInput();
                searchShareLinkCopy.trigger('click');
            });
        } else {
            searchShareLink.fadeOut(duration);
        }
    });

    // Project Share Link Copy

    projectShareLinkCopy.popover();

    body.on('click', () => {
        projectShareLinkCopy.popover('hide');
    });

    projectShareLinkCopy.on('click', function (event) {
        projectShareLinkCopy.popover('show');

        selectProjectUrlInput();

        document.execCommand('copy'); // Copy the text inside the text field

        event.stopPropagation();
    });

    // Search Share Link Copy

    searchShareLinkCopy.popover();

    body.on('click', () => {
        searchShareLinkCopy.popover('hide');
    });

    searchShareLinkCopy.on('click', function (event) {
        searchShareLinkCopy.popover('show');

        selectProjectUrlInput();

        document.execCommand('copy'); // Copy the text inside the text field

        event.stopPropagation();
    });
});
