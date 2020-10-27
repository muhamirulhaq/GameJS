const peringatan = alert("Peringatan!\n\nGame ini hanya dapat dimainkan di PC/Laptop karena membutuhkan akses cursor.");

const onOff = document.querySelector(".audio");
const textToSpan = document.querySelector("span.OnOff");

const audio = document.querySelector("#audioContainer");

function aud() {
    if(textToSpan.innerHTML === "ON") {
        audio.pause();
        textToSpan.innerHTML = "OFF";
    } else {
        audio.play();
        textToSpan.innerHTML = "ON";
    }
}

onOff.onclick = aud;

/* const start = document.querySelector(".start h2 a");
const rules = document.querySelector(".rules h2 a");
const about = document.querySelector(".about h2 a");

const sound = document.querySelector("#soundContainer");

function sound1() {
    sound.play();
}

start.onmouseover = sound1; */