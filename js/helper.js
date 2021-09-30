// generar un numero aleatorio
let getRandomNumber = size => {
  return Math.floor(Math.random() * size);
}

// consegir la distancia de dos puntos
//             evento - mapa del tesoro
let getDistance = (e, target) => {

  //eje de las "x" y donde esta ubicado el clic del usuario
  // diffx-> diferencia del eje de las x. 
  let diffX = e.offsetX - target.x;
  //eje de las "y" y donde esta ubicado el click
  let diffY = e.offsetY - target.y;

  //retornamos la raiz cuadrada de la suma de los catetos al cuadrado
  return Math.sqrt((diffX * diffX) + (diffY * diffY));
}

// devuelve una cadena dependiendo de las distracciones 
let getDistanceHint = distance => {
  if (distance < 30) {
    return " Hirviendo, Caliente!";
  } else if (distance < 40) {
    return "Muy caliente";
  } else if (distance < 60) {
    return "Caliente";
  } else if (distance < 100) {
    return "Tibio";
  } else if (distance < 180) {
    return "Frio";
  } else if (distance < 360) {
    return "Muy frio";
  } else {
    return "Heladisimo!";
  }
}
