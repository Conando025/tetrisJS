const canvas = document.getElementById('canvas');
const size = canvas.width / 10;
let ctx = canvas.getContext("2d");
let tet_L = new L(ctx);
tet_L.draw()