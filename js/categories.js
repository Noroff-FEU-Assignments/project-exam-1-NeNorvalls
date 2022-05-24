const url = "https://nenorvalls.no/flower-power/nenorvalls-blog/wp-json/wp/v2/blogposts?&acf_format=standard&orderby=date&_embed";
const blogContainer = document.querySelector(".blog-container");
const loader = document.querySelector(".loader");
document.querySelector("select").onchange = function(event) {
    blogContainer.innerHTML = ``
}