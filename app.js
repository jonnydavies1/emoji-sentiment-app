const emojis = document.querySelectorAll(".emoji");

emojis.forEach(emoji => {
    emoji.addEventListener("click", (event) => {
        const points = event.target.getAttribute("data-points");
        console.log(`Clicked emoji with ${points} points.`);
        
        // Send the points to your backend server or perform any desired action here
    });
});
