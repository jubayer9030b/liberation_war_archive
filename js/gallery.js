const modal = document.getElementById("photoModal");
const modalImg = document.getElementById("modalImg");
const downloadBtn = document.getElementById("downloadBtn");
const closeBtn = document.getElementById("closeBtn");
document.querySelectorAll(".s3>div").forEach(card => {
    card.addEventListener("click", () => {
        const imgSrc = card.querySelector("img").src;
        modalImg.src = imgSrc;
        downloadBtn.href = imgSrc;
        modal.style.display = "flex";
    });
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});