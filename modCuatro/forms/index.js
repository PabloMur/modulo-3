function main() {
  const form = document.querySelector(".formulario");

  form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    let formulario = new FormData(evento.target);
    let obj = Object.fromEntries(formulario.entries());
    obj["study-dif"] = formulario.getAll("study-dif");
    console.log(obj);
  });
}

main();
