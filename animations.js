window.onload = function(){

  let svg = document.getElementById("cerealbox-box");
  let svgNS = svg.namespaceURI;
  const offsetPaths = [
    'offset-path: path("M 490 450 C 550 600, 500 800, 640 850")',
    'offset-path: path("M 470 450 C 500 600, 500 800, 500 850")',
    'offset-path: path("M 450 460 C 550 600, 550 800, 660 850")',
    'offset-path: path("M 490 500 C 600 700, 650 800, 700 890")'
  ];
  const flakeColors = [
    '#E84609',
    '#FF7818',
    '#E88709',
    '#FF290A'
  ];

  let flakeDelay = 0;

  for (let i = 0; i<4; i++){
    let rect = document.createElementNS(svgNS,'rect');
    rect.setAttribute('x',0);
    rect.setAttribute('y',0);
    rect.setAttribute('width',35);
    rect.setAttribute('height',45);
    rect.setAttribute('fill',flakeColors[i]);
 
    rect.setAttribute("style", offsetPaths[i]);
    rect.animate([
      {  offsetDistance: 0, opacity: 1 },
      { offsetDistance: "100%",  opacity: 0}
    ],
    {
      duration: 800, //milliseconds
      easing: 'linear', //'linear', a bezier curve, etc.
      iterations: Infinity, //or a number
      direction: 'normal', //'normal', 'reverse', etc.
      fill: 'forwards', //'backwards', 'both', 'none', 'auto'
      delay: flakeDelay
    });
    flakeDelay += 170;
    svg.appendChild(rect);
  }


  let cerealBox = document.getElementById('cerealbox-animation');

  cerealBox.setAttribute("fill", "#FFAE0A");
  cerealBox.animate([
    { transform: 'rotate(0deg) translate(0, 0)', offset: 0 },
    { transform: 'rotate(1deg) translate(9%, 7%)',  offset: 1 }
  ], {
    duration: 170, //milliseconds
    easing: 'ease-in-out', //'linear', a bezier curve, etc.
    iterations: Infinity, //or a number
    direction: 'alternate', //'normal', 'reverse', etc.
    fill: 'forwards' //'backwards', 'both', 'none', 'auto'
  });

  
}