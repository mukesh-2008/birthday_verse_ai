const texts = [
  "Hey… today isn’t just a birthday 🎂",
  "It’s the day the universe quietly upgraded ✨",
  "Because YOU happened 💫",
  "Another year. More magic. Same legend 👑"
];

let index = 0;
const aiText = document.getElementById("aiText");

function typeText(text) {
  aiText.innerHTML = "";
  let i = 0;
  const interval = setInterval(() => {
    aiText.innerHTML += text.charAt(i);
    i++;
    if (i >= text.length) clearInterval(interval);
  }, 60);
}

typeText(texts[index]);

document.getElementById("evolveBtn").addEventListener("click", () => {
  index = (index + 1) % texts.length;
  typeText(texts[index]);
});
