/**
 * MyTerrain
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTerrain extends CGFobject {

    constructor(scene) {
        super(scene);
        this.initComponents();
        this.initTextures();
        this.initShaders();
    }

    initComponents() { this.plane = new Plane(this.scene, 32); }

    initTextures() {
        this.heightMap = new CGFtexture(this.scene, 'images/heightmap.jpg');
        this.terrainTex = new CGFtexture(this.scene, 'images/terrain.jpg');
        this.gradientTex = new CGFtexture(this.scene, 'images/altimetry.png');
    }

    initShaders() {
        this.shader = new CGFshader(this.scene.gl, "shaders/terrain.vert", "shaders/terrain.frag")
        //Pass textures to shader
        this.shader.setUniformsValues({ uSampler: 0 });
        this.shader.setUniformsValues({ uSampler2: 1 });
        this.shader.setUniformsValues({ uSampler3: 2 });
        //Pass ambient value to shader
        this.shader.setUniformsValues({ uAmbientMat: [0.9, 0.9, 0.9, 1.0] });
    }

    display() {
        //Pass textures and values to shader
        this.shader.setUniformsValues({ normScale: this.scene.scaleFactor });
        this.shader.setUniformsValues({ uAmbient: this.scene.ambLight });
        this.scene.setActiveShader(this.shader);
        this.terrainTex.bind(0);
        this.heightMap.bind(1);
        this.gradientTex.bind(2);
        //Scale to correct size
        this.scene.pushMatrix();
        this.scene.rotate(-0.5 * Math.PI, 1, 0, 0);
        this.scene.scale(60, 60, 1);
        this.plane.display();
        this.scene.popMatrix();
        this.scene.setActiveShader(this.scene.defaultShader);
    }

    enableNormalViz() { this.plane.enableNormalViz(); }
    disableNormalViz() { this.plane.disableNormalViz(); }
}

