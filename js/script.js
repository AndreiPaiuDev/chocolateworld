const swiper = new Swiper('.swiper', {
    loop: false,
    grabCursor: true,
    spaceBetween: 28,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: false,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 4,
        }
    }
});

const swiperReview = new Swiper('.swiperReview', {
    loop: false,
    grabCursor: true,
    spaceBetween: 28,

    pagination: {
        el: '.review-pagination',
        clickable: true,
        dynamicBullets: false,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        }
    }
});
