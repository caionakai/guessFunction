// var Plotly = require('plotly')("caionakai", "HqydzbzoGDvYx2xYOvqW")
SENO = document.getElementById('seno');

var frames = [
    {name: 'sine', data: [{x: [], y: []}]}
];
var n = 100;
for (var i = 0; i < n; i++) {
    var t = i / (n - 1) * 2 - 1;
    // A sine wave:
    frames[0].data[0].x[i] = t * Math.PI;
    frames[0].data[0].y[i] = Math.sin(t * Math.PI)
}


Plotly.plot(SENO, [{
    x: frames[0].data[0].x,
    y: frames[0].data[0].y
    }], 
    {
        margin: { t: 0 }
    }
);



//     //   // A cosine wave:
//     //   frames[1].data[0].x[i] = t * Math.PI;
//     //   frames[1].data[0].y[i] = Math.cos(t * Math.PI);

//     //   // A circle:
//     //   frames[2].data[0].x[i] = Math.sin(t * Math.PI);
//     //   frames[2].data[0].y[i] = Math.cos(t * Math.PI);
// }

// Plotly.plot('graph', [{
//     x: frames[0].data[0].x,
//     y: frames[0].data[0].y,
//     line: { simplify: false },
// }], {
//         xaxis: { range: [-Math.PI, Math.PI] },
//         yaxis: { range: [-1.2, 1.2] },
//         updatemenus: [{
//             buttons: [
//                 { method: 'animate', args: [['sine']], label: 'sine' },
//                 //   {method: 'animate', args: [['cosine']], label: 'cosine'},
//                 //   {method: 'animate', args: [['circle']], label: 'circle'}
//             ]
//         }]
//     }, { displayModeBar: false }).then(function () {
//         Plotly.addFrames('graph', frames);
//     });