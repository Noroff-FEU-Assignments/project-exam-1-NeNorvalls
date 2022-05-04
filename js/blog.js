const url = "https://nenorvalls.no/flower-power/nenorvalls-blog/wp-json/wp/v2/blogposts?acf_format=standard&_embed";
const page = "https://nenorvalls.no/flower-power/nenorvalls-blog/wp-json/wp/v2/blogposts/?acf_format=standard&_embed&page=2" 
const blogContainer = document.querySelector(".blog-container");
const viewMoreBtn = document.querySelector("#view-btn");

async function fetchBlogs(url) {
    try {
        const response = await fetch(url);
        const blogs = await response.json();
        console.log(blogs);
        createBlogs(blogs);
    } catch (error) {
        console.log(error);
        blogContainer.classList.remove("loader");
        blogContainer.innerHTML = errorMessage("Failed to fetch blogs", "error");
        viewMoreBtn.style.display = "none";
    }
}

fetchBlogs(url);

function createBlogs(blogpost) {
    blogContainer.classList.remove("loader")
    
    blogpost.forEach(function(blog) {
        blogContainer.innerHTML += `
        <div class="column">
        <div class="bg-img" style="background-image: url(${blog.acf.images})"></div>
            <div class="title-container">
                <h2 class="blog-title">${blog.title.rendered}</h2>
                <a href="details.html?id=${blog.id} id="readmore-btn">Read more</a>
            </div>

        </div>
        
        `
        
    })


}
viewMoreBtn.onclick = function() {
    fetchBlogs(page);
    viewMoreBtn.style.display = "none";
}




























// // const URL = "https://nenorvalls.no/flower-power/gamehub/wp-json/wc/v3/products/"

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