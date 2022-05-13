// const categoryUrl = "https://nenorvalls.no/flower-power/nenorvalls-blog/wp-json/wp/v2/blogposts?/categories=25&categories_exclude=18,19,17&acf_format=standard&orderby=date&_embed";
const url = "https://nenorvalls.no/flower-power/nenorvalls-blog/wp-json/wp/v2/blogposts?acf_format=standard&orderby=date&_embed";
const page2 = "https://nenorvalls.no/flower-power/nenorvalls-blog/wp-json/wp/v2/blogposts/?acf_format=standard&_embed&per_page=100" 
const blogContainer = document.querySelector(".blog-container");
const viewMoreBtn = document.querySelector("#view-btn");
const categoryDropdown = document.querySelector(".dropdown-container");

async function fetchBlogs(url) {
    try {
        const response = await fetch(url);
        const blogs = await response.json();
        console.log(blogs);
        createBlogs(blogs);
    } catch (error) {
        console.log(error);
        blogContainer.classList.remove("loader");
        blogContainer.innerHTML = errorMessage("Failed to display blogs", "error");
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
                <p class="blog-category">Category: ${blog._embedded["wp:term"][0][0].name}</p>
                <a href="details.html?id=${blog.id}" id="readmore-btn">Read more</a>
            </div>

        </div>
        
        `
        
    })
}
viewMoreBtn.onclick = function() {
    fetchBlogs(page2);
    viewMoreBtn.style.display = "none";
}