document.addEventListener("DOMContentLoaded", () => {
    const noBtn = document.getElementById("noBtn");
    const yesBtn = document.getElementById("yesBtn");
    const buttons = document.querySelector(".buttons");
    const question = document.querySelector(".question");
    const lyrics = document.querySelector(".lyrics");
    const playBtn = document.getElementById("playBtn");
    const song = document.getElementById("song");
    const lyricLine = document.getElementById("lyricLine");

    yesBtn.addEventListener("click", () => {
        buttons.style.display = "none";
        question.style.display = "none";
        lyrics.style.display = "block";
    });

    let noCount = 1;
    noBtn.addEventListener("click", () => {
        noCount++;

        if (noCount <= 10) {
            noBtn.style.fontSize = `${1 + noCount * 0.2}rem`;
        }

        const maxX = window.innerWidth - noBtn.offsetWidth;
        const maxY = window.innerHeight - noBtn.offsetHeight;
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        noBtn.style.position = "absolute";
        noBtn.style.left = `${randomX}px`;
        noBtn.style.top = `${randomY}px`;
    });

    playBtn.addEventListener("click", () => {
        if (song.paused) {
            song.play();
            playBtn.textContent = "Pause Song";
        } else {
            song.pause();
            playBtn.textContent = "Play Song";
        }
    });

    song.addEventListener("timeupdate", () => {
        if (song.currentTime >= 139 && song.currentTime < 141) {
            lyricLine.textContent = "Oh, my love";
            lyricLine.classList.add("glowing-text");
        } else if (song.currentTime >= 141 && song.currentTime < 143) {
            lyricLine.textContent = "Is this the end for us?";
            lyricLine.classList.add("glowing-text");
        } else if (song.currentTime >= 143 && song.currentTime < 145) {
            lyricLine.textContent = "Maybe we've had enough";
            lyricLine.classList.add("glowing-text");
        } else {
            lyricLine.textContent = "";
            lyricLine.classList.remove("glowing-text");
        }
    });
});
