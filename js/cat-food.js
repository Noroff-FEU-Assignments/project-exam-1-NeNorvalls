const url =
  "https://nenorvalls.no/flower-power/nenorvalls-blog/wp-json/wp/v2/blogposts?categories=25&categories_exclude=18,19,17&acf_format=standard&orderby=date&_embed";
const page =
  "https://nenorvalls.no/flower-power/nenorvalls-blog/wp-json/wp/v2/blogposts?categories=25&categories_exclude=18,19,17&acf_format=standard&_embed&page=2";
const blogContainer = document.querySelector(".blog-container");
const loader = document.querySelector(".loader");
const viewMoreBtn = document.querySelector("#view-btn");

async function fetchBlogs(url) {
  try {
    const response = await fetch(url);
    const blogs = await response.json();
    console.log(blogs);
    createBlogs(blogs);
    // no need to display the view more button 
    if(blogs.length < 10) {
      viewMoreBtn.style.display = "none";
    }
  } catch (error) {
    console.log(error);
    loader.classList.remove("loader");
    blogContainer.innerHTML = errorMessage("Failed to display blogs", "error");
    viewMoreBtn.style.display = "none";
  }
}


fetchBlogs(url);

function createBlogs(blogpost) {
  loader.classList.remove("loader");

  blogpost.forEach(function (blog) {
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
        
        `;
  });
}
viewMoreBtn.onclick = function () {
  fetchBlogs(page);
  viewMoreBtn.style.display = "none";
};

