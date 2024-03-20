const messages = [
  "Hi, Eva  I know i have been sometimes good, sometimes bad and sometimes even worse. I heartly regret every mistake of mine and give you the assurance that none of those will ever repeat again.",
  "I know i have said it once that i love you and today i do confess that i have genuine feelings for you.",
  "I have fought this feelings for a long, can't do that anymore. I know that you like me too, i understand that you are scared of these things and i know you don't want to commit right away. I am scared too, i am scared of attachements but now that i realise that my feelings for you are far more stronger and deeper than my fears.",
  "You want to conqure the world. here i am in with you. will you let me help you achieve your dreams ? ",
  "Your smile gives me the butterflies i always dreamed of. I love you more than words can express.",
  "remember Eva, In a room full of art, i will still stare at you.",
  "The day you hugged me, The world went quite and i felt safe. I will always be thankful for your existance."
];

let currentMessageIndex = 0;
const messageElement = document.getElementById('message');
const prevButton = document.getElementById('prevBtn');
const nextButton = document.getElementById('nextBtn');

prevButton.addEventListener('click', showPreviousMessage);
nextButton.addEventListener('click', function() {
  if (currentMessageIndex < messages.length - 1) {
    currentMessageIndex++;
    updateMessage();
  } else {
    window.location.href = "second.html";
  }
});

function showNextMessage() {
  if (currentMessageIndex < messages.length - 1) {
    currentMessageIndex++;
    updateMessage();
  } else {
    window.location.href = "second.html";
  }
}

function showPreviousMessage() {
  if (currentMessageIndex > 0) {
    currentMessageIndex--;
    updateMessage();
  }
}

function updateMessage() {
  messageElement.textContent = messages[currentMessageIndex];
}
