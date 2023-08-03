const gallery = document.querySelector("#gallery");
const baseSize = getBaseSize();


const images = [
    "https://images.unsplash.com/photo-1633987034180-8a972ce8e077?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1627810636844-f28a4caa1645?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    "https://images.unsplash.com/photo-1510554318937-cd0860bf68c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1689169585936-229e6c1ccca4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1631023777074-8a85f27bf67d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1916&q=80"
];

const frame = document.createElement("div");
frame.style.width = `${baseSize * 3}px`;
frame.style.height = `${baseSize * 2}px`;
frame.classList.add("frame");


const cards = document.createElement("div");
cards.classList.add("cards");

const previews = document.createElement("div");
previews.classList.add("previews");

frame.append(cards);
gallery.append(frame, previews);



// for (let i = 0; i < images.length; i++) {

//     const card = document.createElement("div");
//     card.classList.add("card");
//     card.style.backgroundImage = `url("${images[i]}")`;
//     card.style.width = `${baseSize * 3}px`;
//     card.style.height = `${baseSize * 2}px`;
//     cards.append(card);

//     const preview = document.createElement("div");
//     preview.classList.add("preview");
//     preview.style.backgroundImage = `url("${images[i]}")`;
//     previews.append(preview);
// }

images.forEach((image) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.backgroundImage = `url("${image}")`;
    card.style.width = `${baseSize * 3}px`;
    card.style.height = `${baseSize * 2}px`;
    cards.append(card);
  
    const preview = document.createElement("div");
    preview.classList.add("preview");
    preview.style.backgroundImage = `url("${image}")`;
    previews.append(preview);
  });


for (let i = 0; i < images.length; i++) {
    const previews = document.querySelectorAll(".preview");

    if (i === 0) previews[i].classList.add("active");

    previews[i].onclick = () => {
        cards.style.left = `${-1 * i * (baseSize * 3)}px`;

        // const all_btns = preview.parentElement.children;

        for (let j = 0; j < previews.length; j++) {
            previews[j].classList.remove("active");
        }

        previews[i].classList.add("active");
    };

};

function getBaseSize() {
    const windoWidth = window.innerWidth;
    return windoWidth < 1024 ? window.innerWidth / 3 - 8 : window.innerWidth / 5;
}