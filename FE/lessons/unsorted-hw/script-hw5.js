
// В js создайте массив с ссылками на картинки. На основе этого массива формируйте множество маленьких картинок в верхней части интерфейса. Пользователь нажимая на маленькие картинки видит их отображение в большем размере (только ту картинку, на которую он нажимал).

const body = document.querySelector("body");

const images = [

    {
        src: 'https://images.unsplash.com/photo-1516646428755-ef8441bb2b92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        alt: '1'
    },
    {
        src: 'https://images.unsplash.com/photo-1515179984198-74497483a356?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        alt: '2'
    },
    {
        src: 'https://plus.unsplash.com/premium_photo-1676398198829-df432400e009?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        alt: '3'
    },
    {
        src: 'https://images.unsplash.com/photo-1521292270410-a8c4d716d518?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        alt: '4'
    },
    {
        src: 'https://images.unsplash.com/photo-1517772426385-b95306f095d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80',
        alt: '5'
    },

];

const previewContainer = document.createElement("div");
previewContainer.classList.add("preview_container");

const slideContainer = document.createElement("div");
slideContainer.classList.add("slide_container");


for (let i = 0; i < images.length; i++) {

    // создаём все элементы //

    const imgPreview = document.createElement("img");

    imgPreview.src = images[i].src;
    imgPreview.alt = images[i].alt;
    imgPreview.classList.add("preview");
    previewContainer.appendChild(imgPreview);

    const imgSlide = document.createElement("img");

    imgSlide.src = images[i].src;
    imgSlide.classList.add("slideshow");
    imgSlide.classList.add("hide");
    slideContainer.appendChild(imgSlide);

    // начальное изображение //

    if (i === 0) {
        showSlide(imgSlide);
    };

    // действие при нажатии //

    imgPreview.onclick = () => {
        hideAllSlides();
        showSlide(imgSlide);
    };

}

function showSlide(slide) {
    slide.classList.remove("hide");
    slide.classList.add("show");
}

function hideAllSlides() {
    const slideShows = document.querySelectorAll(".slideshow");
    for (let i = 0; i < slideShows.length; i++) {
        if (slideShows[i].classList.contains("show")) {
            slideShows[i].classList.remove("show");
            slideShows[i].classList.add("hide");
        }
    }
}


document.body.append(previewContainer);
document.body.append(slideContainer);











// const slideshow = document.createElement("div");
// slideshow.classList.add("slideshow");

// for (let i = 0; i < images.length; i++) {

//   const img = document.createElement("img");

//   img.src = images[i].src;
//   img.alt = images[i].alt;
//   img.classList.add("preview");

//   img.onclick = () => {
//     slideshow.innerHTML = '';
//     const imgSlide = document.createElement("img");
//     imgSlide.src = images[i].src;
//     imgSlide.classList.add("slideshow-image");
//     slideshow.appendChild(imgSlide);
//     document.body.appendChild(slideshow);
//   };

//   div.appendChild(img);

// }

// document.body.appendChild(div);
