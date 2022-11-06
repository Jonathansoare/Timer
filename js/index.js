function relogio() {
  function timeount(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone: "GMT",
    });
  }

  const relogio = document.querySelector(".time");
  const btnIniciar = document.querySelector(".btn-iniciar");
  const btnPausar = document.querySelector(".btn-pausar");
  const btnZera = document.querySelector(".btn-zera");
  let segundos = 0;
  let time;

  function iniciar() {
    time = setInterval(function () {
      segundos++;
      relogio.innerHTML = timeount(segundos);
    }, 1000);
  }

  function pausar() {
    clearInterval(time);
  }

  document.addEventListener("click", function (e) {
    const el = e.target;

    if (el.classList.contains("btn-zera")) {
      relogio.classList.remove("pause");
      clearInterval(time);
      relogio.innerHTML = "00:00:00";
      segundos = 0;
    }

    if (el.classList.contains("btn-iniciar")) {
      relogio.classList.remove("pause");
      clearInterval(time);
      iniciar();
    }

    if (el.classList.contains("btn-pausar")) {
      pausar();
      relogio.classList.add("pause");
    }
  });
}
relogio()