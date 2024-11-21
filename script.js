// Play background music when the page loads
document.getElementById("background-music").play();

// Function to trigger the surprise (stars and message)
function triggerSurprise() {
  // Show the secret message
  document.getElementById("message").style.display = "block";
  document.querySelector(".click-btn").style.display = "none";

  // Create star animations
  for (let i = 0; i < 120; i++) {
    createStar();
  }
}

// Function to create a star at random positions
function createStar() {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.width = `${Math.random() * 4 + 2}px`; // Random size for the star
  star.style.height = star.style.width; // Make it a perfect circle

  // Randomize the star's starting position
  star.style.left = `${Math.random() * 100}vw`; // Random position across the screen width
  star.style.top = `${Math.random() * 100}vh`; // Random position across the screen height

  document.body.appendChild(star);

  // Remove the star after animation to keep the page clean
  setTimeout(() => {
    star.remove();
  }, 3000);
}

// Function to animate love
function animateLove() {
  const loveMessage = document.createElement("div");
  loveMessage.classList.add("love-animation");
  loveMessage.textContent = "I Love You! 💖";
  document.body.appendChild(loveMessage);

  setTimeout(() => {
    loveMessage.remove();
  }, 3000);
}

// Function to animate sadness
function animateSadness() {
  const sadnessMessage = document.createElement("div");
  sadnessMessage.classList.add("sadness-animation");
  sadnessMessage.textContent = "Oh no... 😢";
  document.body.appendChild(sadnessMessage);

  setTimeout(() => {
    sadnessMessage.remove();
  }, 3000);
}
