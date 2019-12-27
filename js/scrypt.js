let outputValue = 0;

function priceCalculate () {
  const inputValue = document.getElementById("input-value").value;
  const formula = 16997 * inputValue - 1000000;
  outputValue = formula;

  const p = document.getElementById("out");
  p.innerHTML = `${outputValue.toLocaleString()} ₽`;

  drawingGraphic(outputValue);
}

function drawingGraphic (graphicValue) {
  var ctx = document.getElementById('myChart').getContext('2d');
  var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'line',

      // The data for our dataset
      data: {
          labels: ['100', '200', '300', '400', '500', '600', '700'],
          datasets: [{
              label: 'Цена автомобиля',
              backgroundColor: '#007bff',
              borderColor: '#007bff',
              data: [graphicValue]
          }]
      },

      // Configuration options go here
      options: {}
  });
}