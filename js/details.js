const blogContainer = document.querySelector(".blog-content-container");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
// acf_format=standard&orderby=date&_embed
// const contentURL = `https://nenorvalls.no/flower-power/nenorvalls-blog/wp-json/wp/v2/blogposts?acf_format=standard&_embed/${id}`;
const contentURL = `https://nenorvalls.no/flower-power/nenorvalls-blog/wp-json/wp/v2/blogposts/${id}?acf_format=standard&_embed&`;
async function getBlog() {
    try {
        const response = await fetch(contentURL)
        const content = await response.json();
        console.log(content);
        newPageTitle(content);
        createHTML(content);
    }
    catch(error) {
        console.log(error);
        blogContainer.innerHTML = message("Failed to display blogs", "error");
    }
}

getBlog();

    function newPageTitle(blog) {
        document.title = `${blog.title.rendered}`;
    }
 

    function createHTML(blog) {
        
        blogContainer.classList.remove("loader");

        blogContainer.innerHTML = ` <h1>${blog.title.rendered}</h1>
                                <div class="content-img-container">
                                    <img src="${blog.acf.images}" alt="${blog.title.rendered}">
                                </div>
                                <p><span class="content-info">Author: ${blog._embedded.author[0].name}</span></p>
                                <p><span class="content-info"> Category: ${blog._embedded["wp:term"][0][0].name}</span></p>
                                <div class="content-text-container">
                                    <p class="content-text">${blog.content.rendered}</p>
                                </div>
                                <p><span class="content-info">Date: ${blog.date}</span></p>`

                                console.log(blog)
                                             
}
