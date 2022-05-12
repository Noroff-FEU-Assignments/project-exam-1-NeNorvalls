const url = document.querySelector("https://nenorvalls.no/flower-power/nenorvalls-blog/wp-json/wp/v2/blogposts?acf_format=standard&orderby=date&_embed");
const categories = document.querySelector(".filter-link");
const blogs = document.querySelector(".blog-container");

const blogCategory = "https://nenorvalls.no/flower-power/nenorvalls-blog/wp-json/wp/v2/blogposts?acf_format=standard&orderby=date&_embed&category=17";
const celebrationsCategory = "https://nenorvalls.no/flower-power/nenorvalls-blog/wp-json/wp/v2/blogposts?acf_format=standard&orderby=date&_embed&category=18";
const challengesCategory = "https://nenorvalls.no/flower-power/nenorvalls-blog/wp-json/wp/v2/blogposts?acf_format=standard&orderby=date&_embed&category=19";
const foodCategory = "https://nenorvalls.no/flower-power/nenorvalls-blog/wp-json/wp/v2/blogposts?acf_format=standard&orderby=date&_embed&category=25";

fetch(url,blog).then(value => value.json()),
fetch(url,celebrations).then(value => value.json()),
fetch(url,challenges).then(value => value.json()),                     

    async function fetchCategory(url) {
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
    
    fetchCategory(url);
    
    function createBlogs(category) {
        blogContainer.classList.remove("loader")
        
        blogpost.forEach(function(blog) {
            blogContainer.innerHTML += `
            <div class="column">
            <div class="bg-img" style="background-image: url(${blog.acf.images})"></div>
                <div class="title-container">
                    <h2 class="blog-title">${blog.title.rendered}</h2>
                    <a href="details.html?id=${blog.id}" id="readmore-btn">Read more</a>
                </div>
    
            </div>
            
            `
            
        })
    
    
    }