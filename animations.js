window.onload = function(){

  let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  let svgNS = svg.namespaceURI;
  let rect = document.createElementNS(svgNS,'rect');
  rect.setAttribute('x',0);
  rect.setAttribute('y',0);
  rect.setAttribute('width',5);
  rect.setAttribute('height',5);
  rect.setAttribute('fill','#000000');
  rect.animate([
    { transform: 'translate(0, 0)', offset: 0 },
    { transform: 'translate(40%, 100%)',  offset: 1 }
  ],
  {
    duration: 600, //milliseconds
    easing: 'ease-in', //'linear', a bezier curve, etc.
    iterations: Infinity, //or a number
    direction: 'normal', //'normal', 'reverse', etc.
    fill: 'forwards' //'backwards', 'both', 'none', 'auto'
  });
  svg.appendChild(rect);
  svg.setAttribute("id", "cereal-flakes");
  let animationContainer = document.getElementById('animation-container');
  animationContainer.appendChild(svg);


  document.getElementById('cerealbox-animation').animate([
    { transform: 'rotate(0deg) translate(0, 0)', offset: 0 },
    { transform: 'rotate(10deg) translate(12%, 25%)',  offset: 1 }
  ], {
    duration: 300, //milliseconds
    easing: 'ease-in', //'linear', a bezier curve, etc.
    iterations: Infinity, //or a number
    direction: 'alternate', //'normal', 'reverse', etc.
    fill: 'forwards' //'backwards', 'both', 'none', 'auto'
  });
}