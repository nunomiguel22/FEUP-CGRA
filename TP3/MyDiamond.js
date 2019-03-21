/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyDiamond extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			//Front
			-1, 0, 0,	//0
			0, -1, 0,	//1
			0, 1, 0,	//2
			0, 1, 0,	//3
			0, -1, 0,	//4
			1, 0, 0,	//5

			//Back
			-1, 0, 0,	//6
			0, -1, 0,	//7
			0, 1, 0,	//8
			0, 1, 0,	//9
			0, -1, 0,	//10
			1, 0, 0,	//11
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,
			3, 4, 5,
			8, 7, 6,
			11, 10, 9
		];

		this.normals = [];

		for (var i = 0; i < 6; i++)
			this.normals.push(0,0,1);

		 for (var i = 0; i < 6; i++)
			this.normals.push(0,0,-1); 

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}

