eel.expose(say_hello_js); // Expose this function to Python
function say_hello_js(x) {
  console.log("Hello from " + x);
}

say_hello_js("Javascript World!");
eel.say_hello_py("Javascript World!"); // Call a Python function


var opts = {
  lines: 300,
  angle: 0,
  lineWidth: 0.44,
  pointer: {
    length: 0.9,
    strokeWidth: 0.035,
    color: '#fff'
  },
  limitMax: 'false',
  percentColors: [
    [0.0, "#a9d70b"],
    [0.50, "#f9c802"],
    [1.0, "#ff0000"]
  ], // !!!!
  strokeColor: '#E0E0E0',
  generateGradient: true,
  staticLabels: {
    font: "12px sans-serif",  // Specifies font
    labels: [0, 50, 100, 150, 200, 250, 300],  // Print labels at these values
    color: "#fff",  // Optional: Label text color
    fractionDigits: 0  // Optional: Numerical precision. 0=round off.
  },
};

var target = document.getElementById('gauge');
var gauge = new Gauge(target).setOptions(opts);
gauge.maxValue = 300;
gauge.animationSpeed = 32;
gauge.set(150);
gauge.setTextField(document.getElementById("gauge-value"));

function update() {
  var x = document.getElementById("update").value;
  gauge.set(x);
}
