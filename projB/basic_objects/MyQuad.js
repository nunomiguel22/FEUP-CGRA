/**
 * MyQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyQuad extends CGFobject {
	constructor(scene, coords) {
		super(scene);
		this.initBuffers();
		if (coords != undefined)
			this.updateTexCoords(coords);
	}

	initBuffers() {
		this.vertices = [
			//Top
			-0.5, -0.5, 0.0,//0
			0.5, -0.5, 0.0,	//1
			-0.5, 0.5, 0.0,	//2
			0.5, 0.5, 0.0,	//3
			//Bottom
			-0.5, -0.5, 0.0,//4
			0.5, -0.5, 0.0,	//5
			-0.5, 0.5, 0.0,	//6
			0.5, 0.5, 0.0,	//7
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			//Top
			0, 1, 2,
			1, 3, 2,
			//Bottom
			6, 5, 4,
			6, 7, 5
		];

		//Facing Z positive
		this.normals = [
			//Top
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			//bottom
			0, 0, -1,
			0, 0, -1,
			0, 0, -1,
			0, 0, -1
		];

		this.texCoords = [
			//Top
			0, 1,
			1, 1,
			0, 0,
			1, 0,
			//Bottom
			0, 1,
			1, 1,
			0, 0,
			1, 0
		]
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

