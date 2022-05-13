const modal = document.querySelector(".modal");
const imgContainer = document.querySelector(".modal-img");
const modalBackdrop = document.querySelector(".modal-backdrop");

function getDetailsImgSrc() {
    const detailsImg = document.querySelector(".content-img-container img");
    return detailsImg;
}

imgContainer.addEventListener("click", openModal);

function openModal() {
    const imgSrc = getDetailsImgSrc();
    imgContainer.src = imgSrc.src;
    modalBackdrop.style.display = "block";
    modal.style.display = "block";
}

modalBackdrop.addEventListener("click", closeModal);

function closeModal() {
    modal.style.display = "none";
    modalBackdrop.style.display = "none";
}