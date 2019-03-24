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
            this.initTextureCoordinates();
      }
      
	initBuffers() {
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
      }
      
      initVertices() {
            this.vertices = [
                  //FRONT
                  -0.5, 0.5, 0.5,   //0
                  0.5, 0.5, 0.5,    //1
                  -0.5, -0.5, 0.5,  //2
                  0.5, -0.5, 0.5,   //3

                  //BACK
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

                  //BOTTOM
                  -0.5, -0.5, 0.5,  //16
                  -0.5, -0.5, -0.5,  //17
                  0.5, -0.5, 0.5,   //18
                  0.5, -0.5, -0.5,  //19

                  //TOP
                  -0.5, 0.5, 0.5,  //20
                  -0.5, 0.5, -0.5,  //21
                  0.5, 0.5, 0.5,   //22
                  0.5, 0.5, -0.5,  //23
            ];
      }

      initIndices() {
            //Counter-clockwise reference of vertices
            this.indices = [
                  //FRONT
                  2, 1, 0,
                  1, 2, 3,

                  //BACK
                  4, 5, 6,
                  7, 6, 5,

                  //LEFT
                  8, 9, 10,
                  10, 11, 8,

                  //RIGHT
                  14, 13, 12,
                  12, 15, 14,

                  //BOTTOM
                  16, 17, 18,
                  19, 18, 17,
                  
                  //TOP
                  22, 21, 20,
                  21, 22, 23
            ];
      }

      initNormals() {
            this.normals = [];

            //FRONT
            for (var i = 0; i < 4; ++i)
                  this.normals.push(0,0,1);
            
            //BACK
            for (var i = 0; i < 4; ++i)
                  this.normals.push(0,0,-1);
            
             //LEFT
            for (var i = 0; i < 4; ++i)
                  this.normals.push(-1,0,0);

            //RIGHT
            for (var i = 0; i < 4; ++i)
                  this.normals.push(1,0,0);

            //BOTTOM
            for (var i = 0; i < 4; ++i)
                  this.normals.push(0,-1,0);

            //TOP
            for (var i = 0; i < 4; ++i)
                  this.normals.push(0,1,0);
      }

      initTextureCoordinates(){
            this.texCoords = [
                  //FRONT
                  0.25, 0.333,
                  0.5, 0.333,
                  0.25, 0.66,
                  0.5, 0.66,

                  //BACK
                  1, 0.34,
                  0.75, 0.34,
                  1, 0.66,
                  0.75, 0.66,

                  //LEFT
                  0.25, 0.34,
                  0, 0.34,
                  0, 0.66,
                  0.25, 0.66,
             
                  //RIGHT
                  0.5, 0.34,
                  0.75, 0.34,
                  0.75, 0.66,
                  0.5, 0.66,

                  
                  //BOTTOM
                  0.5, 0.68,
                  0.25, 0.68,
                  0.5, 1,
                  0.25, 1,

                  //TOP
                  0.5, 0.34,
                  0.25, 0.34,
                  0.5, 0,
                  0.25, 0,
                 

		];
      }
}
