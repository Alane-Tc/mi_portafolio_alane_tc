const scroll = () => {
    let _button = document.querySelector("#btn-go-up");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        _button.style.display = "block";
    } else {
        _button.style.display = "none";
    }
}

window.onscroll = function () { scroll() };

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}