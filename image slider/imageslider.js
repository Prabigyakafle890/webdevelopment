$(document).ready(function() {
    let currentIndex = 0;

    function showSlide(index) {
        const slideWidth = $('.slide').outerWidth(true);
        $('.slider').css('transform', `translateX(${-index * slideWidth}px)`);
        $('.dot').removeClass('active');
        $(`.dot:eq(${index})`).addClass('active');
    }

    $('.next').click(function() {
        const totalSlides = $('.slide').length;
        const slidesVisible = Math.floor($('.slider-container').width() / $('.slide').outerWidth(true));
        currentIndex = Math.min(currentIndex + slidesVisible, totalSlides - slidesVisible);
        showSlide(currentIndex);
    });

    $('.prev').click(function() {
        const slidesVisible = Math.floor($('.slider-container').width() / $('.slide').outerWidth(true));
        currentIndex = Math.max(currentIndex - slidesVisible, 0);
        showSlide(currentIndex);
    });

    // Create pagination dots
    $('.slide').each(function(index) {
        $('.pagination').append(`<div class="dot ${index === 0 ? 'active' : ''}" data-index="${index}"></div>`);
    });

    // Pagination dot click event
    $('.dot').click(function() {
        const index = $(this).data('index');
        showSlide(index);
    });
});
