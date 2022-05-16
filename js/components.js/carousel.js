const buttonContainer = document.querySelector(".map");
const innerContainer = document.querySelector(".inner");
const url = "https://nenorvalls.no/flower-power/nenorvalls-blog/wp-json/wp/v2/blogposts?acf_format=standard&orderby=date&_embed&per_page=9";



buttonContainer.addEventListener("click", (e) => {
  if (e.target.nodeName === "BUTTON") {
    Array.from(buttonContainer.children).forEach((item) =>
      item.classList.remove("active")
    );
    if (e.target.classList.contains("first")) {
      innerContainer.style.transform = "translateX(-0%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("second")) {
      innerContainer.style.transform = "translateX(-33.33333333333333%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("third")) {
      innerContainer.style.transform = "translateX(-66.6666666667%)";
      e.target.classList.add("active");
    }
  }
});

document.addEventListener("DOMContentLoaded", () => {
  async function fetchBlogs(url) {
    try {
      const response = await fetch(url);
      const blogs = await response.json();
      console.log(blogs);
      createBlogs(blogs);
    } catch (error) {
      console.log(error);
    }
  }

  fetchBlogs(url);

  function createBlogs(blogpost) {
    blogpost.forEach(function (blog) {
      innerContainer.innerHTML += `<a id="carousel-link" href="details.html?id=${blog.id}"
                                    <div class="card">
                                        <img src="${blog.acf.images}">
                                        <div class="content">
                                            <h1 class="carousel-h1">${blog.title.rendered}</h1>
                                        </div>
                                    </div>
                                  </a>`;
    });
  }
});

// Make the carousel responsive by fetching a url that displays 3 results per page
const responsiveUrl = "https://nenorvalls.no/flower-power/nenorvalls-blog/wp-json/wp/v2/blogposts?acf_format=standard&orderby=date&_embed&per_page=3";

if (window.innerWidth < 1290) {

  document.addEventListener("DOMContentLoaded", () => {
    async function fetchMediaQBlogs(responsiveUrl) {
      try {
        const mqResponse = await fetch(responsiveUrl);
        const mqBlogs = await mqResponse.json();
        console.log(mqBlogs);
        createMediaQBlogs(mqBlogs);
      } catch (error) {
        console.log(error);
      }
    }
  
    fetchMediaQBlogs(responsiveUrl);
  
    function createMediaQBlogs(mqBlogpost) {
      mqBlogpost.forEach(function (mqBlog) {
        innerContainer.innerHTML += `<a id="carousel-link" href="details.html?id=${mqBlog.id}"
                                      <div class="card">
                                          <img src="${mqBlog.acf.images}">
                                          <div class="content">
                                              <h1 class="carousel-h1">${mqBlog.title.rendered}</h1>
                                          </div>
                                      </div>
                                    </a>`;
      });
    }
  });
}