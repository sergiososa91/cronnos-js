// Variables de autenticación
let usuario = "Usuario";
let contraseña = "1234";
let estaAutenticado = false; // Para manejar el estado de autenticación

// Función para validar acceso
function iniciarSesion() {
  alert("Bienvenido a Cronnos. Para ingresar, tu usuario es 'Usuario' y tu contraseña es '1234'");
  console.log("Inicio de sesión requerido: Usuario 'Usuario', Contraseña '1234'");
  
  while (!estaAutenticado) {
    let usuarioIngresado = prompt("Ingresá tu usuario:");
    
    if (usuarioIngresado !== usuario) {
      alert("Usuario incorrecto. Probá de nuevo.");
      console.log(`Usuario incorrecto: ${usuarioIngresado}`);
      continue; // Repetir el ciclo si el usuario es incorrecto
    } else {
      console.log("Ingreso correcto del usuario");
    }
    
    let contraseñaIngresada = prompt("Ingresá tu contraseña:");
    
    if (contraseñaIngresada === contraseña) {
      estaAutenticado = true;
      alert("Bienvenido a Cronnos, acá siempre vas a encontrar la película perfecta para ver sin importar cuánto tiempo tengas.");
      console.log("Ingreso correcto de la contraseña. Acceso concedido.");
      iniciarCronometro();
    } else {
      alert("Usuario o contraseña incorrectos. Intentá otra vez.");
      console.log(`Contraseña incorrecta: ${contraseñaIngresada}`);
    }
  }
}

// Función principal del cronómetro
function iniciarCronometro() {
  let duracion = prompt("Ingresá la duración deseada (en minutos, entre 30 y 360):");
  
  duracion = parseInt(duracion);
  
  if (isNaN(duracion) || duracion < 30 || duracion > 360) {
    alert("Duración no válida. Debe ser entre 30 minutos y 6 horas.");
    console.log(`Duración no válida: ${duracion}`);
    iniciarCronometro(); // Reiniciar si la entrada es inválida
    return;
  } else {
    console.log(`Duración ingresada correctamente: ${duracion} minutos`);
  }

  // Pregunta por el género
  let genero = prompt("Elegí un género: Terror, Comedia, Acción, Drama, Thriller, Animación").toLowerCase();
  let recomendacion = obtenerRecomendacion(duracion, genero);
  
  if (recomendacion) {
    alert(`Tu recomendación es: ${recomendacion}`);
    alert("¡Que disfrutes la película!");
    console.log(`Recomendación mostrada: ${recomendacion}`);
  } else {
    alert("Género no válido. Intentá otra vez.");
    console.log(`Género no válido: ${genero}`);
    iniciarCronometro(); // Reiniciar si la entrada es inválida
  }
}

// Función para obtener recomendación basada en duración y género
function obtenerRecomendacion(duracion, genero) {
  const cortometrajes = {
    terror: "The Grandmother de David Lynch",
    comedia: "Two Cars, One Night de Taika Waititi",
    accion: "Factory Farmed de Gareth Edwards",
    drama: "Lick the Star de Sofia Coppola",
    thriller: "Nimic de Yorgos Lanthimos",
    animacion: "Vincent de Tim Burton"
  };

  const peliculasMedias = {
    terror: "Censor de Prano Bailey-Bond",
    comedia: "Shiva Baby de Emma Seligman",
    accion: "Run Lola Run de Tom Tykwer",
    drama: "Petite Mamam de Céline Sciama",
    thriller: "La Mujer Sin Cabeza de Lucrecia Martel",
    animacion: "Mi Vecino Totoro de Hayao Miyazaki"
  };

  const peliculasLargas = {
    terror: "A Nightmare on Elm Street de Wes Craven",
    comedia: "Silvia Prieto de Martín Rejtman",
    accion: "Scott Pilgrim vs. The World de Edgar Wright",
    drama: "Gravity de Alfonso Cuarón",
    thriller: "American Psycho de Mary Harron",
    animacion: "The Mitchells vs. The Machines de Mike Rianda"
  };

  const peliculasExtensas = {
    terror: "Hereditary de Ari Aster",
    comedia: "Everything Everywhere All At Once de Daniel Scheinert y Daniel Kwan",
    accion: "Armageddon de Michael Bay",
    drama: "A Portrait Of A Lady On Fire de Celine Sciama",
    thriller: "Dogville de Lars Von Trier",
    animacion: "La Princesa Mononoke de Hayao Miyazaki"
  };

  if (duracion <= 30) {
    console.log(`Duración menor a 30 minutos. Género: ${genero}`);
    return cortometrajes[genero];
  } else if (duracion <= 90) {
    console.log(`Duración entre 31 y 90 minutos. Género: ${genero}`);
    return peliculasMedias[genero];
  } else if (duracion <= 150) {
    console.log(`Duración entre 91 y 150 minutos. Género: ${genero}`);
    return peliculasLargas[genero];
  } else if (duracion <= 240) {
    console.log(`Duración entre 151 y 240 minutos. Género: ${genero}`);
    return peliculasExtensas[genero];
  }

  return null; // En caso de que el género no sea válido
}

// Iniciar el proceso
iniciarSesion();
