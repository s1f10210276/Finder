const imageFilenames = [
    'youngwoman_37.png',
    'youngwoman_38.png',
    'youngwoman_39.png',
    'youngwoman_40.png',
    'youngwoman_41.png',
    'youngwoman_42.png',
    'youngwoman_43.png',
    'youngwoman_44.png',
    'youngwoman_45.png',
    'youngwoman_46.png',
    'youngwoman_47.png',
    'youngwoman_48.png',
];

let displayCounter = 5;

function displayInitialImages() {
    const images = pickRandomImages();
    const imageContainer = document.getElementById('images-container');
    imageContainer.innerHTML = `
    <img class="card card-img-top" src="images/${images[0]}" alt="選択肢1">
    <img class="card card-img-top" src="images/${images[1]}" alt="選択肢2">
    `;
    document.getElementById('click-counter').innerText = `あと${displayCounter}回クリック`;
}

function updateImages() {
    if (displayCounter > 1) {
        const images = pickRandomImages();
        const imageContainer = document.getElementById('images-container');
        imageContainer.innerHTML = `
        <img class="card card-img-top" src="images/${images[0]}" alt="選択肢1">
        <img class="card card-img-top" src="images/${images[1]}" alt="選択肢2">
      `;

        displayCounter--;
        document.getElementById('click-counter').innerText = `あと${displayCounter}回クリック`;
    } else {
        showResult();
    }
}

function showResult() {
    const images = pickRandomImages();
    const imageContainer = document.getElementById('images-container');
    imageContainer.innerHTML = `<img class="card card-img-top" src="images/${images[0]}" alt="診断結果">`;

    const clickCounter = document.getElementById('click-counter');
    clickCounter.innerText = '';

    const againButton = document.createElement("button");
    againButton.textContent = "もう一度";
    againButton.classList.add("btn", "btn-primary", "mt-4");
    againButton.onclick = reset;
    clickCounter.appendChild(againButton);
}

function pickRandomImages() {
    let randomImages = [];
    while (randomImages.length < 2) {
        let randomIndex = Math.floor(Math.random() * imageFilenames.length);
        let imageFilename = imageFilenames[randomIndex];
        if (!randomImages.includes(imageFilename)) {
            randomImages.push(imageFilename);
        }
    }
    return randomImages;
}

function reset() {
    displayCounter = 5;
    displayInitialImages();
}

reset();

document.getElementById('images-container').addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
        updateImages();
    }
});