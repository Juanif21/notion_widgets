const boton = document.getElementById("boton");

boton.addEventListener("click", () => {
  enviarWebhook();
});

function enviarWebhook() {
  const url = "https://tu-webhook-url-aqui";
  const datos = {
    mensaje: "Se hizo clic en el botón verde"
  };
  
  fetch(url, {
    method: "POST",
    body: JSON.stringify(datos),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(() => {
    console.log("Mensaje enviado correctamente");
  })
  .catch((error) => {
    console.error("Hubo un error al enviar el mensaje", error);
  });
}
