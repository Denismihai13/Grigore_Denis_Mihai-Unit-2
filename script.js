function startSlideshow() {
    var images = document.getElementById("slideshow-container").getElementsByTagName("img");
    var currentIndex = 0;

    function showImage(index) {
        for (var i = 0; i < images.length; i++) {
            images[i].style.opacity = (i === index) ? "1" : "0";
        }
    }

    var interval = setInterval(function () {
        showImage(currentIndex);
        currentIndex = (currentIndex + 1) % images.length;
    }, 3000);
}
