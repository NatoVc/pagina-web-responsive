// variables con el contenido
const form = document.getElementById('form');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('password2');
const registerButton = document.getElementById('registerButton'); // Agrega el botón de registro al código

// aca se dara un mensaje de error si hay un fallo en algun campo del registro
function showInputError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-input error animate__animated animate__headShake';
    const small = formControl.querySelector('small');
    small.innerText = message;
    setTimeout(function () {
        formControl.className = 'form-input error';
    }, 500);
}

function showInputSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-input success animate__animated animate__bounceIn';
}

// verifica si el correo tiene un formato valido 
function checkEmailValidity(input) {
    const re = /^([^{<>()\[\\\]\\.,;:\s@']+|\s+"[^"]+")@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

    if (re.test(input.value)) {
        showInputSuccess(input);
    } else {
        showInputError(input, 'Email no válido');
    }
}

// aca verifica los campos de entrada en el registro 
function checkRequiredField(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            showInputError(input, `${getFieldName(input)} is required`);
        } else {
            showInputSuccess(input);
        }
    });
}

// aca verifica la cantidad de caracteres ingresados dando que si pones menos del minimo saldra un error y si es mayor 
// dara tambien un error
function checkInputLength(input, min, max) {
    if (input.value.length < min) {
        showInputError(
            input,
            `${getFieldName(input)} al menos debe ser ${min} caracteres`
        );
    } else if (input.value.length > max) {
        showInputError(
            input,
            `${getFieldName(input)} debe ser menor que ${max} caracteres`
        );
    } else {
        showInputSuccess(input);
    }
}

// validara el nombre de usuario
function checkUsername(input) {
    const usr = /^[0-9a-zA-Z]+$/;
    if (!usr.test(input.value)) {
        showInputError(input, 'El nombre de usuario solo puede contener letras o numeros');
    }
}

// varificara si las contraseñas que pusiste son iguales
function checkPasswordMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showInputError(input2, 'Las contraseñas no coinciden');
    }
}

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    checkRequiredField([usernameInput, emailInput, passwordInput, confirmPasswordInput]);
    checkInputLength(usernameInput, 3, 15);
    checkInputLength(passwordInput, 6, 25);
    checkInputLength(confirmPasswordInput, 6, 25);
    checkEmailValidity(emailInput);
    checkPasswordMatch(passwordInput, confirmPasswordInput);
    checkUsername(usernameInput);

    if (!document.querySelector('.form-input.error')) {
        window.location.href = 'inicio.html';
    }

    if (!document.querySelector('.form-input.error')) {
        // Simula el proceso de registro
        alert('Usuario registrado exitosamente');
        // quise hacer que cuando se devuelva a la pagina inicial el boton de registro pase a ser el logo de la pagina
        registerButton.innerHTML = '<img src="https://i.pinimg.com/736x/56/c8/c0/56c8c0985a999c0d027ef94ce4cc9f7b.jpg" alt="Logo">';
    }
});
