




























// const URL = "https://nenorvalls.no/flower-power/gamehub/wp-json/wc/v3/products/"

// const key = "?consumer_key=ck_6131069f7cf8fe34078860b7f32de680257422f1&consumer_secret=cs_81c77c45ce7a85e90c9f21bc157818964c403cc3&category=26"

// const blogContainer = document.querySelector(".results")

// async function getBlog() {
//     try {
//         const response = await fetch(URL + key);
//         const results = await response.json();
//         console.log(results);

//         blogContainer.innerHTML = "";

//         const json = results;
//         const blog = json;

//         for (let i = 0; i < blog.length; i++) {


//             blogContainer.innerHTML += `<a href="details.html?id=${blog[i].id}" class="card">
//             <div class="grid-container">
//                 <img class="blog-thumb" src="${blog[i].images[0].src}" />
//             </div>
//             <div class="blog-details">
//                 <h4 class="blog-title">${blog[i].name}</h4>
//                 <p class="blog-info">${blog[i].categories[0].name}</p>
//             </div>
//         </a>`;
//         };
//     }
//     catch (error) {
//         console.log(error);
//     }
// }

// getBlog();