function scrollToTop() {
    window.scrollTo(0, 0);
}

window.onload = function () {
    let arrowUp = document.querySelector(".arrow-up");
    let intervalId = 0;
  
    const toggleArrow = (e) => {
      if (window.scrollY >= 500) {
        arrowUp.classList.add("is-block");
  
        setTimeout(function () {
          arrowUp.classList.add("is-opacity");
        }, 10);
      } else {
        arrowUp.classList.remove("is-opacity");
      }
    };
  
    const scrollStep = () => {
      if (window.pageYOffset === 0) {
        clearInterval(intervalId);
      }
      window.scroll(0, window.pageYOffset - 999999);
    };
  
    // Event listeners
    arrowUp.addEventListener("click", scrollToTop);
    window.addEventListener("scroll", toggleArrow);
  };
  