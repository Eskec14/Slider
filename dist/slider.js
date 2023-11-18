"use strict";

$(document).ready(function () {
  var leftArrow = $('.arrow-left');
  var rightArrow = $('.arrow-right');
  var topRow = $('.top-row');
  var bottomRow = $('.bottom-row');
  function duplicateImages(row) {
    row.find('img').each(function () {
      var clone = $(this).clone();
      row.append(clone);
    });
  }
  duplicateImages(topRow);
  duplicateImages(bottomRow);
  rightArrow.click(function () {
    scrollSlider(topRow, 'right');
    scrollSlider(bottomRow, 'right');
  });
  leftArrow.click(function () {
    scrollSlider(topRow, 'left');
    scrollSlider(bottomRow, 'left');
  });
  function scrollSlider(row, direction) {
    var lastImg = row.find('img:last-child');
    var size = lastImg.width();
    if (direction === 'right') {
      row.animate({
        scrollLeft: '+=' + size
      }, 400);
    } else {
      row.animate({
        scrollLeft: '-=' + size
      }, 400);
    }
  }
});
