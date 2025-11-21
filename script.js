let btn = document.querySelector("body");
const songs = [
  "28.mp3",
  "29.mp3",
  "30.mp3",
  "31.mp3",
  "32.mp3",
  "33.mp3",
  "34.mp3",
  "35.mp3",
  "36.mp3",
  "37.mp3",
  "38.mp3",
  "39.mp3",
  "40.mp3",
  "41.mp3",
  "42.mp3",
  "43.mp3",
  "44.mp3",
  "45.mp3",
  "46.mp3",
  "47.mp3",
  "48.mp3",
  "49.mp3",
  "50.mp3",
  "51.mp3",
  "52.mp3",
  "53.mp3",
  "54.mp3",
  "55.mp3",
  "56.mp3",
  "57.mp3",
  "58.mp3",
  "59.mp3",
  "60.mp3",
  "61.mp3",
  "62.mp3",
  "63.mp3",
  "64.mp3",
  "65.mp3",
  "66.mp3",
  "67.mp3",
  "68.mp3",
];

btn.addEventListener("keydown", (delt) => {
  let songName = null;
  let key = delt.key.toUpperCase();

  if ("1" <= key && "9" >= key) {
    songName = Number(key) + 27 + ".mp3";
    currentAudio = new Audio(`./mp3/${songName}`);
    currentAudio.play();
  }
  if (key >= "A" && key <= "Z") {
    songName = delt.keyCode - 28 + ".mp3";
  }
  let result = songs.find((item) => item === songName);

  if (result) {
    currentAudio = new Audio(`./mp3/${songName}`);
    currentAudio.play();
  }
});
