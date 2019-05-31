/**
 * MyTreeBranch
 * @constructor
 * @param scene - Reference to MyScene object
 * @param x - float with x coordinate
 * @param y - float with y coordinate
 * @param z - float with z coordinate
 * @param yAngle - y axis rotation in radians
 * @param zAngle - z axis rotation in radians
 */
class MyTreeBranch extends CGFobject {
    constructor(scene, x, y, z, yAngle, zAngle) {
        super(scene);
        this.x = x;
        this.y = y;
        this.z = z;
        this.yAngle = yAngle;
        this.zAngle = zAngle;
        this.initComponents();
        this.initMaterials();
    }
    initComponents() { this.cilinder = new MyCylinder(this.scene, 3, 3, 4); }
    initMaterials() {
        this.branchMaterial = new CGFappearance(this.scene);
        this.branchMaterial.setAmbient(0.55, 0.16, 0.07, 1);
        this.branchMaterial.setShininess(10.0);
    }
    display() {
        this.scene.pushMatrix();
        this.scene.translate(this.x, this.y, this.z);
        this.scene.rotate(this.yAngle, 0, 1, 0);
        this.scene.rotate(this.zAngle, 1, 0, 0);
        this.scene.scale(0.2, 2, 0.2);
        this.branchMaterial.apply();
        this.cilinder.display();
        this.scene.popMatrix();
    }
    enableNormalViz() { this.cilinder.enableNormalViz(); }
    disableNormalViz() { this.cilinder.disableNormalViz(); }
}
