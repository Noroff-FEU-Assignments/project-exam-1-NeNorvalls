/* CAROUSEL */

const sliders = document.querySelector(".carouselbox");
var scrollPerClick;

var imagePadding = 20

blogData();

var scrollAmount = 0

function sliderScrollLeft() {
    sliders.scrollTo({
        top: 0,
        left: (scrollAmount -= scrollPerClick),
        behavior: "smooth",
    });

    if(scrollAmount < 0) {
        scrollAmount = 900
    }
}

function sliderScrollRight() {
    if(scrollAmount <= sliders.scrollWidth - sliders.clientWidth) {
        sliders.scrollTo({
            top: 0,
            left: (scrollAmount += scrollPerClick),
            behavior: "smooth",
        });
    }
}


async function blogData() {
    const api = "https://nenorvalls.no/flower-power/nenorvalls-blog/wp-json/wp/v2/blogposts?acf_format=standard&orderby=date&_embed&sort_by=latest";

    var result = await fetch(api)
        .then((response) => {
            return response.json();
        });

    result.map(function(blog) {
        sliders.insertAdjacentHTML(
            "beforeend",
            `<img class="slider-img" src="${blog.acf.images}">`
        );
    });

    scrollPerClick = "900";

    console.log(result);
}















/* API call and create HTML */

// const sliderContainer = document.querySelector(".blogs_container")


// async function getData() {

//     const response = await fetch("https://nenorvalls.no/flower-power/nenorvalls-blog/wp-json/wp/v2/blogposts?acf_format=standard&orderby=date&_embed");
//     const json = await response.json();
//     console.log(json)

//     for (let i = 0; i < 6; i++) {
//         sliderContainer.innerHTML += `
//         <a href "#" class="blogs">
//         <div class="img_container">
//         <p class = "recipe_name">${json[i].acf.h1}</p>
//           <img src="${json[i].acf.mainimg}" alt="">
//         </div>
//       </a>

// `

//         /* Carousel functionality */

//         const slides = document.querySelectorAll(".blogs")
//         const nextBtn = document.querySelector(".next")
//         const prevBtn = document.querySelector(".prev")

//         // prevBtn.style.display = "none"

//         let counter = 0;
//         nextBtn.addEventListener("click", () => {
//             console.log(nextBtn)
//             counter++;
//             carouselFunctionality()
//         })
//         prevBtn.addEventListener("click", () => {
//             counter--;
//             carouselFunctionality()
//         })

//         function carouselFunctionality() {
//             if (counter > 3) {
//                 counter = 0;
//             }

//             if (counter === -1) {
//                 counter = 3;
//             }
//             slides.forEach((slide) => {
//                 slide.style.transform = `translateX(-${counter * 100}%)`
//             })

//             console.log(counter)
//         }

//     }

// }
// getData()
