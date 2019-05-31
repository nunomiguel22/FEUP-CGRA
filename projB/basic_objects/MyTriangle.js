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
			-1.0, 1.0, 0.0,	//0
			-1.0, -1.0, 0.0,	//1
			1.0, -1.0, 0.0,	//2
			-1.0, 1.0, 0.0, //0
			-1.0, -1.0, 0.0, //1
			1.0, -1.0, 0.0 //2
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,
			3, 5, 4
		];

		//Normals
		this.normals = [];

		for (var i = 0; i < 3; i++)
			this.normals.push(0, 0, -1);

		for (var i = 0; i < 3; i++)
			this.normals.push(0, 0, 1);

		//Texture coordinates
		this.texCoords = [
			0, 1,
			0, 0,
			1, 0,
			0, 1,
			0, 0,
			1, 0
		];
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
	/**
	 * @method updateTexCoords
	 * Updates the list of texture coordinates of the quad
	 * @param {Array} coords - Array of texture coordinates
	 */
	updateTexCoords(coords) {
		this.texCoords = [...coords];
		this.updateTexCoordsGLBuffers();
	}
}
