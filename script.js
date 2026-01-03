// =======================
// PREGUNTAS (RELLENA TÚ)
// =======================

// --- SENTENCIAS (V / F) ---
const preguntasSentencias = [
  {
    texto: "El client decideix si un intercanvi és just comparant el que obté amb el que dona a canvi.",
    opciones: ["v) Verdadero", "f) Falso"],
    correcta: "v"
  },
  {
    texto: "El màrqueting només actua quan el client té una necessitat real.",
    opciones: ["v) Verdadero", "f) Falso"],
    correcta: "f"
  },
  {
    texto: "El màrqueting pot estimular desitjos aprofitant tendències de conducta humanes com la supèrbia o l’enveja.",
    opciones: ["v) Verdadero", "f) Falso"],
    correcta: "v"
  },
  {
    texto: "La compra compulsiva sempre respon a una necessitat real del consumidor.",
    opciones: ["v) Verdadero", "f) Falso"],
    correcta: "f"
  },
  {
    texto: "Una persona pot consumir un producte sense haver-lo comprat ella mateixa.",
    opciones: ["v) Verdadero", "f) Falso"],
    correcta: "v"
  },
  {
    texto: "El màrqueting empresarial té com a objectiu principal el benefici econòmic.",
    opciones: ["v) Verdadero", "f) Falso"],
    correcta: "v"
  },
  {
    texto: "El màrqueting social busca principalment augmentar les vendes d’una empresa.",
    opciones: ["v) Verdadero", "f) Falso"],
    correcta: "f"
  },
  {
    texto: "El màrqueting polític utilitza tècniques similars a les del màrqueting empresarial.",
    opciones: ["v) Verdadero", "f) Falso"],
    correcta: "v"
  },
  {
    texto: "El màrqueting estratègic se centra en accions a curt termini.",
    opciones: ["v) Verdadero", "f) Falso"],
    correcta: "f"
  },
  {
    texto: "El màrqueting operatiu executa les accions definides pel màrqueting estratègic.",
    opciones: ["v) Verdadero", "f) Falso"],
    correcta: "v"
  },
  {
    texto: "La distribució determina com arriba el producte al client final.",
    opciones: ["v) Verdadero", "f) Falso"],
    correcta: "v"
  },
  {
    texto: "La comunicació inclou eines com la publicitat, les promocions i les relacions públiques.",
    opciones: ["v) Verdadero", "f) Falso"],
    correcta: "v"
  },
  {
    texto: "El benchmarking consisteix a copiar exactament les pràctiques dels competidors.",
    opciones: ["v) Verdadero", "f) Falso"],
    correcta: "f"
  },
  {
    texto: "El benchmarking extern analitza empreses líders o competidores del sector.",
    opciones: ["v) Verdadero", "f) Falso"],
    correcta: "v"
  },
  {
    texto: "El màrqueting digital no presenta riscos ètics perquè és més eficient.",
    opciones: ["v) Verdadero", "f) Falso"],
    correcta: "f"
  },
  {
    texto: "L’ús de dades personals en màrqueting digital pot afectar la privacitat dels consumidors.",
    opciones: ["v) Verdadero", "f) Falso"],
    correcta: "v"
  },
  {
    texto: "El màrqueting és només vendre i fer publicitat.",
    opciones: ["v) Verdadero", "f) Falso"],
    correcta: "f"
  },
  {
    texto: "El màrqueting inclou tot el cicle del producte, des de la idea fins a la fidelització.",
    opciones: ["v) Verdadero", "f) Falso"],
    correcta: "v"
  },
  {
    texto: "La fidelització del client és tan important com aconseguir noves vendes.",
    opciones: ["v) Verdadero", "f) Falso"],
    correcta: "v"
  },
  {
    texto: "NH Hotels va detectar que el seu client tipus valorava principalment els luxes innecessaris.",
    opciones: ["v) Verdadero", "f) Falso"],
    correcta: "f"
  },
  {
    texto: "Eliminar serveis prescindibles pot millorar l’experiència del client.",
    opciones: ["v) Verdadero", "f) Falso"],
    correcta: "v"
  },
  {
    texto: "Tesla i Volvo poden tenir característiques tècniques similars però percepcions de mercat diferents.",
    opciones: ["v) Verdadero", "f) Falso"],
    correcta: "v"
  },
  {
    texto: "El consumidor, el comprador i el prescriptor sempre són la mateixa persona.",
    opciones: ["v) Verdadero", "f) Falso"],
    correcta: "f"
  },
  {
    texto: "La decisió de compra depèn de la percepció de l’equilibri entre producte, preu, distribució i comunicació.",
    opciones: ["v) Verdadero", "f) Falso"],
    correcta: "v"
  },
  {
    texto: "El màrqueting intern està dirigit als clients externs de l’empresa.",
    opciones: ["v) Verdadero", "f) Falso"],
    correcta: "f"
  },
  {
    texto: "El màrqueting relacional busca relacions a llarg termini amb els clients.",
    opciones: ["v) Verdadero", "f) Falso"],
    correcta: "v"
  },
  {
    texto: "El neuromàrqueting estudia com reacciona el cervell davant estímuls publicitaris.",
    opciones: ["v) Verdadero", "f) Falso"],
    correcta: "v"
  },
  {
    texto: "L’anàlisi DAFO permet identificar fortaleses, debilitats, oportunitats i amenaces.",
    opciones: ["v) Verdadero", "f) Falso"],
    correcta: "v"
  },
  {
    texto: "Els objectius del màrqueting estratègic han de ser rígids i immutables.",
    opciones: ["v) Verdadero", "f) Falso"],
    correcta: "f"
  },
  {
    texto: "L’objectiu final de l’empresa és maximitzar el benefici, no només el volum de vendes.",
    opciones: ["v) Verdadero", "f) Falso"],
    correcta: "v"
  }
];


// --- MINITEST (3 OPCIONES) ---

const preguntasMinitest = [
  {
    texto: "Una empresa llança un anunci on gairebé no es mostra el producte, però s’insisteix en emocions com el glamour, l’èxit i el reconeixement social. Quin és l’objectiu principal de l’anunci?",
    opciones: [
      "a) Informar detalladament sobre les característiques del producte",
      "b) Persuadir i reforçar la imatge de marca",
      "c) Reduir el preu percebut del producte"
    ],
    correcta: "b"
  },
  {
    texto: "Una marca analitza si el seu anunci reflecteix de manera coherent la missió, visió i valors corporatius. Què està avaluant principalment?",
    opciones: [
      "a) L’eficàcia del canal de distribució",
      "b) L’alineació estratègica del missatge publicitari",
      "c) El tipus de compra del consumidor"
    ],
    correcta: "b"
  },
  {
    texto: "En un anunci de llenceria de luxe, les models són famoses i representen sensualitat i èxit. Quin paper exerceixen principalment?",
    opciones: [
      "a) El consumidor final",
      "b) L’empresa fabricant",
      "c) Les models i celebrities"
    ],
    correcta: "c"
  },
  {
    texto: "Un producte s’adreça a dones urbanes, de 25 a 45 anys, amb alt poder adquisitiu. Quin concepte s’està definint?",
    opciones: [
      "a) El mercat total",
      "b) El target",
      "c) El mercat real"
    ],
    correcta: "b"
  },
  {
    texto: "Un anunci apel·la a l’autoestima, a l’èxit personal i al reconeixement social. En quin nivell de la piràmide de Maslow se situa principalment?",
    opciones: [
      "a) Necessitats fisiològiques",
      "b) Necessitats de seguretat",
      "c) Necessitats de reconeixement"
    ],
    correcta: "c"
  },
  {
    texto: "Una empresa ven un producte car, amb una forta imatge de marca i una compra poc freqüent. Quin tipus de compra és més probable?",
    opciones: [
      "a) Compra impulsiva",
      "b) Compra complexa o de selecció",
      "c) Compra d’emergència"
    ],
    correcta: "b"
  },
  {
    texto: "Un producte presenta baixos creixements del mercat i una forta competència, però una marca consolidada. En quina fase del cicle de vida es troba?",
    opciones: [
      "a) Introducció",
      "b) Creixement",
      "c) Maduresa"
    ],
    correcta: "c"
  },
  {
    texto: "Una empresa compara la seva estratègia publicitària amb la de les empreses líders del sector per millorar-la. Quina eina està utilitzant?",
    opciones: [
      "a) DAFO",
      "b) Benchmarking",
      "c) Segmentació de mercat"
    ],
    correcta: "b"
  },
  {
    texto: "Un anunci no busca vendre immediatament, sinó reforçar el record de marca. Quina funció de la comunicació compleix?",
    opciones: [
      "a) Informar",
      "b) Persuadir",
      "c) Recordar"
    ],
    correcta: "c"
  },
  {
    texto: "Una marca de cotxes comunica seguretat, confort i exclusivitat en els seus anuncis. Quin tipus d’atributs destaca principalment?",
    opciones: [
      "a) Atributs bàsics",
      "b) Atributs funcionals",
      "c) Atributs psicològics"
    ],
    correcta: "c"
  },
  {
    texto: "Una empresa ven directament al consumidor a través de la seva web, sense intermediaris. Quin tipus de canal utilitza?",
    opciones: [
      "a) Canal indirecte llarg",
      "b) Canal indirecte curt",
      "c) Canal directe"
    ],
    correcta: "c"
  },
  {
    texto: "Una empresa elimina serveis poc valorats per millorar l’experiència del client i reduir costos. Què està optimitzant?",
    opciones: [
      "a) La funcionalitat del producte",
      "b) El màrqueting operatiu",
      "c) El posicionament estratègic"
    ],
    correcta: "a"
  },
  {
    texto: "Un anunci se centra a crear desig encara que el consumidor no tingui una necessitat real. Què fa el màrqueting en aquest cas?",
    opciones: [
      "a) Satisfer necessitats bàsiques",
      "b) Estimular desitjos",
      "c) Reduir l’esforç econòmic"
    ],
    correcta: "b"
  },
  {
    texto: "Una marca apareix a la part alta d’un mapa de posicionament en preu i prestigi. Quina estratègia segueix?",
    opciones: [
      "a) Lideratge en costos",
      "b) Diferenciació",
      "c) Especialització en baix preu"
    ],
    correcta: "b"
  },
  {
    texto: "Una empresa ven un producte conegut, amb poca innovació recent i molta competència. A la matriu de Boston, quin tipus de producte pot ser?",
    opciones: [
      "a) Estrella",
      "b) Interrogant",
      "c) Vaca"
    ],
    correcta: "c"
  },
  {
    texto: "Un anunci mostra emocions, música suggeridora i una estètica molt cuidada, però poques dades tècniques. Quin tipus de llenguatge utilitza?",
    opciones: [
      "a) Informatiu racional",
      "b) Emocional",
      "c) Tècnic-industrial"
    ],
    correcta: "b"
  },
  {
    texto: "Una marca utilitza famosos per reforçar la seva credibilitat i caràcter aspiracional. Quin rol compleixen?",
    opciones: [
      "a) Compradors",
      "b) Consumidors",
      "c) Prescriptors"
    ],
    correcta: "c"
  },
  {
    texto: "Una empresa fixa el preu tenint en compte els costos, la competència i el valor percebut. Quin element del màrqueting mix està treballant?",
    opciones: [
      "a) Producte",
      "b) Preu",
      "c) Distribució"
    ],
    correcta: "b"
  },
  {
    texto: "Un anunci de cotxes s’adreça a homes i dones urbans, de 30 a 60 anys, amb ingressos mitjans-alts. Què està definint?",
    opciones: [
      "a) Mercat potencial",
      "b) Target",
      "c) Mercat real"
    ],
    correcta: "b"
  },
  {
    texto: "Una empresa analitza on ven més i decideix reforçar només els canals rendibles. Quina política està ajustant?",
    opciones: [
      "a) Comunicació",
      "b) Distribució",
      "c) Producte"
    ],
    correcta: "b"
  },
  {
    texto: "Una campanya busca canviar la percepció que tenen els clients sobre una marca ja coneguda. Quin és el seu objectiu?",
    opciones: [
      "a) Introduir un producte nou",
      "b) Reposicionar la marca",
      "c) Reduir costos"
    ],
    correcta: "b"
  },
  {
    texto: "Un producte ofereix beneficis físics, funcionals i emocionals. De quin tipus de producte es tracta?",
    opciones: [
      "a) Producte bàsic",
      "b) Producte real",
      "c) Producte ampliat"
    ],
    correcta: "b"
  },
  {
    texto: "Una empresa utilitza anuncis de gran format i esdeveniments exclusius per crear prestigi. Quina avantatge competitiva busca?",
    opciones: [
      "a) Preu baix",
      "b) Diferenciació",
      "c) Rapidesa de distribució"
    ],
    correcta: "b"
  },
  {
    texto: "Un anunci gairebé no mostra el producte però fa que la marca sigui clarament recordada. Què ha aconseguit principalment?",
    opciones: [
      "a) Informar sobre el producte",
      "b) Recordar la marca",
      "c) Reduir l’esforç econòmic"
    ],
    correcta: "b"
  },
  {
    texto: "Una empresa detecta que els seus clients valoren més la funcionalitat que el luxe. Quina decisió hauria de prendre?",
    opciones: [
      "a) Afegir més elements de glamour",
      "b) Optimitzar la funcionalitat del producte",
      "c) Augmentar el preu"
    ],
    correcta: "b"
  },
  {
    texto: "Una marca ven productes cars, de compra poc freqüent i amb una forta implicació emocional. Quin tipus de béns són?",
    opciones: [
      "a) Béns de conveniència",
      "b) Béns d’especialitat",
      "c) Béns no buscats"
    ],
    correcta: "b"
  },
  {
    texto: "Una empresa defineix accions a curt termini per assolir els objectius marcats. Quin tipus de màrqueting aplica?",
    opciones: [
      "a) Màrqueting estratègic",
      "b) Màrqueting operatiu",
      "c) Màrqueting relacional"
    ],
    correcta: "b"
  },
  {
    texto: "Una marca utilitza les xarxes socials per comunicar-se de manera directa i constant amb els seus clients. Quin avantatge principal obté?",
    opciones: [
      "a) Comunicació personalitzada i contínua",
      "b) Eliminació total de la competència",
      "c) Reducció del cicle de vida del producte"
    ],
    correcta: "a"
  },
  {
    texto: "Una empresa decideix no competir en preu, sinó en imatge, prestigi i experiència. Quina estratègia segueix?",
    opciones: [
      "a) Lideratge en costos",
      "b) Diferenciació",
      "c) Especialització geogràfica"
    ],
    correcta: "b"
  },
  {
    texto: "Un anunci aconsegueix emocionar i convèncer, però no explicar detalls tècnics. Quina funció compleix millor?",
    opciones: [
      "a) Informar",
      "b) Persuadir",
      "c) Educar"
    ],
    correcta: "b"
  }
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


