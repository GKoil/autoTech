let outputValue = 0;
let arr = [];
let i = -1;

function priceCalculate () {
  const inputValue = document.getElementById("input-value").value;
  outputValue = 16997 * inputValue - 1000000;


  if (outputValue) {
    i = i + 1;
    arr[i] = outputValue;
  }

  const p = document.getElementById("out");
  p.innerHTML = `${outputValue.toLocaleString()} ₽`;

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
              data: arr
          }]
      },

      // Configuration options go here
      options: {}
  });
}

