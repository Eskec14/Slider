$(document).ready(() => {
    const leftArrow = $('.arrow-left');
    const rightArrow = $('.arrow-right');
    const topRow = $('.top-row');
    const bottomRow = $('.bottom-row');

    function duplicateImages(row) {
        row.find('img').each(function() {
            const clone = $(this).clone();
            row.append(clone);
        });
    }

    duplicateImages(topRow);
    duplicateImages(bottomRow);

    rightArrow.click(() => {
        scrollSlider(topRow, 'right');
        scrollSlider(bottomRow, 'right');
    });

    leftArrow.click(() => {
        scrollSlider(topRow, 'left');
        scrollSlider(bottomRow, 'left');
    });

    function scrollSlider(row, direction) {
        const lastImg = row.find('img:last-child');
        const size = lastImg.width();
        if (direction === 'right') {
            row.animate({ scrollLeft: '+=' + size }, 400);
        } else {
            row.animate({ scrollLeft: '-=' + size }, 400);
        }
    }
});
