let pullsCount = 0;
const maxPulls = 90;
const rewards = {
    "3-star": ["img1.jpg", "img2.jpg", "img3.jpg"], // Add your images
    "4-star": ["img4.jpg", "img5.jpg", "img6.jpg"],
    "5-star": "5star.jpg" // Change this to your special animation trigger
};

function wish() {
    if (pullsCount >= maxPulls) {
        alert("You have used all 90 pulls!");
        return;
    }
    
    pullsCount++;
    let result;

    if (pullsCount === 50) {
        result = "5-star";
        displayMessage("HA U FAILED, THE PUNISHMENT? Be my valentine", rewards["5-star"]);
        playFiveStarAnimation();
    } else if (pullsCount === 90) {
        result = "5-star";
        displayMessage("U WON!! The gift is me. Be my valentine?", rewards["5-star"]);
        playFiveStarAnimation();
    } else if (pullsCount % 10 === 0) {
        result = "4-star";
        let randomImage = getRandomReward("4-star");
        displayMessage("You got a 4-star reward!", randomImage);
    } else {
        result = "3-star";
        let randomImage = getRandomReward("3-star");
        displayMessage("You got a 3-star reward!", randomImage);
    }
}

function getRandomReward(rarity) {
    let items = rewards[rarity];
    return items[Math.floor(Math.random() * items.length)];
}

function displayMessage(message, image) {
    document.getElementById("result").innerHTML = `<p>${message}</p><img src='${image}' alt='Reward'>`;
}

function playFiveStarAnimation() {
    document.getElementById("animation").classList.add("five-star-animation");
    setTimeout(() => {
        document.getElementById("animation").classList.remove("five-star-animation");
    }, 3000); // Adjust timing as needed
}
