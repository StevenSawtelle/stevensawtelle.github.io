document.addEventListener("input", function (event) {
    const inputValue = event.target.value.toLowerCase();
    const imageContainer = document.getElementById("imageContainer");

    if (inputValue === "chloe") {
        imageContainer.style.display = "block";
    } else {
        imageContainer.style.display = "none";
    }
});