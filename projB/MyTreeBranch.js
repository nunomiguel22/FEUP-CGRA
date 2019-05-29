class MyTreeBranch extends CGFobject {
    constructor(scene, x, y, z, angle) {
        super(scene);
        this.x = x;
        this.y = y;
        this.z = z;
        this.angle = angle;

        this.cilinder = new MyCylinder(scene, 3, 3, 4);
        this.initMaterials();
    }
    initMaterials() {
        this.branchMaterial = new CGFappearance(this.scene);
        this.branchMaterial.setAmbient(0.55, 0.16, 0.07, 1);
        this.branchMaterial.setShininess(10.0);
    }
    display() {
        this.scene.pushMatrix();
        this.scene.translate(this.x, this.y, this.z);
        this.scene.rotate(this.angle, 0, 1, 0);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.scene.scale(0.2, 2, 0.2);
        this.branchMaterial.apply();
        this.cilinder.display();
        this.scene.popMatrix();
    }
    enableNormalViz() { this.cilinder.enableNormalViz(); }
    disableNormalViz() { this.cilinder.disableNormalViz(); }
}
