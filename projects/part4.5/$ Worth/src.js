const menuToggle = document.getElementById("menuToggle");
const hamburgerDropdown = document.getElementById("hamburgerDropdown");

menuToggle.onclick = function () {
  hamburgerDropdown.classList.toggle("show");
};

// placeholder data for now dw abtg this
google.charts.load("current", {packages:['corechart']});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Year", "$ Worth in millions", { role: "style" } ],
    ["2014", 60, "#fa8072"],
    ["2016", 85, "#fa8072"],
    ["2018", 90, "#fa8072"],
    ["2020", 120, "#fa8072"],
    ["2022", 160, "#fa8072"],
    ["2024", 200, "#fa8072"],
  ]);

  var view = new google.visualization.DataView(data);
  view.setColumns([0, 1,
                   { calc: "stringify",
                     sourceColumn: 1,
                     type: "string",
                     role: "annotation" },
                   2]);

  var options = {
    title: "Player worth over time in $ millions",
    width: 1000,
    height: 400,
    bar: {groupWidth: "95%"},
    legend: { position: "none" },
  };
  var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
  chart.draw(view, options);
}
