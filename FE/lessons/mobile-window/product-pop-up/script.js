const viewMore = document.querySelector(".view-more");
const popup = document.querySelector(".popup");
const closeBtn = document.querySelector(".closeBtn");


viewMore.onclick = () => {
    popup.style.display = "block";
    popup.classList.add("open");
    popup.classList.remove("close");
};

closeBtn.onclick = () => {
    popup.classList.add("close");
    popup.classList.remove("open");
    setTimeout(() => {
        popup.style.display = "none";
    }), 500;
};

window.onclick = (e) => {
    if (e.target === popup) {
        popup.classList.add("close");
        popup.classList.remove("open");
        setTimeout(() => {
            popup.style.display = "none";
        }), 500;
    }
}