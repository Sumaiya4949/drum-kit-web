const buttons = document
  .querySelectorAll(".drum")
  .forEach((button) => button.addEventListener("click", handleClick));

function handleClick() {
  let buttonText = this.innerHTML;
  playDrum(buttonText);
  buttonAnimation(buttonText);
}

document.addEventListener("keydown", function (event) {
  playDrum(event.key);
  buttonAnimation(event.key);
});

function playDrum(value) {
  const playaudio = (name) => new Audio(`sounds/${name}.mp3`).play();

  switch (value) {
    case "w":
      playaudio("tom-1");
      break;

    case "a":
      playaudio("tom-2");
      break;

    case "s":
      playaudio("tom-3");
      break;

    case "d":
      playaudio("tom-4");
      break;

    case "j":
      playaudio("crash");
      break;

    case "k":
      playaudio("kick-bass");
      break;

    case "l":
      playaudio("snare");
      break;
  }
}

function buttonAnimation(currentKey) {
  let targetKey = document.querySelector("." + currentKey);
  targetKey.classList.add("pressed");

  setTimeout(function () {
    targetKey.classList.remove("pressed");
  }, 100);
}
