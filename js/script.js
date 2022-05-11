// const carouselContainer = document.querySelector(".carousel-container");

// const blogUrl = "https://nenorvalls.no/flower-power/nenorvalls-blog/wp-json/wp/v2/blogposts?acf_format=standard&orderby=date&_embed";

// // const corsFix = "https://noroffcors.herokuapp.com/"

// // const corsUrl = corsFix + blogsURL;


// async function fetchBlogs(blogUrl) {

//     try {
//         const response = await fetch(blogUrl);

//         const blogs = await response.json();

//         console.log(blogs);

//         createBlogs(blogs);

//     } catch (error) {

//         console.log(error);

//         blogContainer.classList.remove("loader");

//         blogContainer.innerHTML = errorMessage("Failed to display blogs", "error");

//         viewMoreBtn.style.display = "none";
//     }
// }

// fetchBlogs(blogUrl);


// function createBlogs(blogpost) {
//     blogContainer.classList.remove("loader")
    
//     blogpost.forEach(function(blog) {
//         blogContainer.innerHTML += `
//         <div class="column">
//         <div class="bg-img" style="background-image: url(${blog.acf.images})"></div>
//             <div class="title-container">
//                 <h2 class="blog-title">${blog.title.rendered}</h2>
//                 <a href="details.html?id=${blog.id}" id="readmore-btn">Read more</a>
//             </div>

//         </div>
        
//         `
        
//     })


// }
// viewMoreBtn.onclick = function() {
//     fetchBlogs(page);
//     viewMoreBtn.style.display = "none";
// }
