class CollisionBlock {
	constructor({ position }) {
		this.position = position;
		this.width = 16;
		this.height = 16;
	}
	draw() {
        c.fillStyle = '#09f'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
	}

	update() {
		this.draw();
	}
}
