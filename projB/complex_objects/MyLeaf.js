class MyLeaf extends CGFobject {
    constructor(scene) {
        super(scene);
        this.triangle = new MyTriangle(scene);
        this.initMaterials();
    }
    initMaterials() {
        this.leafMaterial = new CGFappearance(this.scene);
        this.leafMaterial.setAmbient(0.0, 1, 0.0, 1);
        this.leafMaterial.setShininess(10.0);
    }
    display() {
        this.scene.pushMatrix();
        this.scene.translate(0, 1, 0);
        this.scene.scale(0.4, 0.4, 0.4);
        this.leafMaterial.apply();
        this.triangle.display();
        this.scene.popMatrix();
    }
    enableNormalViz() { this.triangle.enableNormalViz(); }
    disableNormalViz() { this.triangle.disableNormalViz(); }
}
