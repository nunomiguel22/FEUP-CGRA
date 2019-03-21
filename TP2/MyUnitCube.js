/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
            -0.5, 0.5, -0.5,    //0
            0.5, 0.5, -0.5,     //1
            -0.5, -0.5, -0.5,   //2
            0.5, -0.5, -0.5,    //3
            -0.5, 0.5, 0.5,    //4
            0.5, 0.5, 0.5,     //5
            -0.5, -0.5, 0.5,   //6
            0.5, -0.5, 0.5     //7
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,
            3, 2, 1,
            6, 5, 4,
            5, 6, 7,
            0, 4, 1,
            4, 5, 1,
            2, 4, 0,
            4, 2 ,6,
            5, 3 ,1,
            5, 7, 3,
            6, 2, 3,
            3, 7, 6

		];
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}
