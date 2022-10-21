import Notiflix from "notiflix";
const firstDelay = document.querySelector('input[name="delay"]'),
    delayStep = document.querySelector('input[name="step"]'),
    amount = document.querySelector('input[name="amount"]'),
    btnStart = document.querySelector("button[type='submit']");
// notiflixAlert = document.getElementById("NotiflixNotifyWrap-1");
// console.log(notiflixAlert);

function createPromise(position, delay) {
    return new Promise((resolve, reject) => {
        const shouldResolve = Math.random() > 0.3;

        setTimeout(() => {
            if (shouldResolve) {
                resolve({ position, delay });
            } else {
                reject({ position, delay });
            }
        }, delay);
    });
}

btnStart.addEventListener("click", (e) => {
    e.preventDefault();

    let delay = Number(firstDelay.value),
        step = Number(delayStep.value);

    for (let i = 0; i < amount.value; i++)
        createPromise(1 + i, delay + i * step)
            .then(({ position, delay }) => {
                Notiflix.Notify.success(
                    `✅ Fulfilled promise ${position} in ${delay}ms`
                );
            })
            .catch(({ position, delay }) => {
                Notiflix.Notify.failure(
                    `❌ Rejected promise ${position} in ${delay}ms`
                );
            });
});

// notiflixAlert.addEventListener("mousemove", onRemove);

// function onRemove() {
//     removeVisible();
// }

// function removeVisible() {
//     notiflixAlert.classList.add("nx-remove");
// }
