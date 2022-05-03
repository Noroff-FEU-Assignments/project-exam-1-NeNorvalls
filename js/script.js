






































// const blogContainer = document.querySelector(".results");

// const blogURL = "https://nenorvalls.no/flower-power/nenorvalls-blog/wp-json/wp/v2/blogposts?acf_format=standard";

// const corsFix = "https://noroffcors.herokuapp.com/"

// const corsUrl = corsFix + blogsURL;

// async function fetchBlog() {

// 	try {
// 		const response = await fetch(corsUrl, {
// 			// "method": "GET",
// 			// "headers": {
// 			// "x-rapidapi-host": "mmo-games.p.rapidapi.com",
// 			// "x-rapidapi-key": "e571381396mshbf0c399aa256715p147efcjsn84b2bc11dfa5"
// 		}});

// 		const json = await response.json();

// 		console.log(json);

// 		blogContainer.innerHTML = "";

// 		const blog = json;

// 		for (let i = 0; i < blog.length; i++) {

// 			if (i === 9) {
// 				break;
// 			}
// 			blogContainer.innerHTML += `<a href="details.html?id=${blog[i].id}" class="card">
// 											<div class="grid-container">
// 												<img class="blog-thumb" src="${blog[i].images[0].src}"/>
// 		   									</div>
// 		   									<div class="blog-details">
// 			   									<h4 class="blog-title">${blog[i].name}</h4>
// 			   									<p class="blog-info">${blog[i].categories[0].name}</p>
// 			   									<p class="blog-info">${blog[i].tags[0].name}</p>
// 		   									</div>
// 	   									</a>`;
// 		};
// 	}
// 	catch(error) {
// 		console.log(error);
// 		blogContainer.innerHTML = message("error", "Something went wrong!", error);
// 	}
// }

// fetchBlog();