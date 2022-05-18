const loaderWrapper = document.querySelector(".loader-wrapper");

window.addEventListener("load", function () {
    loaderWrapper.parentElement.removeChild(loaderWrapper);
})