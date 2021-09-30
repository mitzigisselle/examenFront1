


// Definir el ancho y alto de la imagen
//const -> es una variable constante 
const WIDTH = 400;
const HEIGH = 400;

//generacion de un numero aleatorio: en este caso la posicion de x, y
let target = {
  x: getRandomNumber(WIDTH),
  y: getRandomNumber(HEIGH)
};

// codigo para hacer clic en el controlador o imagen
let $map = document.querySelector('#map');

// obtener la distancia
let $distance = document.querySelector('#distance');
let clicks = 0;


//al mapa le vamos agregar un escuchador(cuando el usuario de un click se va a realizar una accion)
$map.addEventListener('click', function (e) {

  clicks++;
  // evento del click, y mapa del tesoro 
  //             se recibe el teorema de pitagoras
  let distance = getDistance(e, target);

  //Se manda a traer la funcion getDistanceHint y te devuelve una distancia
  let distanceHint = getDistanceHint(distance);
  //se muestra que tan cerca estas en la pagina
  $distance.innerHTML = `<h1>${distanceHint}</h1>`;

  // nos dira el numero de clicks que se han echo y el mensaje si ya has encontrao el tesoro
  if (distance < 20 ) {
    alert(`Has encontrado el tesoro en: ${clicks} clicks!`);
    location.reload();
  }
});
