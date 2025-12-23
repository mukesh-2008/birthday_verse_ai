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
const reasons = [
  "Because you light up rooms without trying ✨",
  "Because your smile fixes bad days 💖",
  "Because the world feels better with you in it 🌍",
  "Because your presence itself is a gift 🎁",
  "Because today exists just to celebrate you 🎂"
];

let index = 0;

function nextReason() {
  index = (index + 1) % reasons.length;
  document.getElementById("reasonText").innerText = reasons[index];
  document.getElementById("reasonCount").innerText =
    `Reason ${index + 1} / ${reasons.length}`;
}
