// const text = "Someone likes pink";
const text = ["Someone likes pink","hello","huiu","hiieejj"];
let count = 0

let index = 0;

function writeText() {
    document.body.innerText = text[count].slice(0, index);

    index++;

    if (index > text[count].length) {
        index = 0;
        count++;
    }

    if (count>3) {
        count = 0;
    }
}

setInterval(writeText, 150);
