const form = document.querySelector("#product-form");
const nameInput = document.querySelector("#name");
const priceInput = document.querySelector("#price");
const countInput = document.querySelector("#count");

const list = document.querySelector("#product-list");

const showBtn = document.querySelector("#show-all");
const cleanBtn = document.querySelector("#clean-all");


let products = [];

function addProuct(name, price, count, id) {
    products.push({ id, name, price, count });
}

// function updateProducts(array = products) {
//     list.innerHTML = "";
//     array.forEach((product) => {
//         const item = document.createElement("li");
//         item.innerText = `${product.name} — ${product.price}$ (количество: ${product.count} шт.)`;
//         list.appendChild(item);
//     });
// }

function updateProducts(array = products) {
    list.innerHTML = "";
    array.forEach((product) => {
        const item = document.createElement("li");

        const left = document.createElement("div");
        left.innerText = `${product.name} — ${product.price}$`;

        const right = document.createElement("div");
        right.innerText = `(количество: ${product.count} шт.)`;
        right.classList.add("itemCounter"); // добавляем новый класс

        item.appendChild(left);
        item.appendChild(right);

        list.appendChild(item);
    });
}


function writeLocal() {
    const object = JSON.stringify(products);
    localStorage.setItem("products", object);
}

const savedProducts = JSON.parse(localStorage.getItem("products"));
if (savedProducts) {
    products = savedProducts;
    updateProducts();
}

form.onsubmit = (e) => {
    e.preventDefault();
    const nameProduct = nameInput.value;
    const priceProduct = priceInput.value;
    const countProduct = countInput.value;
    const idProduct = Date.now();

    addProuct(nameProduct, priceProduct, countProduct, idProduct);
    updateProducts();
    writeLocal();
    nameInput.value = "";
    priceInput.value = "";
    countInput.value = "";
}

// showBtn.onclick = (e) => {
//     e.preventDefault();
//     updateProducts(products);
// }

cleanBtn.onclick = (e) => {
    e.preventDefault();
    localStorage.removeItem("products");
    products = [];
    updateProducts();
}

const searchInput = document.querySelector("#search");

function filterProducts() {
    const value = searchInput.value.toLowerCase();
    const searchProducts = products.filter((product) => product.name.toLowerCase().includes(value));
    updateProducts(searchProducts);
}

searchInput.oninput = filterProducts;
// searchInput.onchange = filterProducts;


// sort

const sortSelect = document.querySelector("#sort");

// switch case

sortSelect.onchange = () => {
    switch (sortSelect.value) {
        case "price-up":
            products.sort((a, b) => a.price - b.price);
            break;
        case "price-down":
            products.sort((a, b) => b.price - a.price);
            break;
        case "count-up":
            products.sort((a, b) => a.count - b.count);
            break;
        case "count-down":
            products.sort((a, b) => b.count - a.count);
            break;
    }
    updateProducts();
}