/**
* MyPyramid
* @constructor
*/
class MyPyramid extends CGFobject {
    constructor(scene, slices, stacks) {
        super(scene);
        this.slices = slices;
        this.stacks = stacks;
        this.initBuffers();
    }
    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];
        this.texCoords = [];

        let ang = 0;
        let alphaAng = 2 * Math.PI / this.slices;

        for (let i = 0; i < this.slices; i++) {
            // All vertices have to be declared for a given face
            // even if they are shared with others, as the normals 
            // in each face will be different

            let sa = Math.sin(ang);
            let saa = Math.sin(ang + alphaAng);
            let ca = Math.cos(ang);
            let caa = Math.cos(ang + alphaAng);

            this.vertices.push(0.0, 1.0, 0.0);
            this.vertices.push(ca, 0.0, -sa);
            this.vertices.push(caa, 0.0, -saa);

            // triangle normal computed by cross product of two edges
            let normal = [
                saa - sa,
                ca * saa - sa * caa,
                caa - ca
            ];

            // normalization
            let nsize = Math.sqrt(
                normal[0] * normal[0] +
                normal[1] * normal[1] +
                normal[2] * normal[2]
            );
            normal[0] /= nsize;
            normal[1] /= nsize;
            normal[2] /= nsize;

            // push normal once for each vertex of this triangle
            this.normals.push(...normal);
            this.normals.push(...normal);
            this.normals.push(...normal);

            this.indices.push(3 * i, (3 * i + 1), (3 * i + 2));

            // Texture coordinates
            this.texCoords.push(0.5, 0);
            this.texCoords.push(0, 1);
            this.texCoords.push(1, 1);

            ang += alphaAng;
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


