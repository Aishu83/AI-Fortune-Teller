const fortunes = [
  "Yes, definitely ✅",
  "The signs say no ❌",
  "It is uncertain... try again 🔁",
  "Absolutely! 🌟",
  "The future looks bright ☀",
  "Ask again after some coffee ☕",
  "My circuits say 'maybe' 🤖",
  "Trust your instincts 💡",
  "Better not tell you now 🤫",
  "Doubtful, but hope is powerful ✨"
];

function getFortune() {
  const input = document.getElementById("questionInput").value.trim();
  const responseBox = document.getElementById("responseBox");
  const aiResponse = document.getElementById("aiResponse");

  if (input === "") {
    alert("Please ask a question first! 🤔");
    return;
  }

  const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  aiResponse.textContent = "";
  responseBox.classList.remove("hidden");

  let index = 0;
  const typing = setInterval(() => {
    aiResponse.textContent += randomFortune[index];
    index++;
    if (index >= randomFortune.length) clearInterval(typing);
  }, 70);

  document.body.style.background = getRandomGradient();

  // AI Voice
  speakAI(randomFortune);
}

function getRandomGradient() {
  const gradients = [
    "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
    "linear-gradient(to right, #373b44, #4286f4)",
    "linear-gradient(to right, #ff512f, #dd2476)",
    "linear-gradient(to right, #283c86, #45a247)",
    "linear-gradient(to right, #141e30, #243b55)"
  ];
  return gradients[Math.floor(Math.random() * gradients.length)];
}

function speakAI(text) {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.pitch = 1.2;
    utterance.rate = 1;
    utterance.voice = window.speechSynthesis.getVoices().find(voice => voice.name.includes("Google") || voice.default);
    window.speechSynthesis.speak(utterance);
  } else {
    console.log("Speech synthesis not supported.");
  }
}