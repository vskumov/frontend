const root = document.querySelector("#root");

const images = [
    "https://images.unsplash.com/photo-1595169258753-eac3f7b1879f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2037&q=80",
    "https://images.unsplash.com/photo-1651143894070-ac8bbfee7d39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1520532706591-489d4d290415?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    "https://images.unsplash.com/photo-1533386367838-767ada11ee44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
];

const frame = document.createElement("div");
frame.classList.add("frame");

const cards = document.createElement("div");
cards.classList.add("cards");

frame.append(cards);
root.append(frame);



for (let i = 0; i < images.length; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.backgroundImage = `url("${images[i]}")`;
    cards.append(card);
}

// rounds

const rounds = document.createElement("div");
rounds.classList.add("rounds");

frame.append(rounds);

for (let i = 0; i < images.length; i++) {
    const round = document.createElement("button");
    rounds.append(round);

    if (i === 0) round.classList.add("active");

    round.onclick = () => {
        cards.style.left = `${-1 * i * 600}px`;

        const all_btns = round.parentElement.children;

        for (let j = 0; j < all_btns.length; j++) {
            all_btns[j].classList.remove("active");
        }

        round.classList.add("active");
    };

};


// arrows

const btnLeft = document.querySelector("#arr_left");
const btnRight = document.querySelector("#arr_right");


btnLeft.onclick = () => {

    const all_btns = document.querySelectorAll(".rounds button");
    const active_btn = document.querySelector(".rounds .active");
    const index = Array.from(all_btns).indexOf(active_btn);

    const prev_index = index === 0 ? all_btns.length - 1 : index - 1;

    cards.style.left = `${-1 * prev_index * 600}px`;

    active_btn.classList.remove("active");
    all_btns[prev_index].classList.add("active");
};


btnRight.onclick = () => {

    const all_btns = document.querySelectorAll(".rounds button");
    const active_btn = document.querySelector(".rounds .active");
    const index = Array.from(all_btns).indexOf(active_btn);

    const next_index = index === all_btns.length - 1 ? 0 : index + 1;

    cards.style.left = `${-1 * next_index * 600}px`;

    active_btn.classList.remove("active");
    all_btns[next_index].classList.add("active");
};