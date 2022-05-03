

































// const blogContainer = document.querySelector(".blog-details");

// const queryString = document.location.search;

// const params = new URLSearchParams(queryString);

// const id = params.get("id");


// const detailsURL = "https://nenorvalls.no/flower-power/gamehub/wp-json/wc/v3/products/" + id;

// const key = "?consumer_key=ck_6131069f7cf8fe34078860b7f32de680257422f1&consumer_secret=cs_81c77c45ce7a85e90c9f21bc157818964c403cc3"


// async function getBlog() {

//     try {
//         const response = await fetch(detailsURL + key)

//         const details = await response.json();

//         const newPageTitle = document.querySelector("title");

//         newPageTitle.innerHTML = `${details.name}`;

//         createHTML(details);
//     }
//     catch(error) {
//         console.log(error);
//         gameContainer.innerHTML = message("error", "An error occured", error);
//     }
// }

// getBlog();

// function createHTML(blog) {

//     blogContainer.innerHTML = ` <h1>${blog.name}</h1>
//                                 <div class="details-container">
//                                     <img class="blog-details-thumb" src="${blog.images[0].src}" alt="${blog.title}">
//                                 </div>
//                                 <div class="blog-info-container">
//                                     <p class="blog-info">${blog.short_description}</p>
//                                     <p><span class="blog-info"Genre: ${blog.genre}</span></p>
//                                 </div> `
// }