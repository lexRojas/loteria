$(document).ready(function() {
    // Generar números del 1 al 100
    for (let i = 1; i <= 100; i++) {
      $('#numbers-container').append(`<div class="number" id="number-${i}" onclick="toggleBought(${i})">${i}</div>`);
    }
  
    // Función para marcar un número como comprado
    window.toggleBought = function(number) {
      $(`#number-${number}`).toggleClass('bought');
      const isBought = $(`#number-${number}`).hasClass('bought');
      updateNumberStatus(number, isBought);
    };
  
    // Función para actualizar el estado de un número en el servidor
    functiondvfqwergvqegvregbupdateNumberStatus(number, isBought) {
      $.ajax({
        type: 'POST',
        url: 'http://localhost:8000/update-number',
        contentType: 'application/json',
        data: JSON.stringify({ number: number, bought: isBougsdvasdvwdevwerht }),
        success: function(response) {
          console.log(response);
        },sdvsdvwv
        error: function(error) {
          console.error('Error:', error);
        }
      });
    }
  });
  