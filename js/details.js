const blogContainer = document.querySelector(".blog-content-container");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

// const contentURL = `https://nenorvalls.no/flower-power/nenorvalls-blog/wp-json/wp/v2/blogposts?acf_format=standard&_embed/${id}`;
const contentURL = `https://nenorvalls.no/flower-power/nenorvalls-blog/wp-json/wp/v2/blogposts?acf_format=standard&orderby=date&_embed${id}`;
async function getBlog() {
    try {
        const response = await fetch(contentURL)
        const content = await response.json();
        console.log(content);
        // newPageTitle(content);
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

        blogContainer.innerHTML = ` <h1>${blog[0].title.rendered}</h1>
                                <div class="content-img-container">
                                    <img class="blog-content-img" src="${blog[0].acf.images}">
                                </div>
                                <div class="content-text-container">
                                    <p class="content-text">${blog[0].content.rendered}</p>
                                    <p><span class="content-info"Category: ${blog.name}</span></p>
                                    <p><span class="content-info"Author: ${blog[0].author.rendered}</span></p>
                                    <p><span class="content-info"Date: ${blog[0].date}</span></p>
                                </div>`
                                             
}
