/**
* MyCircle
* @constructor
*/
class MyCircle extends CGFobject {
    constructor(scene, radius, slices) {
        super(scene);
        this.radius = radius;
        this.slices = slices;
        this.initBuffers();
    }
    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];
        this.texCoords = [];

        var ang = 0;
        var alpha = 2*Math.PI/this.slices;

        for(var i = 0; i < this.slices; i++){

            this.vertices.push(this.radius * Math.cos(alpha*i), 0,this.radius * -Math.sin(alpha*i));
            this.indices.push(i, (i+1) % this.slices, this.slices);
            this.normals.push(0, 1, 0);
            this.texCoords.push(i % 2, 1);
        }
        this.vertices.push(0,0,0);
        this.normals.push(0,1,0);
        this.texCoords.push(0.5, 0);
        

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
    
}