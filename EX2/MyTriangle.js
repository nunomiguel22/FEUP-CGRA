/**
 * MyTriangle
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTriangle extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			-1, 1, 0,	//0
			-1, -1, 0,	//1
			1, -1, 0,	//2
			-1, 1, 0,
			-1, -1, 0,
			1, -1, 0
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,
			3, 5, 4
		];

		this.normals = [];

		for (var i = 0; i < 3; i++)
			this.normals.push(0,0,1);

		for (var i = 0; i < 3; i++)
			this.normals.push(0,0,-1);

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}

