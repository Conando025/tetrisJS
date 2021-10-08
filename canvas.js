const canvas = document.getElementById('canvas');
const size = canvas.width / 10;
let ctx = canvas.getContext("2d");
draw_l(ctx, 5,6)


function draw_l(ctx, x, y){
	ctx.fillStyle = "blue";
	ctx.rect(x*size, y*size, size, size);
	ctx.rect(x*size, (y+1)*size, size, size);
	ctx.rect(x*size, (y+2)*size, size, size);
	ctx.rect((x+1)*size, (y+2)*size, size, size);
	ctx.fill();
}