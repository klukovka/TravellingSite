window.onload = function () {
    let scrolled;
    let timer;
    document.getElementById('upButton').onclick = function () {
        scrolled = window.pageYOffset;
        scrollToTop();

    }

    function scrollToTop() {
        if (scrolled>0 && scrolled<=500) {
            window.scrollTo(0,scrolled);
            scrolled=scrolled-25; //скорость прокутки
            timer = setTimeout(scrollToTop,5);
        }
        else if (scrolled>500 && scrolled<=1000){
            window.scrollTo(0,scrolled);
            scrolled=scrolled-20; //скорость прокутки
            timer = setTimeout(scrollToTop,5);
        }
        else if (scrolled>1000 && scrolled<=1500){
            window.scrollTo(0,scrolled);
            scrolled=scrolled-15; //скорость прокутки
            timer = setTimeout(scrollToTop,5);
        } else if (scrolled>1500){
            window.scrollTo(0,scrolled);
            scrolled=scrolled-13; //скорость прокутки
            timer = setTimeout(scrollToTop,5);
        }
        else {
           clearTimeout(timer);
           window.scrollTo(0, 0);
        }
    }

}