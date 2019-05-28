/**
* MyCone
* @constructor
*/
class MyCone extends CGFobject {
    constructor(scene, slices, minComplexity, maxComplexity) {
        super(scene);
        this.slices = slices;
        this.minComplexity = minComplexity;
        this.complexityDelta = maxComplexity - minComplexity;
        this.initBuffers();
    }
    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];
        this.texCoords = [];

        var ang = 0;
        var alphaAng = 2*Math.PI/this.slices;

        for(var i = 0; i < this.slices; i++){

            this.vertices.push(Math.cos(ang), 0, -Math.sin(ang));
            this.indices.push(i, (i+1) % this.slices, this.slices);
            this.normals.push(Math.cos(ang), Math.cos(Math.PI/4.0), -Math.sin(ang));
            //reduze cone radius to 1, and make all values positive
            this.texCoords.push(Math.cos(ang)*0.5+0.5, -Math.sin(ang)*0.5+0.5);

            ang+=alphaAng;
        }
        this.vertices.push(0,1,0);
        this.normals.push(0,1,0);
        this.texCoords.push(0.5, 0.5);
        

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
    
    updateBuffers(complexity){
        this.slices = this.minComplexity + Math.round(this.maxComplexity * complexity);

        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }

    updateTexCoords(coords) {
		this.texCoords = [...coords];
		this.updateTexCoordsGLBuffers();
	}

}


