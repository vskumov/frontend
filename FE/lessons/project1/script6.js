// Ввод продуктов, форма 1
const form = document.querySelector('.form');
const elementName = document.querySelector('#name');
const elementPrice = document.querySelector('#price');

// Поиск продуктов, форма 2
const searchForm = document.querySelector('#form_search');
const searchImput = document.querySelector('#search');

// Сортировка и удаление продуктов
const sortBtnUp = document.querySelector("#sortBtnUp");
const sortBtnDown = document.querySelector("#sortBtnDown");
const deleteAll = document.querySelector("#deleteAll");

// Отображение продуктов
const section = document.querySelector('#products');
const noProduct = document.createElement("h3");
noProduct.innerText = "Нет продуктов";
noProduct.style.textAlign = "center";
section.append(noProduct);

// Отображение общей суммы
const summAll = document.querySelector("#summAll");
const productNav = document.querySelector('#productNav');
const totalPrice = document.createElement("div");
totalPrice.classList.add("totalPrice")
const productsPrice = document.createElement("h3");


let products = [];
let filteredProducts = [];
let totalSumm = 0;


form.onsubmit = (e) => {
    e.preventDefault();
    products.push({
        id: Date.now(),
        title: elementName.value,
        price: elementPrice.value
    });

    elementName.value = "";
    elementPrice.value = "";

    newProduct(products);
    console.log(products)
};

function createNode(title, price, index) {

    const div = document.createElement("div");

    const productName = document.createElement("h2");
    productName.innerText = title;

    const productPrice = document.createElement("h3");
    productPrice.innerHTML = `${price} <i class="las la-euro-sign"></i>`;

    const btn = closeButton();
    // btn.onclick = () => {
        
    //     const result = [];
    //     for (let i = 0; i < products.length; i++) {
    //         if (i !== index) {
    //             result.push(products[i]);
    //         };
    //     };
    //     products = result;
    //     newProduct(products);

    //     if (!products.length) {
    //         section.append(noProduct);
    //     };

    //     refreshTotalPrice()
    // };


    btn.onclick = () => {
        
        for (let i = 0; i < filteredProducts.length; i++) {
            if (i === index) {
                const id = filteredProducts[i].id;
                removeProduct(id, filteredProducts, products);
                
                if(filteredProducts.length === 0) {
                    newProduct(products);
                } else {
                    newProduct(filteredProducts);
                };
            };
        };


        if (!products.length) {
            section.append(noProduct);
        };

        refreshTotalPrice()
    };


    div.classList.add('productCard');
    div.append(productName, productPrice, btn);

    div.onmouseover = () => {
        btn.style.opacity = "1";
    };
    div.onmouseleave = () => {
        btn.style.opacity = "0";
    };

    section.appendChild(div);
};

searchImput.addEventListener("input", serchAndShow);

searchForm.onkeydown = (e) => {
    if (e.keyCode === 13) {
        e.preventDefault();
        serchAndShow();
    };
};


// Кнопки навигации

sortBtnUp.onclick = () => {
    const sortedProducts = filteredProducts.length > 0 ? filteredProducts : products;
    sortedProducts.sort((a, b) => a.price - b.price);
    newProduct(sortedProducts);
};

sortBtnDown.onclick = () => {
    const sortedProducts = filteredProducts.length > 0 ? filteredProducts : products;
    sortedProducts.sort((a, b) => b.price - a.price);
    newProduct(sortedProducts);
};

deleteAll.onclick = () => {
    products = [];
    newProduct(products);
    refreshTotalPrice();
};

summAll.onclick = () => {

    if (totalSumm !== 0) {
        totalSumm = 0;
    };

    const productsPrice = calculateSumm();
    totalPrice.appendChild(productsPrice);
    productNav.appendChild(totalPrice)
};

// Функции

function newProduct(productsArray) {
    section.innerHTML = "";
    if (!productsArray.length) {
        section.append(noProduct);
    } else {
        for (let i = 0; i < productsArray.length; i++) {
            createNode(productsArray[i].title, productsArray[i].price, i);
        };
    };
};

function serchAndShow() {
    if (!searchImput.value) {
        filteredProducts = products;
    } else {
        filteredProducts = [];
        for (let i = 0; i < products.length; i++) {
            if (products[i].title.includes(searchImput.value)) {
                filteredProducts.push(products[i]);
            };
        };
    };
    newProduct(filteredProducts);
};

function closeButton() {
    const btn = document.createElement("button");
    btn.innerHTML = '<i class="las la-times"></i>';
    btn.classList.add("close");
    return btn;
};

function calculateSumm() {
    for (let i = 0; i < products.length; i++) {
        totalSumm += Number(products[i].price);
    };
    productsPrice.innerHTML = `Общая стоимость: ${totalSumm} <i class="las la-euro-sign"></i>`;
    return productsPrice;
};

function refreshTotalPrice() {
    if (totalSumm !== 0) {
        productNav.removeChild(totalPrice);
        totalSumm = 0;
    };
}

function removeProduct(id, arr1, arr2) {
    const toDeleteFiltered = arr1.findIndex(item => item.id === id);
    arr1.splice(toDeleteFiltered, 1);
  
    const toDelete = arr2.findIndex(item => item.id === id);
    arr2.splice(toDelete, 1);
  }