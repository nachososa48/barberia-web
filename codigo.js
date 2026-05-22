function calcular() {
    var n1 = parseInt(document.getElementById("numero1").value);
    var n2 = parseInt(document.getElementById("numero2").value);
    var result;
    var op = document.getElementById("operar").value;

    if (op == "1") {
        result = n1 + n2;
    }

    if (op == "2") {
        result = n1 - n2;
    }

    if (op == "3") {
        result = n1 * n2;
    }

    document.getElementById("resultado2").textContent = "El resultado es " + result;
}

function validar() {
    var usu = document.getElementById("usuario").value;
    var clave = document.getElementById("clave").value;

    if (usu == "ignaciososa" && clave == "1234") {
        window.location.href = "sistema.html";
    } else {
        alert("Usuario o clave incorrecta");
    }
}

// funcion limpiar
function limpiar() {
    document.getElementById("usuario").value = "";
    document.getElementById("clave").value = "";
}

// funcion para afiliar cliente
function afiliar() {
    var ema = document.getElementById("email").value;

    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("email").value = "";

    if (ema == "cliente@gmail.com") {
        document.getElementById("resultado3").textContent = "CLIENTE YA EXISTE";
    } else {
        document.getElementById("resultado3").textContent = "CLIENTE AFILIADO";
    }
}

// funcion para cotizar servicios de barberia
function cotizar() {
    var ser = document.getElementById("servicio").value;
    var ti = document.getElementById("tipo").value;

    if (ser == "1" && ti == "1") {
        document.getElementById("resultado4").textContent = "$6000";
    }

    if (ser == "1" && ti == "2") {
        document.getElementById("resultado4").textContent = "$7500";
    }

    if (ser == "1" && ti == "3") {
        document.getElementById("resultado4").textContent = "$9000";
    }

    if (ser == "1" && ti == "4") {
        document.getElementById("resultado4").textContent = "$5000";
    }

    if (ser == "2" && ti == "1") {
        document.getElementById("resultado4").textContent = "$4000";
    }

    if (ser == "2" && ti == "2") {
        document.getElementById("resultado4").textContent = "$5500";
    }

    if (ser == "2" && ti == "3") {
        document.getElementById("resultado4").textContent = "$7000";
    }

    if (ser == "2" && ti == "4") {
        document.getElementById("resultado4").textContent = "$3500";
    }

    if (ser == "3" && ti == "1") {
        document.getElementById("resultado4").textContent = "$9000";
    }

    if (ser == "3" && ti == "2") {
        document.getElementById("resultado4").textContent = "$11000";
    }

    if (ser == "3" && ti == "3") {
        document.getElementById("resultado4").textContent = "$14000";
    }

    if (ser == "3" && ti == "4") {
        document.getElementById("resultado4").textContent = "$8000";
    }

    if (ser == "4" && ti == "1") {
        document.getElementById("resultado4").textContent = "$10000";
    }

    if (ser == "4" && ti == "2") {
        document.getElementById("resultado4").textContent = "$13000";
    }

    if (ser == "4" && ti == "3") {
        document.getElementById("resultado4").textContent = "$16000";
    }

    if (ser == "4" && ti == "4") {
        document.getElementById("resultado4").textContent = "$8500";
    }
}
// Reserva de turnos de la barbería
function reservarTurno() {
  let nombre = document.getElementById("nombreTurno").value;
  let telefono = document.getElementById("telefonoTurno").value;
  let servicio = document.getElementById("servicioTurno").value;
  let fecha = document.getElementById("fechaTurno").value;
  let hora = document.getElementById("horaTurno").value;
  let resultado = document.getElementById("resultadoTurno");

  if (nombre === "" || telefono === "" || servicio === "" || fecha === "" || hora === "") {
    resultado.innerHTML = "Debe completar todos los campos para reservar el turno.";
    resultado.style.color = "red";
  } else {
    resultado.innerHTML = "Turno reservado para " + nombre + 
      "<br>Teléfono: " + telefono +
      "<br>Servicio: " + servicio +
      "<br>Fecha: " + fecha +
      "<br>Hora: " + hora;

    resultado.style.color = "green";
  }
}

// Limpia el formulario de turnos
function limpiarTurno() {
  document.getElementById("nombreTurno").value = "";
  document.getElementById("telefonoTurno").value = "";
  document.getElementById("servicioTurno").value = "";
  document.getElementById("fechaTurno").value = "";
  document.getElementById("horaTurno").value = "";
  document.getElementById("resultadoTurno").innerHTML = "";
}