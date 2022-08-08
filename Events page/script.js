const overflowBox =  document.getElementById("overflow-box");
const overflowImg = overflowBox.firstElementChild;

function closeOverflow() {
    overflowBox.style.opacity = "0";
    setTimeout(() => {
        overflowBox.style.visibility = "collapse";
    }, 250);
}

document.querySelectorAll("[alt='event highlights']").forEach((element) => {
    element.addEventListener("click", () => {
        overflowImg.setAttribute("src", element.getAttribute('src'));
        overflowBox.style.visibility = "visible";
        setTimeout(() => {
            overflowBox.style.opacity = "1";
        }, 10);
    })
});

