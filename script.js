const img = document.getElementById('myImage');
img.addEventListener('touchstart', function (e) {
    e.preventDefault();
    this.classList.add('image-scale');

    setTimeout(() => {
        this.classList.remove('image-scale');
    }, 100);
});

img.addEventListener('touchcancel', function () {
    this.classList.remove('image-scale');
});
img.addEventListener('touchend', function () {
    this.classList.remove('image-scale');
});

const imageFilenames = [
    'https://lh3.googleusercontent.com/d/1FI_WabHEQiQqWakNcsnSSFVXzXxl5e-9',
    'https://lh3.googleusercontent.com/d/18j_MGaWchKYGu8UVMzwZGj9DGRnmb6hl',
    'https://lh3.googleusercontent.com/d/15eNnAW86F8_1jnpXsVx8k5AKQli4an09',
    'https://lh3.googleusercontent.com/d/1t2Br_Fnjcg8Kx_ESKmlQ8mMOFjlfy0Ai',
    'https://lh3.googleusercontent.com/d/1mEq5EnVmdWHUXaXlprzE6WiKfWTnFmhu',
    'https://lh3.googleusercontent.com/d/1t-fKwyClTZyVr7dS1oKgPqlKnB5napDn',
    'https://lh3.googleusercontent.com/d/1QFCaoZlvhBkWZ5wv9RuYJgZah_lJqmU_',
    'https://lh3.googleusercontent.com/d/1epOPF0ET_fFa-Nx349dCfQ0glCQtdLXX',
    'https://lh3.googleusercontent.com/d/1i3VMisLvw_koQJpTWxhzyV-R1KpHFODK',
    'https://lh3.googleusercontent.com/d/1oLdEeWc3uYgYHrMPPSWEbAdfLD4GTeTN',
    'https://lh3.googleusercontent.com/d/1eflKl5ODhOBxOiRQ23ewoC20HIGU3f_U',
    'https://lh3.googleusercontent.com/d/1tQRqRLdOXUT54lHziUz_VpDU4e30mz9H',
    'https://lh3.googleusercontent.com/d/1i38R-obHVvUSfiEasLMQEfA9xpOGfPbi',
];

let displayCounter = 5;
let availableIndices = Array.from(imageFilenames.keys());
let isResultDisplayed = false;

function displayInitialImages() {
    const images = pickRandomImages();
    const imageContainer = document.getElementById('images-container');
    imageContainer.innerHTML = `
    <img class="card card-img-top" src="${images[0]}" alt="選択肢1">
    <img class="card card-img-top" src="${images[1]}" alt="選択肢2">
    `;
    document.getElementById('click-counter').innerText = `あと${displayCounter}回クリック`;
}

function updateImages() {
    if (isResultDisplayed) return;

    setTimeout(() => {
        if (displayCounter > 1) {
            const images = pickRandomImages();
            const imageContainer = document.getElementById('images-container');
            imageContainer.innerHTML = `
            <img class="card card-img-top" src="${images[0]}" alt="選択肢1" />
            <img class="card card-img-top" src="${images[1]}" alt="選択肢2" />
            `;

            displayCounter--;
            document.getElementById('click-counter').innerText = `あと${displayCounter}回クリック`;
        } else {
            showResult();
        }
    }, 200);
}

function showResult() {
    const images = pickRandomImages();
    const imageContainer = document.getElementById('images-container');
    imageContainer.innerHTML = `<img class="card" src="${images[0]}" alt="診断結果">`;

    document.getElementById('click-counter').innerText = '';

    const againButton = document.createElement("button");
    againButton.textContent = "もう一度";
    againButton.classList.add("btn", "btn-primary", "mt-4");
    againButton.onclick = reset;
    document.getElementById('click-counter').appendChild(againButton);

    isResultDisplayed = true;
}

function pickRandomImages() {
    let randomImages = [];

    for (let i = 0; i < 2; i++) {
        if (availableIndices.length === 0) {
            availableIndices = Array.from(imageFilenames.keys());
        }
        let randomIndex = Math.floor(Math.random() * availableIndices.length);
        let selectedIndex = availableIndices.splice(randomIndex, 1)[0];
        randomImages.push(imageFilenames[selectedIndex]);
    }

    return randomImages;
}

function reset() {
    displayCounter = 5;
    isResultDisplayed = false;
    availableIndices = Array.from(imageFilenames.keys());
    displayInitialImages();
}

reset();
document.getElementById('images-container').addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
        updateImages();
    }
});