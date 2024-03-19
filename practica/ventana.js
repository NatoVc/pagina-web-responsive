function showPopup() {
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

window.onload = function() {
    setTimeout(showPopup, 5000); 
}

function notifyMe() {
    // ver si el navegador soporta las notificaciones
    if (!("Notification" in window)) {
      alert(
        "Este navegador no es compatible con las notificaciones de escritorio",
      );
    }
  
    // Comprobar si tenemos permisos
    else if (Notification.permission === "granted") {
      // Si es correcto, lanzamos una notificación
      var notification = new Notification("Hola a todos");
    }
  
    // pedimos permiso de notificar 
    else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {
          var notification = new Notification("Muchas gracias");
        }
      });
    }
  }


  function notifica() {
    if (!("Notification" in window)) {
      alert(
        "Este navegador no es compatible con las notificaciones de escritorio",
      );
    }
  
    else if (Notification.permission === "granted") {
      var notification = new Notification("gracias por seguir explorando en nuestra pagina");
    }
  
    else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {
          var notification = new Notification("gracias por seguir explorando en nuestra pagina");
        }
      });
    }
  }
  