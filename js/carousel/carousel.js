const carousel = document.getElementById("work-block");

const carousel_activate = (carousel) => {
    const list = carousel.querySelector(".work-block__carousel");
    const listElems = carousel.querySelectorAll(".block-carousel__item");

    const width = listElems[1].offsetLeft - listElems[0].offsetLeft;
    const count = 1;
    let position = 0;

    const left_button = document.querySelector(".prev");
    const right_button = document.querySelector(".next");

    left_button.addEventListener("click", () => {
        position += width * count;
        position = Math.min(position, 0);
        list.style.transform  = "translateX(" + position + "px)";
    });

    right_button.addEventListener("click", () => {
        position -= width * count;
        position = Math.max(position, -width * (listElems.length - count));
        list.style.transform = "translateX(" + position + "px)";
    });

    //swipe
    let touchstartX,
        touchendX,
        touchendY,
        touchstartY = 0;

    let swipeX = false;

    function checkDirection() {
        let horizontal = Math.abs(touchendX - touchstartX);
        let vertical = Math.abs(touchendY - touchstartY);

        horizontal > vertical ? (swipeX = true) : (swipeX = false);

        if (touchendX < touchstartX && swipeX) {
            position -= width * count;
            position = Math.max(position, -width * (listElems.length - count));
            list.style.transform  = "translateX(" + position + "px)";
        }
        if (touchendX > touchstartX && swipeX) {
            position += width * count;
            position = Math.min(position, 0);
            list.style.transform = "translateX(" + position + "px)";
        }
    }

    carousel.addEventListener("touchstart", (e) => {
        touchstartX = e.changedTouches[0].screenX;
        touchstartY = e.changedTouches[0].screenY;
    });

    carousel.addEventListener("touchend", (e) => {
        touchendX = e.changedTouches[0].screenX;
        touchendY = e.changedTouches[0].screenY;
        checkDirection();
    });
};

carousel_activate(carousel);
