let inputString = ""; // Variable to store the user's typed string

document.addEventListener("keyup", function (event) {
    // Get the key that was pressed
    const keyPressed = event.key.toLowerCase();
    console.log(keyPressed)
    console.log(inputString)

    // Check if the pressed key is a letter or a backspace
    if (/[a-z]/.test(keyPressed) || keyPressed === "backspace") {
        if (keyPressed === "backspace") {
            // Remove the last character from the stored string when backspace is pressed
            inputString = inputString.slice(0, -1);
        } else {
            // Append the pressed letter to the stored string
            inputString += keyPressed;
        }

        // Check if the stored string contains "chloe"
        if (inputString === "chloe") {
            const imageContainer = document.getElementById("imageContainer");
            imageContainer.style.display = "block";
        } else {
            const imageContainer = document.getElementById("imageContainer");
            imageContainer.style.display = "none";
        }
    }
});