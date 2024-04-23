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
    'https://lh3.googleusercontent.com/d/1KrrXXWKUBmFdmO5F6S-quXIJqvbnhNQK',
    'https://lh3.googleusercontent.com/d/1woCuD6hexT0-XJIL1TzcC-UjZip8szqa',
    'https://lh3.googleusercontent.com/d/1Mq8-T0WCyVYbOmCoQlqvIkAMz8keDWWR',
    'https://lh3.googleusercontent.com/d/1cdABJCknivfXAUTIR9VOZHM4bmfkZPlN',
    'https://lh3.googleusercontent.com/d/1edwKDIiCmwlEjv6N8De8RKt7jm0iqUM4',
    'https://lh3.googleusercontent.com/d/1Q6QpqmzRm0-BTONMg4KSC9AVOhQSbHaa',
    'https://lh3.googleusercontent.com/d/1f6TSEhdNPWml_sHORiGHz2YuRwlV-P0p',
    'https://lh3.googleusercontent.com/d/1ue4z9Ae0E2MHc6MaSBIrXGxGdh3Iveaw',
    'https://lh3.googleusercontent.com/d/1y9MM8-DQcAQrh4y3tSlTkjURHGrBM1iJ',
    'https://lh3.googleusercontent.com/d/1FMx_cV08z8MCRsMCgTBN3wCeNmk5M91U',
    'https://lh3.googleusercontent.com/d/1mQSio88mWB5vAb50XfsVuQ3J-DnW0CUj',
    'https://lh3.googleusercontent.com/d/1nbkriLGDrpC1D65-p7sY1aBcv0KDl8Oc',
    'https://lh3.googleusercontent.com/d/1G7-bnlbPwsFXccE8xN5genuyOpceAY-k',
    'https://lh3.googleusercontent.com/d/1c3hsMW_QDiLF3m_37rLYz0rqlo-jWr7R',
    'https://lh3.googleusercontent.com/d/1qMpcS5kk5x0-C67kNRJ7ZiEIQy38X3hT',
    'https://lh3.googleusercontent.com/d/1WZhQ0tlEvJRf1p5VSflHAY6oWbcdLOhg',
    'https://lh3.googleusercontent.com/d/1osv6OLErNn6xtt0gKJZQ-USWdmzAxqjs',
    'https://lh3.googleusercontent.com/d/1M16M7JEGKuaF6GGyasVKipSPJP2Cjfez',
    'https://lh3.googleusercontent.com/d/1bpukqJCcSBS8JQIvJEgyv8nUe9k2o0Uw',
    'https://lh3.googleusercontent.com/d/183plSYLrXInZAaa9n9Px3z11sicn4aHh',
    'https://lh3.googleusercontent.com/d/18IANwbtNUyu_zOYUwdlvYIUC1RziOYWD',
    'https://lh3.googleusercontent.com/d/1bHj5YxcBtmoht0_5yxulZeoi7IyNTeQY',
    'https://lh3.googleusercontent.com/d/1C2dNOE_VQgcRf8TcV2WyP4tzyn7xyMlK',
    'https://lh3.googleusercontent.com/d/1L-FC8D-aUENBwnqnOgMVHxMFWn1ML19u',
    'https://lh3.googleusercontent.com/d/1328hrQnYKU6l92PPgjjc2xBo6ONlOyqW',
    'https://lh3.googleusercontent.com/d/1xG61cmVpyyZ5S84NKi8kkJjDyI9OJ2Yu',
    'https://lh3.googleusercontent.com/d/1LOTfrpGMu6eXRp72KznoMzEecfJtDXyl',
    'https://lh3.googleusercontent.com/d/19urfn6fyIzjpO361BIegDGGtjV2MBwVC',
    'https://lh3.googleusercontent.com/d/1lhK6WJ_O9FpZzaYBLEZ_o4Ju6UjFNsdx',
    'https://lh3.googleusercontent.com/d/1TVBXaGemEkvKf_6k10l6vyCTbtiZrH7K',
    'https://lh3.googleusercontent.com/d/1fGqsABhrtfEfAoFGb7PPiGRt6pMlVlrI',
    'https://lh3.googleusercontent.com/d/14XtfIVu_tTJpWLXaV3ZyYwhLFOtz4pYA',
    'https://lh3.googleusercontent.com/d/1Gmxx6gUECQN-hjbdbVY48uwHe962mgju',
    'https://lh3.googleusercontent.com/d/1qwfrn_Qk_t4Lkb7sYiHnDJ7-RZFhlX2A',
    'https://lh3.googleusercontent.com/d/1KIvTl8S6d5_o1kWarAYszHwD3wFkQ685',
    'https://lh3.googleusercontent.com/d/1kh7pRcrJWnkLhmzRPql7jzoder2OSGmB',
    'https://lh3.googleusercontent.com/d/1zSo5GysSEYVddJjB7UGGhQWREb1WEZTv',
    'https://lh3.googleusercontent.com/d/1W2f54zlV0zjLmV7Y2cZ-JAmuIUI9-bRt',
    'https://lh3.googleusercontent.com/d/1E01tN5kRyesLcMtVttZNhWEPMkYAC47b',
    'https://lh3.googleusercontent.com/d/1cl5dT-DbCxn_tBxfGFvh5zWiG4iG4jEG',
    'https://lh3.googleusercontent.com/d/1W46NQncWErZ5EsCKz-RzlA9OLUCN3H0U',
    'https://lh3.googleusercontent.com/d/1bavjgEK2YpCZKYakpA4_YX4DZVwL_u6-',
    'https://lh3.googleusercontent.com/d/1sVhk-7VJzckmKj3cafpKjeQqSFw5hojB',
    'https://lh3.googleusercontent.com/d/1ycjRQtqgF7EVfYWepVIXO06rz5QGYbeb',
    'https://lh3.googleusercontent.com/d/1WcH9MIYx_uHo2PldOCo-oc-uOWN-fOY9',
    'https://lh3.googleusercontent.com/d/1KIR4XqaHMjTN5IFkliIEcRBHQ5NgVXp3',
    'https://lh3.googleusercontent.com/d/195M2JpuJ10KKG9AtA0_6XgFiVSlEyIPa',
    'https://lh3.googleusercontent.com/d/1L2IuDQRSnAO956grsKEuPJzhleXKgM5h',
    'https://lh3.googleusercontent.com/d/1dVy3WNc2w3hQMI66tkySoOzn1iaU0TwC',
    'https://lh3.googleusercontent.com/d/1EPFtqW8Czr3D3d5JfaHpnCCTxIySw4fP',
    'https://lh3.googleusercontent.com/d/1RF8x_q555BOd0SNG_P1tyWVdGMfiM6_9',
    'https://lh3.googleusercontent.com/d/1HZ2yqW-AN6AaNwdYC1lpAQvPk1-2-UOZ',
    'https://lh3.googleusercontent.com/d/1p-ujj07FiFfJUjRTeRtz1R3W_lkPvcwM',
    'https://lh3.googleusercontent.com/d/1CJNXfRAS9UHMMh4ATA8GvEhr_f_8TWEm',
    'https://lh3.googleusercontent.com/d/1KGoHcXnliY3qE5ln186CR9dyLdbh-eal',
    'https://lh3.googleusercontent.com/d/1nPYdDGnuPIfIN4oJgbYmi0vzL4xdOsSI',
    'https://lh3.googleusercontent.com/d/1I8GqdK3XfT9iN6kK4fDIZxsJQwsj0jH7',
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