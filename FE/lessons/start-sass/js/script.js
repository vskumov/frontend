const burger = document.querySelector(".nav-burger");
const menu = document.querySelector(".nav-container");
const icon = document.querySelector(".nav-burger i");


burger.onclick = () => {
    menu.classList.toggle("show");

    if (icon.classList.contains("la-bars")) {
        icon.classList.remove("la-bars");
        icon.classList.add("la-times");
    } else {
        icon.classList.remove("la-times");
        icon.classList.add("la-bars");
    }
}


// :root {
//     --sidebar-width: 200px;
// }
// aside {
//     width: var(--sidebar-width);
//     height: 100%;
//     position: absolute;
//     left: 0;
//     top: 0;
//     background-color: whitesmoke;
//     transform: translateX(calc(var(--sidebar-width) * -1));
//     transition: .5s;  
//     box-shadow: 1px gray;      
// }

// .is_open {
//     transform: translateX(0);
// }

// div {
//     display: flex;
//     justify-content: space-between;
//     width: 100%;
//     align-items: center;
// }
// </style>