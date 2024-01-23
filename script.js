const movieBlocks = document.getElementsByClassName("movie-block");

for(movieBlock of movieBlocks) {
    movieBlock.addEventListener("mouseenter", (event) => {
        event.target.getElementsByTagName("div")[0].classList.add("show");
    });
    movieBlock.addEventListener("mouseleave", (event) => {
        event.target.getElementsByTagName("div")[0].classList.remove("show");
    });
}