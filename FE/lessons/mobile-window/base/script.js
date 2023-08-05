const btnOpen = document.getElementById("openModal");
const modal = document.getElementById("modal");
const btnClose = document.getElementById("close");


btnOpen.onclick = () => {
    modal.style.display = "block";
};

btnClose.onclick = () => {
    modal.style.display = "none";
};

window.onclick = (e) => {
    if (e.target === modal) modal.style.display = "none";
  }