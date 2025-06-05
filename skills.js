// Funcion para converitr grados celsius a fahrenheit

function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

//driver code
try {
  const celsius = 25; // Ejemplo de temperatura en grados Celsius
  const fahrenheit = celsiusToFahrenheit(celsius);
  console.log(`${celsius}°C es igual a ${fahrenheit}°F`);
} catch (error) {
  console.error("Error al convertir la temperatura:", error);
}

