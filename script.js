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
    'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhBfolqi8tlqY4yVXJbvVGCJwT0c7ADx9Mv8VCS7kcQDHplaYitvwd3NSDD3lLLky5Et_mBTDiWGKEYvIW9y28CpDjIzwcd0f6O2ss0MZkY7PO8bX7VHiaFy2Zxv4O7QsWIVhwQILyWQYo/s800/youngwoman_37.png',
    'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiLZYnoToaAbYd9_fC_Uwkk7DDXFQ3N6dyRAibzxaWAoTkT-8cfufyieZpsBU94hbHUE2bbTsFHDANkI0R-_WgLKxH2g0cD5fSVpyM3B-q3ClYtC4HlFG3XXabnZ1UQQ7ZBfmQh6VTeOzA/s800/youngwoman_38.png',
    'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi4OVH2l_91-VCNi2JnqpajmaYSR3_CcRDS3qVtLskvC647ss2lRg6dqjoFC7fYkwEzt-ny1GI03-y3mtd1t-mmJC0iyV4G60ZsUTXi4Dz_HXterR-fk-DYlX4qitZAmbBCvDOta8T_oiI/s800/youngwoman_39.png',
    'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj9lQ7mExKfjpIo8ebmBE2WXKD7xRUYUJmQKjTPESgRwsIGNq6lcwMOqxvdCJU6SYZQeL3N34VB59VRXlD0zoWCEiBD5OlmcRTVEgZQpShPQ8F77XS8HdTqiTjwZFR8Qi6YUQ5nHByaHBk/s800/youngwoman_40.png',
    'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgmVYnaZD7MpBfHSoptE8sgQTAqYOuz-KNUOlQCUvzO9uo47AADDb1SK7s8GPYDE2_qBUJtR4IFMaO6ovo7_rLKZxfPNgWX7X4qj0aa2sAqLXEzffsoZnxF6Se_E05in5yP8Ufn7LbQC_o/s800/youngwoman_41.png',
    'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEivLUx1V1AdsHtS00EyFhXxhujhP9RbvGupWaBZyjXRyel3s7IWYdrmtzYdhP4H9qLGbtniC-gEcTFalgiuo7qyZ2hBRfnzC3gZwSDR2emsXu53oQEZtlbG_Gy4d_SUrhAFp98-jSTwQQg/s800/youngwoman_42.png',
    'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhtug9VvDi1q75viObiWWl_8X27iGzRmxAC66Td3lDhze_9lzyFRSb-T05PPltYl0u2GQ_lvIyBGqiSwLAzljp33cHpBiXriqcLUvJMBe2QFnPjVbyijm-_X8vGpQI2DbW_W9gCK4rznmc/s800/youngwoman_43.png',
    'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjjYwC_9IhHNzQRy7RnbnqVCU-KsArK679Tdvv1MTTThA0gzwrXnnPJzbirhB2kD1mYg_DG0xeHPbAa9tdZU927IZhtYJfrgEJpM7ZnvxYEkBFFy-32BtNcR9b0LwZyCMb2DCJoFdQgPRo/s800/youngwoman_44.png',
    'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi87fVhIXuDZfLJill8nhSGpNV2eWMUs3eXFrHshi-wBhr-Vrdz4rnky62JkqZNKC8I2MqV1JnNdlySRr76FoSSB8c6uM_8gQCBakcTU-U_B2IFXmwCVSmrFfFqQJHengEjsJRRkUPUm5s/s800/youngwoman_45.png',
    'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjReEROpYxQIud8enrD32SQHao-sIstlT7RlH7AN9Flh_51nwKKTbkPNSdzq7fVi1r_ko7TTj-Oerm10RemHA5s7Q9HDAPBzWQlu4c-Ki9rsbf5epn2Hh_6SLNOu9QEAaP1DMPhta6S6co/s800/youngwoman_46.png',
    'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgXr4e9KAp-ywRvTf9lPw-uPUSuh1cAFRkW1QuRFE9MlP-gSZTONdYcLPt6WN-9T8HVZPMibtXooGFFH2LHmrNdNgFzgsclyQmYZyClbvrL2ifhNOYIDAE7hv5ElaG6S0HcbIXbJD0d_0E/s800/youngwoman_47.png',
    'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiob6LYxPAqCSSXuLzaPwi5FWZy1SJeOc7AyRr0Sq2V9LeIE8hpoUbxGfkeLvTIWXYJ9OgNVoQkVuv-EkqlsOOaBHLaFmJzJb6CvWmvz3lSW4B-wEmBm_TQvuN7bANcOJDWp1QlS0MXDKk/s800/youngwoman_48.png',
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
        if (displayCounter > 0) {
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