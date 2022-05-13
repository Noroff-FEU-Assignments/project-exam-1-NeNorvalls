const url = "https://nenorvalls.no/flower-power/nenorvalls-blog/wp-json/wp/v2/blogposts?categories=18&categories_exclude=19,25,17&acf_format=standard&orderby=date&_embed";
const page = "https://nenorvalls.no/flower-power/nenorvalls-blog/wp-json/wp/v2/blogposts/?acf_format=standard&_embed&page=2" 
const blogContainer = document.querySelector(".blog-container");
const viewMoreBtn = document.querySelector("#view-btn");
const categoryDropdown = document.querySelector(".dropdown-container");

async function fetchBlogs(url) {
    try {
        const response = await fetch(url);
        const blogs = await response.json();
        console.log(blogs);
        createBlogs(blogs);
        createDropdown();
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
                <p>
            </div>

        </div>
        
        `
        
    })
}
viewMoreBtn.onclick = function() {
    fetchBlogs(page);
    viewMoreBtn.style.display = "none";
}





function createDropdown() {

    categoryDropdown.innerHTML += `
                <label class="dropdown">
                <div class="dd-button">
                    Category
                </div>
                <input type="checkbox" class="dd-input" id="dropdown">
                <ul class="dd-menu">
                <a class="filter-link" href="cat-blog.html"><li class="filter-btn">Blog</li></a>
                <a class="filter-link" href="cat-challenges.html"><li class="filter-btn">Challenges</li></a>
                <a class="filter-link" href="cat-celebrations.html"><li class="filter-btn">Celebrations</li></a>
                <a class="filter-link" href="cat-food.html"><li class="filter-btn">Food</li></a>
                    <li class="divider"></li>
                </ul>
                </label>`

}