let outputValue = 0;

function priceCalculate () {
  const inputValue = document.getElementById("input-value").value;
  if (inputValue < 60) {
    return alert ("Введите значение больше или равное 60");
  }  else if (inputValue > 900) {
    return alert ("Введите значение меньшее или равное 900");
  }

  const formula = 16997 * inputValue - 1000000;
  outputValue = formula;

  const p = document.getElementById("out");
  p.innerHTML = `${outputValue.toLocaleString()} ₽`;

  drawingGraphic(inputValue, outputValue);

  const countGraphic = document.getElementById("graphic-count");
  countGraphic.innerHTML = "Стоимость";
  const powerGraphic = document.getElementById("graphic-power");
  powerGraphic.innerHTML = "Мощность двигателя";
}

function drawingGraphic (inputValue, graphicValue) {
  var speedCanvas = document.getElementById("myChart");

  Chart.defaults.global.defaultFontFamily = "Lato";
  Chart.defaults.global.defaultFontSize = 18;
  
  var dataFirst = {
      label: "Статистика",
      data: [
        {
          x: 100,
          y: 1000000
        },
        {
          x: 900,
          y: 9000000
        }
      ],
      lineTension: 0,
      fill: false,
      borderColor: 'blue'
    };
  
  var dataSecond = {
      label: "Выбранное значение",
      data: [{
        x: inputValue,
        y: graphicValue
      }],
      lineTension: 0,
      fill: false,
    borderColor: 'red',
    borderWidth: 14
    };
  
  var speedData = {
    labels: ["0", "100", "200", "300", "400", "500", "600", "700"],
    datasets: [dataFirst, dataSecond]
  };
  
  var chartOptions = {
    scales: {
      xAxes: [{
          type: 'linear',
          position: 'bottom'
      }]
    },
    legend: {
      display: true,
      position: 'top',
      labels: {
        boxWidth: 80,
        fontColor: 'black'
      }
    }
  };
  
  var lineChart = new Chart(speedCanvas, {
    type: 'line',
    data: speedData,
    options: chartOptions
  });
}