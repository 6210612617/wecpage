const xValues = [2556,2557,2558,2559,2560,2561,2562,2563,2564,2565];
const yValues = [16777795,23748599,41283261,37297848,20639704,38560467,51993143,86679561,85094085,71424840];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
        fill: {
            target: 'origin',
            above: '#D6EAF8',   // Area will be red above the origin
             // And blue below the origin
          },
      lineTension: 0,
      backgroundColor: "#1A5276",
      borderColor: "black",
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 20000000, max:100000000}}],
    }
  }
});

const xValues1 = [2556,2557,2558,2559,2560,2561,2562,2563,2564,2565];
const yValues1 = [556489,1171898,2823847,-430293,-1253896,2744562,2195549,3875697,4552448,1802689];

new Chart("myChart1", {
  type: "line",
  data: {
    labels: xValues1,
    datasets: [{
        fill: {
            target: 'origin',
            above: '#D6EAF8',   // Area will be red above the origin
             // And blue below the origin
          },
      lineTension: 0,
      backgroundColor: "#1A5276",
      borderColor: "black",
      data: yValues1
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: -20000000, max:50000000}}],
    }
  }
});
const xValues2 = [2556,2557,2558,2559,2560,2561,2562,2563,2564,2565];
const yValues2 = [10844665,10406239,11365031,12646418,12669438,17192580,18632854,4115649,30245573,47457154];

new Chart("myChart2", {
  type: "line",
  data: {
    labels: xValues2,
    datasets: [{
        fill: {
            target: 'origin',
            above: '#D6EAF8',   // Area will be red above the origin
             // And blue below the origin
          },
      lineTension: 0,
      backgroundColor: "#1A5276",
      borderColor: "black",
      data: yValues2
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 0, max:50000000}}],
    }
  }
});


var xValuesP = ["A","B","C","D"];
var yValuesP = [50,50,0,0];
var barColors = [
    "#2BB8E5",
    "#23DA84",
    "#E74C3C",
    "#A93226"
    
];

new Chart("pieChart", {
  type: "pie",
  data: {
    labels: xValuesP,
    datasets: [{
      backgroundColor: barColors,
      data: yValuesP
    }]
  },
  options: {
    title: {
      display: true,
      text: "สัดส่วนผู้ถือหุ้น TAKE IT SOLUTION CO.,LTD."
    }
  }
});

