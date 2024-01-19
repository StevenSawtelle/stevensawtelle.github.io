let inputString = ""; // Variable to store the user's typed string
let tapCount = 0; // Variable to keep track of tap count
let lastTapTime = 0; // Variable to store the timestamp of the last tap

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
        if (inputString === "hello") {
            const imageContainer = document.getElementById("imageContainer");
            imageContainer.style.display = "block";
        } else {
            const imageContainer = document.getElementById("imageContainer");
            imageContainer.style.display = "none";
        }
    }
});

document.addEventListener("touchstart", function (event) {
    const currentTime = new Date().getTime();

    // Check if the time between the last tap and the current tap is within 10 seconds
    if (currentTime - lastTapTime < 10000) {
        tapCount++;
    } else {
        tapCount = 1;
    }

    lastTapTime = currentTime;

    // Check if the user tapped the screen 20 times within 10 seconds
    if (tapCount >= 20) {
        const imageContainer = document.getElementById("imageContainer");
        imageContainer.style.display = "block";
    }
});
