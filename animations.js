window.onload = function(){

  let svg = document.getElementById("cerealbox-box");
  let svgNS = svg.namespaceURI;
  let rect = document.createElementNS(svgNS,'rect');
  rect.setAttribute('x',0);
  rect.setAttribute('y',0);
  rect.setAttribute('width',5);
  rect.setAttribute('height',5);
  rect.setAttribute('fill','#000000');
  rect.animate([
    { transform: 'translate(50%, 50%)', offset: 0 },
    { transform: 'translate(60%, 100%)',  offset: 1 }
  ],
  {
    duration: 600, //milliseconds
    easing: 'ease-in', //'linear', a bezier curve, etc.
    iterations: Infinity, //or a number
    direction: 'normal', //'normal', 'reverse', etc.
    fill: 'forwards' //'backwards', 'both', 'none', 'auto'
  });
  svg.appendChild(rect);
  
 


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