// test comment for a new commit
document.getElementById("buttonGetIn").addEventListener('click', saludito);
function saludito() {
    const welcome = document.getElementById("welcome");
    const name = document.getElementById("name").value;

    if (name === "") {
        welcome.innerHTML = "Por favor, ingrese su nombre";
    }
    else {
        welcome.innerHTML = "Bienvenidx " + name + "!";
        enableFormElements();
    }
}

function handleKeyPress(event) {
    if (event.keyCode === 13) {
        saludito();
    }
}
document.addEventListener('DOMContentLoaded', () => {
    disableFormElements();
});

function disableFormElements() {
    const formElements = document.getElementById("formElements");
    formElements.classList.add('disabled');
    formElements.querySelectorAll('input, select').forEach(element => {
        element.disabled = true;
    });
}

function enableFormElements() {
    const formElements = document.getElementById("formElements");
    formElements.classList.remove('disabled');
    formElements.querySelectorAll('input, select').forEach(element => {
        element.disabled = false;
    });
    document.getElementById("buttonMode").classList.remove('disabled');
}

function calculate() {
    const amount = parseInt(document.getElementById("amount").value);
    let options = document.getElementById("options").value;
    const transactionType = document.getElementById("transactionType").value;

    if (isNaN(amount) || amount <= 0) {
        document.getElementById("result").innerHTML = "Por favor, ingrese un monto válido";
        return;
    }
    if (options == 'default') {
        document.getElementById("result").innerHTML = "Por favor, ingrese un tipo de cambio.";
        return;
    }

    const rates = {
        buy: {
            official: 954,
            blue: 1390,
            euro: 1024
        },
        sell: {
            official: 940,
            blue: 1375,
            euro: 1010
        }
    };

    const rate = rates[transactionType][options];
    const result = amount / rate;
    document.getElementById("result").innerHTML = "Resultado: " + result.toFixed(2);
}

const image = document.getElementById("image");
options.addEventListener("change", () => {
    image.setAttribute("src", "/img/" + options.value + ".jpg");
})

document.getElementById("buttonMode").addEventListener('click', () => {
    document.getElementById("footer").classList.toggle("darkMode")
    document.getElementById("main").classList.toggle("darkMode")
})