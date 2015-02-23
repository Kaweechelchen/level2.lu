/**
 * START Trianglify
 */



var t = new Trianglify(
  {
    x_gradient: ["#d53e4f","#f46d43","#fdae61","#fee08b","#e6f598","#abdda4","#66c2a5","#3288bd"]
  }
);
var prevheight = height();

window.onresize = function() {
    redraw();
};

redraw();

function redraw() {
    var pattern = t.generate(document.body.clientWidth, height());
    console.log( pattern );
    document.body.setAttribute('style', 'background-image: '+pattern.dataUrl);
}

function height() {
    return Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );
}

/**
 * END Trianglify
 */