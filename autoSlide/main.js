var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("slide-img");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) { slideIndex = 1 }
    x[slideIndex - 1].style.display = "block";
}

function dots() {
    var i;
    var x = document.getElementsByClassName("dot");
    for (i = 0; i < x.length; i++) {
        x[i].style.color = "black";
    }
    x[(slideIndex+1)%3].style.color = "white";
}

function Auto() {
    this.start = setInterval(() => {
        carousel();
        dots();
    }, 2000);
    this.stop = () => { clearInterval(this.start); };
    this.countinue = () => {
    this.start = setInterval(() => {
        carousel();
        dots();
    }, 2000);
    }
}

var autoSlide = new Auto();
autoSlide.start;
function goNext() {
    var i;
    autoSlide.stop();
    autoSlide.countinue();
    var x = document.getElementsByClassName("slide-img");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) { slideIndex = 1 };
    x[slideIndex - 1].style.display = "block";
}

function goBack() {
    autoSlide.stop();
    autoSlide.countinue();
    var i;
    var x = document.getElementsByClassName("slide-img");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex--;
    if (slideIndex === 0) { slideIndex = x.length };
    x[slideIndex - 1].style.display = "block";
}



