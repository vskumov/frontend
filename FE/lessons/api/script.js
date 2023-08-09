const form = document.querySelector("#searchForm");
const input = document.querySelector("#searchName");
const divResults = document.querySelector("#allCoctails");

async function fetchCoctails(name) {
    name = name.trim(); // прочитать про этот метод!
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
    if (!response.ok) {
        throw new Error("Error fetching!")
    }
    const data = await response.json(); // прочитать про метод!
    return data.drinks;
}

function displayCoctails(coctails) {
    divResults.innerHTML = "";

    if (!coctails) {
        divResults.innerHTML = "<p>No results found!</p>"
        return;
    }

    coctails.forEach((coctail) => {
        const coctailCard = document.createElement("div");

        const coctailTitle = document.createElement("h2");
        coctailTitle.innerText = coctail.strDrink;
        coctailCard.append(coctailTitle);

        const coctailImage = document.createElement("img");
        coctailImage.src = coctail.strDrinkThumb;
        coctailImage.alt = `${coctail.strDrink} image`;
        coctailCard.append(coctailImage);

        const list = document.createElement("ul");

        for (let i = 1; i < 16; i++) {
            const ingredient = coctail[`strIngredient${i}`];
            const measure = coctail[`strMeasure${i}`];

            if (ingredient && measure) {
                const listItem = document.createElement("li");
                listItem.innerText = `${ingredient} — ${measure}`;
                list.append(listItem);
            };
        };

        coctailCard.append(list);

        const instructions = document.createElement("p");
        instructions.innerText = coctail.strInstructions;
        coctailCard.appendChild(instructions);

        divResults.append(coctailCard);
    });
}

form.onsubmit = async(e) => {
    e.preventDefault();

    try {
        const coctails = await fetchCoctails(input.value);
        displayCoctails(coctails);
    } catch(e) {
        alert(e.message);
    }
}


// доделать проверку на пустоту

// strDrink, strInstructions, strIngredient${I}, strMeasure${i},strDrinkThumb,
