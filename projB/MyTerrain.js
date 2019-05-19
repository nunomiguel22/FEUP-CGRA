/**
 * MyTerrain
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTerrain extends CGFobject {

    constructor(scene) {
        super(scene);
        this.initComponents();
        this.initMaterials();
        this.initTextures();
        this.initShaders();
    }

    initComponents() {
        this.plane = new Plane(this.scene, 32);
    }

    initMaterials() {
        this.terrainMaterial = new CGFappearance(this.scene);
        this.terrainMaterial.setAmbient(0.3, 0.3, 0.3, 1);
        this.terrainMaterial.setDiffuse(0.7, 0.7, 0.7, 1);
        this.terrainMaterial.setSpecular(0.0, 0.0, 0.0, 1);
        this.terrainMaterial.setShininess(10);
    }

    initTextures() {
        this.heightMap = new CGFtexture(this.scene, 'images/heightmap.jpg');
        this.terrainTex = new CGFtexture(this.scene, 'images/terrain.jpg');
    }

    initShaders() {
        this.shader = new CGFshader(this.scene.gl, "shaders/terrain.vert", "shaders/terrain.frag")
        this.shader.setUniformsValues({ uSampler2: 1 });
    }

    display() {
        this.shader.setUniformsValues({ normScale: this.scene.scaleFactor });
        this.terrainMaterial.apply();
        this.scene.setActiveShader(this.shader);
        this.terrainMaterial.setTexture(this.terrainTex);
        this.heightMap.bind(1);

        this.scene.pushMatrix();
        this.scene.rotate(-0.5 * Math.PI, 1, 0, 0);
        this.scene.scale(60, 60, 1);
        this.plane.display();
        this.scene.popMatrix();
        this.scene.setActiveShader(this.scene.defaultShader);
    }

    enableNormalViz() {
        this.plane.enableNormalViz();
    }

    disableNormalViz() {
        this.plane.disableNormalViz();
    }
}

