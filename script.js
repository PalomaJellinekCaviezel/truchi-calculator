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
    const selectedOption = document.getElementById("options").value;
    const transactionType = document.getElementById("transactionType").value;

    if (isNaN(amount) || amount <= 0) {
        document.getElementById("result").innerHTML = "Por favor, ingrese un monto válido";
        return;
    }
    if (selectedOption == 'default') {
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

    const rate = rates[transactionType][selectedOption];
    const result = amount / rate;
    document.getElementById("result").innerHTML = "Resultado: " + result.toFixed(2);
}

const images = {
    default: "https://www.lifeboxset.com/wp-content/uploads/2022/07/los-simpson-teoria-explica-como-es-homero-puede-pagar-todo.jpg",
    official: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4H6HswHyGL344m639r4FMs02OhKn3-xdm0w&s",
    blue: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS22uXXsCNhGa7LsgEF0HH8D4746G53Pphqxw&s",
    euro: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlem2Lc0kjTdV2ycb25pz5zuQVdqD-8Y9ADg&s"
};

options.addEventListener("change", () => {
    image.setAttribute("src", images[options.value]);
});

document.getElementById("buttonMode").addEventListener('click', () => {
    document.getElementById("footer").classList.toggle("darkMode")
    document.getElementById("main").classList.toggle("darkMode")
})