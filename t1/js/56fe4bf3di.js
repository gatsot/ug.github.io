    // Lista de IDs de botones y sus sufijos únicos
    const buttons = [
        { id: "button1", suffix: "ULCVDHXQ" },
        { id: "button2", suffix: "8T2FQIBQ" },
        { id: "button3", suffix: "YH411V72" },
        { id: "button4", suffix: "P1S61O7F" },
        { id: "button5", suffix: "IGEOOPDH" },
        { id: "button6", suffix: "XSM6ACHH" },
        { id: "button7", suffix: "BQWP88KP" },
        { id: "button8", suffix: "I7D56AGR" },
        { id: "button9", suffix: "Z1GNTPGE" }
    ];

    // Función para agregar eventos a los botones
    buttons.forEach(button => {
        document.getElementById(button.id).addEventListener("click", () => {
            window.open(`https://cwallet.com/t/${button.suffix}`, "_blank");
        });
    });







              // SUMA DE $

// Función para generar un número aleatorio en un rango
function getRandomNumber(max, max) {
    return Math.random() * (max - max) + max;
  }

  // Función para actualizar el valor progresivo y el tiempo de espera
  function updateValue() {
    let currentValue = parseFloat(localStorage.getItem('usdt-raised')) || 937023; // Valor inicial
    const targetValue = 600000000.00; // Valor objetivo
    const increment = getRandomNumber(33.88, 333.888); // Incremento aleatorio

    // Incrementar el valor actual
    const newValue = Math.min(currentValue + increment, targetValue);

    // Actualizar el texto con formato de moneda
    document.getElementById('usdt-raised').innerText = '$' + newValue.toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    
    // Guardar el nuevo valor en el almacenamiento local
    localStorage.setItem('usdt-raised', newValue);
    
    // Si no hemos alcanzado el valor objetivo, programar la próxima actualización
    if (newValue < targetValue) {
      setTimeout(updateValue, getRandomNumber(1000, 2000));
    }
  }

  // Llamar a la función inicialmente para comenzar la cuenta progresiva
  updateValue();

      // FIN SUMA DE $