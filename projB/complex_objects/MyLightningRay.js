/**
 * MyLightningRay
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyLightningRay extends CGFobject {
    constructor(scene, width, height) {
        super(scene);
        this.width = width;
        this.height = height;
        this.initComponents();
        this.initMaterials();
    }

    initComponents() {
        this.quad = new MyQuad(this.scene);
    }
    initMaterials() {
        this.rayMaterial = new CGFappearance(this.scene);
        this.rayMaterial.setAmbient(0.5, 0.5, 0.7, 1);
        this.rayMaterial.setDiffuse(0.5, 0.5, 1.0, 1);
        this.rayMaterial.setSpecular(0.2, 0.2, 0.4, 1);
        this.rayMaterial.setShininess(10.0);
    }


    display() {
        this.scene.pushMatrix();
        this.scene.scale(this.width, 1, this.height);
        this.rayMaterial.apply();
        this.quad.display();
        this.scene.popMatrix();
    }

    enableNormalViz() { this.quad.enableNormalViz(); }

    disableNormalViz() { this.quad.disableNormalViz(); }
}
