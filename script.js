// =======================
// PREGUNTAS (RELLENA TÚ)
// =======================

// --- SENTENCIAS (V / F) ---
const preguntasSentencias = [
  /*
  {
    texto: "",
    opciones: ["v) Verdadero", "f) Falso"],
    correcta: "v"
  }
  */
];

// --- MINITEST (3 OPCIONES) ---
const preguntasMinitest = [
  /*
  {
    texto: "",
    opciones: [
      "a) ",
      "b) ",
      "c) "
    ],
    correcta: "a"
  }
  */
];

// --- FRASES DE ÁNIMO ---
const frases_animo = [
  "¡Muy bien!",
  "¡Correcto!",
  "¡Buen trabajo!",
  "¡Así se hace!",
  "¡Perfecto!"
];

// =======================
// VARIABLES
// =======================

let modo = "";
let preguntasParaEsteTest = [];
let i = 0;
let puntuacion = 0;

// =======================
// FUNCIONES
// =======================

function barajar(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] =
      [array[randomIndex], array[currentIndex]];
  }
}

function mostrarMensaje(texto, tipo) {
  const chat = document.getElementById("chat");
  const msg = document.createElement("div");
  msg.classList.add("message", tipo);
  msg.innerHTML = texto.replace(/\n/g, "<br>");
  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
}

function mostrarMenuInicial() {
  mostrarMensaje(
    "👋 Hola, bienvenido al Tema 1.\n\n¿Qué quieres practicar?",
    "bot"
  );
  mostrarMensaje(
    "A) Sentencias (Verdadero / Falso)\nB) Mini-test (3 opciones)",
    "bot"
  );

  configurarBoton("btnA", "Sentencias", iniciarSentencias);
  configurarBoton("btnB", "Mini-test", iniciarMinitest);
  ocultarBotones(["btnC", "btnD"]);
}

function iniciarSentencias() {
  modo = "sentencias";
  i = 0;
  puntuacion = 0;

  barajar(preguntasSentencias);
  preguntasParaEsteTest = preguntasSentencias.slice(0, 30);

  configurarBoton("btnA", "V", () => responder("v"));
  configurarBoton("btnB", "F", () => responder("f"));
  ocultarBotones(["btnC", "btnD"]);

  mostrarPregunta();
}

function iniciarMinitest() {
  modo = "minitest";
  i = 0;
  puntuacion = 0;

  barajar(preguntasMinitest);
  preguntasParaEsteTest = preguntasMinitest.slice(0, 20);

  configurarBoton("btnA", "A", () => responder("a"));
  configurarBoton("btnB", "B", () => responder("b"));
  configurarBoton("btnC", "C", () => responder("c"));
  ocultarBotones(["btnD"]);

  mostrarPregunta();
}

function mostrarPregunta() {
  if (!preguntasParaEsteTest[i]) return;

  const p = preguntasParaEsteTest[i];
  const texto = `${p.texto}\n\n${p.opciones.join("\n")}`;
  mostrarMensaje(texto, "bot");
}

function responder(opcion) {
  const p = preguntasParaEsteTest[i];
  mostrarMensaje(opcion.toUpperCase(), "user");

  if (opcion === p.correcta) {
    puntuacion++;
    mostrarMensaje(
      frases_animo[Math.floor(Math.random() * frases_animo.length)],
      "bot"
    );
  } else {
    mostrarMensaje(
      `❌ Incorrecto. La correcta era ${p.correcta.toUpperCase()}`,
      "bot"
    );
  }

  i++;

  if (i < preguntasParaEsteTest.length) {
    setTimeout(mostrarPregunta, 600);
  } else {
    setTimeout(() => {
      mostrarMensaje(
        `🏁 Resultado final: ${puntuacion} / ${preguntasParaEsteTest.length}`,
        "bot"
      );
      desactivarBotones();
    }, 600);
  }
}

function configurarBoton(id, texto, accion) {
  const btn = document.getElementById(id);
  btn.style.display = "block";
  btn.textContent = texto;
  btn.onclick = accion;
}

function ocultarBotones(ids) {
  ids.forEach(id => {
    document.getElementById(id).style.display = "none";
  });
}

function desactivarBotones() {
  document.querySelectorAll("button").forEach(b => b.disabled = true);
}

// =======================
// ARRANQUE
// =======================

document.addEventListener("DOMContentLoaded", mostrarMenuInicial);

