/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCube extends CGFobject {
	constructor(scene) {
            super(scene);
            this.preparePolygons();
            this.initBuffers();
      }

      preparePolygons() {
            this.initVertices();
            this.initIndices();
            this.initNormals();
      }
      
	initBuffers() {
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
      }
      
      initVertices() {
            this.vertices = [
                  //TOP
                  -0.5, 0.5, 0.5,   //0
                  0.5, 0.5, 0.5,    //1
                  -0.5, -0.5, 0.5,  //2
                  0.5, -0.5, 0.5,   //3

                  //BOTTOM
                  -0.5, 0.5, -0.5,   //4
                  0.5, 0.5, -0.5,    //5
                  -0.5, -0.5, -0.5,  //6
                  0.5, -0.5, -0.5,   //7

                  //LEFT
                  -0.5, 0.5, 0.5,   //8
                  -0.5, 0.5, -0.5,   //9
                  -0.5, -0.5, -0.5,  //10
                  -0.5, -0.5, 0.5,  //11

                  //RIGHT
                  0.5, 0.5, 0.5,   //12
                  0.5, 0.5, -0.5,   //13
                  0.5, -0.5, -0.5,  //14
                  0.5, -0.5, 0.5,  //15

                  //BACK
                  -0.5, -0.5, 0.5,  //16
                  -0.5, -0.5, -0.5,  //17
                  0.5, -0.5, 0.5,   //18
                  0.5, -0.5, -0.5,  //19

                  //FRONT
                  -0.5, 0.5, 0.5,  //20
                  -0.5, 0.5, -0.5,  //21
                  0.5, 0.5, 0.5,   //22
                  0.5, 0.5, -0.5,  //23
            ];
      }

      initIndices() {
            //Counter-clockwise reference of vertices
            this.indices = [
                  //TOP
                  2, 1, 0,
                  1, 2, 3,

                  //BOTTOM
                  4, 5, 6,
                  7, 6, 5,

                  //LEFT
                  8, 9, 10,
                  10, 11, 8,

                  //RIGHT
                  14, 13, 12,
                  12, 15, 14,

                  //BACK
                  16, 17, 18,
                  19, 18, 17,

                  //FRONT
                  22, 21, 20,
                  21, 22, 23
            ];
      }

      initNormals() {
            this.normals = [];

            //TOP
            for (var i = 0; i < 4; ++i)
                  this.normals.push(0,0,1);
            
            //BOTTOM
            for (var i = 0; i < 4; ++i)
                  this.normals.push(0,0,-1);
            
             //LEFT
            for (var i = 0; i < 4; ++i)
                  this.normals.push(-1,0,0);

             //RIGHT
             for (var i = 0; i < 4; ++i)
                  this.normals.push(1,0,0);

             //BACK
             for (var i = 0; i < 4; ++i)
                  this.normals.push(0,-1,0);

            //FRONT
            for (var i = 0; i < 4; ++i)
                  this.normals.push(0,1,0);
      }
}
