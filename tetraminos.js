class L {
	constructor(ctx){
		this.ctx = ctx;
		this.x = 5;
		this.y = 1;
		this.r = 0;
	}

	move_x(dir) {
		this.x += dir;
	}

	move_y(dir) {
		this.y += dir;
	}

	draw() {
		this.ctx.fillStyle = "blue";
		this.ctx.rect(this.x*size, this.y*size, size, size);
		this.ctx.rect(this.x*size, (this.y+1)*size, size, size);
		this.ctx.rect(this.x*size, (this.y+2)*size, size, size);
		this.ctx.rect((this.x+1)*size, (this.y+2)*size, size, size);
		this.ctx.fill();
	}
}