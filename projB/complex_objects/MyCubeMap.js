/**
 * MyCubeMap
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyCubeMap extends CGFobject {

    constructor(scene) {
        super(scene);
        this.myScene = scene;
        this.initComponents();
        this.initMaterials();
    }

    initComponents() {
        this.unitCube = new MyUnitCube(this.myScene);
    }

    initMaterials() {
        this.cubemapMaterial = new CGFappearance(this.myScene);
        this.cubemapMaterial.setAmbient(0.7, 0.7, 0.7, 1);
        this.cubemapMaterial.setShininess(10.0);
        this.cubemapMaterial.loadTexture('images/cubemap/daycubemap.png');
    }

    display() {
        this.myScene.pushMatrix();
        this.myScene.translate(0, 0, 0);
        this.myScene.scale(-100, -100, -100);
        this.myScene.rotate(Math.PI, 1, 0, 0);
        this.cubemapMaterial.apply();
        this.unitCube.display();
        this.myScene.popMatrix();
    }
}
