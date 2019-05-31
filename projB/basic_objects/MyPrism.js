/**
* MyPrism
* @constructor
*/
class MyPrism extends CGFobject {
    constructor(scene, slices) {
        super(scene);
        this.slices = slices;
        this.initBuffers();
    }

    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];
        this.texCoords = [];

        let alphaAng = 2 * Math.PI / this.slices;

        for (let i = 0; i < this.slices; i++) {
            let angle1 = i * alphaAng;
            let x1 = Math.cos(angle1);
            let z1 = Math.sin(angle1);

            let angle2 = (i + 1) * alphaAng;
            let x2 = Math.cos(angle2);
            let z2 = Math.sin(angle2);

            this.vertices.push(x1, 0, z1);
            this.vertices.push(x2, 0, z2);
            this.vertices.push(x1, 1, z1);
            this.vertices.push(x2, 1, z2);

            let normal = [
                Math.cos(angle1 + alphaAng / 2),
                0,
                Math.sin(angle1 + alphaAng / 2)
            ];

            // push normal once for each vertex of this rectangle
            this.normals.push(
                ...normal,
                ...normal,
                ...normal,
                ...normal
            );

            this.indices.push(
                4 * i + 1, 4 * i, 4 * i + 2,
                4 * i + 3, 4 * i + 1, 4 * i + 2
            );

            this.texCoords.push(0, 1);
            this.texCoords.push(1, 1);
            this.texCoords.push(0, 0);
            this.texCoords.push(1, 0);
        }

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }

    updateBuffers(complexity) {
        this.slices = 3 + Math.round(9 * complexity); //complexity leties 0-1, so slices leties 3-12

        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
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


