const emojis = document.querySelectorAll(".emoji");
const thankYouScreen = document.querySelector(".thank-you-screen");

emojis.forEach(emoji => {
    emoji.addEventListener("click", (event) => {
        const points = event.target.getAttribute("data-points");
        console.log(`Clicked emoji with ${points} points.`);
        
        // Send the points to your backend server or perform any desired action here
        
        // Hide the emoji sentiment app and show the thank you screen
        document.querySelector(".emoji-sentiment-app").style.display = "none";
        thankYouScreen.style.display = "block";
    });
});
