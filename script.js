const imageFilenames = [
    'https://lh3.googleusercontent.com/d/1zfTr-TAHdNXGab9C-C_Sm-2TdFV8tvg-',
    'https://lh3.googleusercontent.com/d/1Z0gQoMBBNN2w3mNtoIpo_temBsqLwytB',
    'https://lh3.googleusercontent.com/d/10FLlKIc6v3m3Z49dWQ2btqkWMKkI524d',
    'https://lh3.googleusercontent.com/d/1URGpS3DXkhXktNUHolK-454i8ZxpJg3c',
    'https://lh3.googleusercontent.com/d/1UeqAQSLvgSxMU2I7ioFtiF3pcIC_FhrV',
    'https://lh3.googleusercontent.com/d/1EbL9H92Ay_conJ2T4c6BQlkgHebOPLYr',
    'https://lh3.googleusercontent.com/d/1e6eKW-5JC3Qb3xnk6D5ow_eN6au9syj9',
    'https://lh3.googleusercontent.com/d/1ceW8wxZ5YY85QHgNodPohFrLH368GQX1',
    'https://lh3.googleusercontent.com/d/1W4BSaR037v22tMVG46c4rf5URaKl6HJc',
    'https://lh3.googleusercontent.com/d/1oBjH4R7kEzIy5UJcGaV41eHkexaf4UCt',
    'https://lh3.googleusercontent.com/d/1npXEOnitNxO94LmyrMpWDYuVNvajGv4v',
    'https://lh3.googleusercontent.com/d/1584pUDFYDd6OFNJrFoaqwAZaH1EW_V8m',
    'https://lh3.googleusercontent.com/d/1gxSlSPseV9ew3CCfQbZaY1bGTj91yqev',
    'https://lh3.googleusercontent.com/d/1XLrUsBkIthWsggg-zvXu88gFjUHPuUgs',
    'https://lh3.googleusercontent.com/d/1rCBsHxoMywI-zDubRtAdVI43PoWI8ZoU',
];

let displayCounter = 5;
let availableIndices = Array.from(imageFilenames.keys());
let isResultDisplayed = false;

function displayInitialImages() {
    const images = pickRandomImages();
    const imageContainer = document.getElementById('images-container');
    imageContainer.innerHTML = `
    <img class=" col-xs-12 col-sm-8 col-md-4" onclick="touch(this)" src="${images[0]}" alt="選択肢1">
    <img class=" col-xs-12 col-sm-8 col-md-4" onclick="touch(this)" src="${images[1]}" alt="選択肢2">
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
            <img class=" col-xs-12 col-sm-8 col-md-4" onclick="touch(this)" src="${images[0]}" alt="選択肢1">
            <img class=" col-xs-12 col-sm-8 col-md-4" onclick="touch(this)" src="${images[1]}" alt="選択肢2">
            `;

            displayCounter--;
            document.getElementById('click-counter').innerText = `あと${displayCounter}回クリック`;
        } else {
            showResult();
        }
    }, 300);
}

function showResult() {
    const images = pickRandomImages();
    const imageContainer = document.getElementById('images-container');
    imageContainer.innerHTML = `
    <img class="col-xs-12 col-sm-8 col-md-4" src="${images[0]}" alt="診断結果">
    <canvas class="col-xs-12 col-sm-8 col-md-4" id="chart"></canvas>
    `;
    var chartElement = document.getElementById("chart");

    var data = {
        labels: [
            '製作陣の推し度',
            'ロリ',
            'あなたとの相性',
            '萌え',
            '清楚系'
        ],
        datasets: [{
            label: false,
            data: [Math.floor(Math.random() * 11), Math.floor(Math.random() * 11), Math.floor(Math.random() * 11), Math.floor(Math.random() * 11), Math.floor(Math.random() * 11)],
            fill: true,
        }]
    }

    var myRadarChart = new Chart(chartElement, {
        type: 'radar',
        data: data,
        options: {
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                r: {
                    min: 0,
                    max: 10,
                    ticks: {
                        stepSize: 2,
                    }
                }
            }
        },
    });

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

function touch(elem) {
    elem.classList.add("img-hover");
    setTimeout(() => {
        elem.classList.remove('img-hover');
    }, 300);

    elem.addEventListener('touchcancel', function () {
        this.classList.remove('img-hover');
    });
    elem.addEventListener('touchend', function () {
        this.classList.remove('img-hover');
    });
}