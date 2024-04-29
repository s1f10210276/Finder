const imageFilenames = [
    'https://lh3.googleusercontent.com/d/1FI_WabHEQiQqWakNcsnSSFVXzXxl5e-9',
    'https://lh3.googleusercontent.com/d/18j_MGaWchKYGu8UVMzwZGj9DGRnmb6hl',
    'https://lh3.googleusercontent.com/d/15eNnAW86F8_1jnpXsVx8k5AKQli4an09',
    'https://lh3.googleusercontent.com/d/1t2Br_Fnjcg8Kx_ESKmlQ8mMOFjlfy0Ai',
    'https://lh3.googleusercontent.com/d/1mEq5EnVmdWHUXaXlprzE6WiKfWTnFmhu',
    'https://lh3.googleusercontent.com/d/1QFCaoZlvhBkWZ5wv9RuYJgZah_lJqmU_',
    'https://lh3.googleusercontent.com/d/1epOPF0ET_fFa-Nx349dCfQ0glCQtdLXX',
    'https://lh3.googleusercontent.com/d/1i3VMisLvw_koQJpTWxhzyV-R1KpHFODK',
    'https://lh3.googleusercontent.com/d/1oLdEeWc3uYgYHrMPPSWEbAdfLD4GTeTN',
    'https://lh3.googleusercontent.com/d/1eflKl5ODhOBxOiRQ23ewoC20HIGU3f_U',
    'https://lh3.googleusercontent.com/d/1i38R-obHVvUSfiEasLMQEfA9xpOGfPbi',
    'https://lh3.googleusercontent.com/d/1woCuD6hexT0-XJIL1TzcC-UjZip8szqa',
    'https://lh3.googleusercontent.com/d/1Mq8-T0WCyVYbOmCoQlqvIkAMz8keDWWR',
    'https://lh3.googleusercontent.com/d/1cdABJCknivfXAUTIR9VOZHM4bmfkZPlN',
    'https://lh3.googleusercontent.com/d/1Q6QpqmzRm0-BTONMg4KSC9AVOhQSbHaa',
    'https://lh3.googleusercontent.com/d/1f6TSEhdNPWml_sHORiGHz2YuRwlV-P0p',
    'https://lh3.googleusercontent.com/d/1ue4z9Ae0E2MHc6MaSBIrXGxGdh3Iveaw',
    'https://lh3.googleusercontent.com/d/1y9MM8-DQcAQrh4y3tSlTkjURHGrBM1iJ',
    'https://lh3.googleusercontent.com/d/1FMx_cV08z8MCRsMCgTBN3wCeNmk5M91U',
    'https://lh3.googleusercontent.com/d/1mQSio88mWB5vAb50XfsVuQ3J-DnW0CUj',
    'https://lh3.googleusercontent.com/d/1nbkriLGDrpC1D65-p7sY1aBcv0KDl8Oc',
    'https://lh3.googleusercontent.com/d/1G7-bnlbPwsFXccE8xN5genuyOpceAY-k',
    'https://lh3.googleusercontent.com/d/1c3hsMW_QDiLF3m_37rLYz0rqlo-jWr7R',
    'https://lh3.googleusercontent.com/d/1WZhQ0tlEvJRf1p5VSflHAY6oWbcdLOhg',
    'https://lh3.googleusercontent.com/d/1osv6OLErNn6xtt0gKJZQ-USWdmzAxqjs',
    'https://lh3.googleusercontent.com/d/1M16M7JEGKuaF6GGyasVKipSPJP2Cjfez',
    'https://lh3.googleusercontent.com/d/1bpukqJCcSBS8JQIvJEgyv8nUe9k2o0Uw',
    'https://lh3.googleusercontent.com/d/183plSYLrXInZAaa9n9Px3z11sicn4aHh',
    'https://lh3.googleusercontent.com/d/18IANwbtNUyu_zOYUwdlvYIUC1RziOYWD',
    'https://lh3.googleusercontent.com/d/1C2dNOE_VQgcRf8TcV2WyP4tzyn7xyMlK',
    'https://lh3.googleusercontent.com/d/1L-FC8D-aUENBwnqnOgMVHxMFWn1ML19u',
    'https://lh3.googleusercontent.com/d/1328hrQnYKU6l92PPgjjc2xBo6ONlOyqW',
    'https://lh3.googleusercontent.com/d/1xG61cmVpyyZ5S84NKi8kkJjDyI9OJ2Yu',
    'https://lh3.googleusercontent.com/d/1LOTfrpGMu6eXRp72KznoMzEecfJtDXyl',
    'https://lh3.googleusercontent.com/d/19urfn6fyIzjpO361BIegDGGtjV2MBwVC',
    'https://lh3.googleusercontent.com/d/1lhK6WJ_O9FpZzaYBLEZ_o4Ju6UjFNsdx',
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
    'https://lh3.googleusercontent.com/d/1svAnrGL08pP6K4b8NRk7iJBpPa1VnB-4',
    'https://lh3.googleusercontent.com/d/14UrEClwqnw2MZVRMuMxUhlu9EzdXu26I',
    'https://lh3.googleusercontent.com/d/14ML-YPu-O0n5ONxjiGQLuCD9OZKv5AZU',
    'https://lh3.googleusercontent.com/d/1IerM4Xtc6yPgpi7lAXnrOKlWctvVP8Zf',
    'https://lh3.googleusercontent.com/d/1Mx2tiblik5WiSiSgdF-NfKckk_LiMXHh',
    'https://lh3.googleusercontent.com/d/1JpQjAi1K_ISwzN1WpqFdAET-h7dKSp_F',
    'https://lh3.googleusercontent.com/d/1cqTjTB0FCQpQALEJ61KjyjUcFNpw9ttV',
    'https://lh3.googleusercontent.com/d/1IJfI9EFkvT321ZdJD50iK1FcpoEfqjCN',
    'https://lh3.googleusercontent.com/d/148mycsFzt5eRy-e4eIUwnluCiHpo6Fj4',
    'https://lh3.googleusercontent.com/d/1KGhOJY1QAfPOc86XQvRJ-P1xMJnQ6CT8',
    'https://lh3.googleusercontent.com/d/1pywVHQ8MSC5BGfN3MaiKA5_43TQqVWrI',
    'https://lh3.googleusercontent.com/d/1TuStvSqn_LKH6rlNDl_OYX22Ltwgn383',
    'https://lh3.googleusercontent.com/d/1SZGjc0SWP-UjR0c41p6C_OGMm9Zy26E4',
    'https://lh3.googleusercontent.com/d/1K2jHQ4wG8Xz5aJkyUKL3QZufhagfU2eW',
    'https://lh3.googleusercontent.com/d/1qPvzJmI-qBY7QOf5TOlkNUgI1ixmfoyP',
    'https://lh3.googleusercontent.com/d/1oO8MK12rIKHSVqtP14CYnhAikp333lAe',
    'https://lh3.googleusercontent.com/d/1d5vOO5B2smVZnALAND5TMXiaS9a5uz6K',
    'https://lh3.googleusercontent.com/d/14GnleWJBk4wtzDTYFkThtwTK7z0ztMrV',
    'https://lh3.googleusercontent.com/d/1SUxejGsZWYtnWa68RDSW9fDCXNMpyiTk',
    'https://lh3.googleusercontent.com/d/17gzeLjHNq0AYY_lLPGVLBVD0zA4Wp3uT',
    'https://lh3.googleusercontent.com/d/1S9dI1pLCAoSYivM9gWv2jCXchOUEik9Q',
    'https://lh3.googleusercontent.com/d/1YjeWmMPUqrJlp1R0qGqfJnIXrOIuuCPZ',
    'https://lh3.googleusercontent.com/d/1AyvRL8IZd0nX8gGuWHcuaB4el6WhELp0',
    'https://lh3.googleusercontent.com/d/1e95QY7-HMi1H6vBlM3wE2EevLt6zDirM',
    'https://lh3.googleusercontent.com/d/1MN5wcdzvZ5AxERciSR6_kqfWFCBCQFzZ',
    'https://lh3.googleusercontent.com/d/1NsXu6tnB0lhLk96ue_jq3P-MQQtZkseN',
    'https://lh3.googleusercontent.com/d/1o7RkqwuWmszl1XoyJOasCMFVF-sesgqU',
    'https://lh3.googleusercontent.com/d/1ZFcanDygcR9GRrY4MqYHd-YMSs2gmxbo',
    'https://lh3.googleusercontent.com/d/18pzm-j8WRWdtbjzfAZLFtGdT6GeVa_u4',
    'https://lh3.googleusercontent.com/d/19QvW0FBZM-g5Mo4Wr_GC3JPQ9yop3xv9',
    'https://lh3.googleusercontent.com/d/1R82YOSIlEDgQZskJNldgoAxPZfVRGKEc',
    'https://lh3.googleusercontent.com/d/17c6Hrb6BY1VCRlTG5tnH0DmjmAaAADlY',
    'https://lh3.googleusercontent.com/d/1JdYlBx9Y7I579dsglIExcmysaRFWmoCm',
    'https://lh3.googleusercontent.com/d/1Qom555fBiOD8o6n38kyKa0-SlA5B5ooP',
    'https://lh3.googleusercontent.com/d/14bZ6Kjn8ZaOvNotcSBx2Ushom0yz995p',
    'https://lh3.googleusercontent.com/d/1NEg5rQzs4i8bHaWkbH3ezLVW6n1vTZLM',
    'https://lh3.googleusercontent.com/d/1HsJmglgxYtJzHWCk5tqWneJuOEoYnJ9H',
    'https://lh3.googleusercontent.com/d/1DSOI6V-W-OpmMGdlcYY9lBDBOeAWSE-N',
    'https://lh3.googleusercontent.com/d/1v8yTdEnCcMHebth_hv2CiBLn90mJWFCG',
    'https://lh3.googleusercontent.com/d/18iZmM2vjeiS6oHQ1wo2YDOEiGIte4KOV',
    'https://lh3.googleusercontent.com/d/16AlJAduBysN5jQgeUFYqvTITiEaHSp9Z',
    'https://lh3.googleusercontent.com/d/1QzXoAYKiQXBYX9gNBnxc-rCwAb9e1_zY',
    'https://lh3.googleusercontent.com/d/1fimalOWUkR5bvwJf0ejUpPQdMWQsJOM-',
    'https://lh3.googleusercontent.com/d/1b_IRdXRJPNijOoC5tqqj7ADyOYa-lgnO',
    'https://lh3.googleusercontent.com/d/1fdheun_OjAFByufTdby_GGQ__1V_Rs3a',
    'https://lh3.googleusercontent.com/d/17-AcqoixCsLae4r7tKiM0GohR_mioAs4',
    'https://lh3.googleusercontent.com/d/1Hpe91BsGkDWdgQEHi8ZGbbJlJysr2Bd6',
    'https://lh3.googleusercontent.com/d/1UmNnRAefEHQKBZaKdJV4V9AKmGlN5TL-',
    'https://lh3.googleusercontent.com/d/1Y6vJa0j_krmu2y_4yozbiCbg98p37uwS',
    'https://lh3.googleusercontent.com/d/1wnqzqgo3woLkpPKArM7aFHH_Sl8Ni-uy',
    'https://lh3.googleusercontent.com/d/1-VtVOeGIT1TDbOR9qTtm5JsMGty1lM0B',
    'https://lh3.googleusercontent.com/d/1qWOMaAkY8D2AtK4ckCQB8uIRSYXPBbH0',
    'https://lh3.googleusercontent.com/d/1DA0kpCp1_E8Bl1xZd4Rx-sYiJNqY9ib5',
    'https://lh3.googleusercontent.com/d/1daqcB2B1JWpOiJkySOcP1ebId5_ji2Zu',
    'https://lh3.googleusercontent.com/d/1OcWjyPnmfnhY_DyRh26qKDW6YMjW_Bec',
    'https://lh3.googleusercontent.com/d/1TXWrmT2nDjKVVr_v0b1-amSn2seC42-2',
    'https://lh3.googleusercontent.com/d/1Oni9_1ySR5E1weUzZEpE1rUU9vEAxOj8',
    'https://lh3.googleusercontent.com/d/1v9gqbQQnfajXeWmrXc-Pzjogn6ezTOBc',
    'https://lh3.googleusercontent.com/d/1k3PRiNMLfeZYrIvywGoofURa3ZoSeEMI',
];

let displayCounter = 5;
let availableIndices = Array.from(imageFilenames.keys());
let isResultDisplayed = false;

function displayInitialImages() {
    const images = pickRandomImages();
    const imageContainer = document.getElementById('images-container');
    imageContainer.innerHTML = `
    <img class="col-xs-12 col-sm-8 col-md-4" src="${images[0]}" alt="選択肢1">
    <img class="col-xs-12 col-sm-8 col-md-4" src="${images[1]}" alt="選択肢2">
    `;
    document.getElementById('click-counter').innerText = `あと${displayCounter}回クリック`;
}

function updateImages() {
    if (isResultDisplayed) return;
    else if (displayCounter > 1) {
        const images = pickRandomImages();
        const imageContainer = document.getElementById('images-container');
        imageContainer.innerHTML = `
            <img class="col-xs-12 col-sm-8 col-md-4" src="${images[0]}" alt="選択肢1" />
            <img class="col-xs-12 col-sm-8 col-md-4" src="${images[1]}" alt="選択肢2" />
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
    imageContainer.innerHTML = `
    <img class="col-xs-12 col-sm-8 col-md-4" src="${images[0]}" alt="診断結果">
    <canvas class="col-xs-12 col-sm-8 col-md-4" id="chart"></canvas>
    `;
    var chartElement = document.getElementById("chart");

    var data = {
        labels: [
            '製作陣の推し度',
            'ロリ',
            '陽キャ',
            'お色気',
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