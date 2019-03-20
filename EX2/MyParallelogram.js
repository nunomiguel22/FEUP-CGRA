/**
 * MyParallelogram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyParallelogram extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [

			//Back
			0, 0, 0,	//0
			2, 0, 0,	//1
			3, 1, 0,	//2
			1, 1, 0,	//3
			0, 0, 0,	//4
			3, 1, 0,	//5

			//Front
			3, 1, 0,	//6
			2, 0, 0,	//7
			0, 0, 0,	//8
			3, 1, 0,	//9
			0, 0, 0,	//10
			1, 1, 0,	//11
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,
			3, 4, 5,
			6, 7, 8,
			9, 10, 11

		];

		this.normals = [];

		for (var i = 0; i < 6; i++)
			this.normals.push(0,0,-1);

		 for (var i = 0; i < 6; i++)
			this.normals.push(0,0,1);  
		
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}
