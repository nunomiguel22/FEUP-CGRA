/**
 * MyTree
 */
class MyTree extends CGFobject {
    constructor(scene, trunkHeight, trunkRadius, treeTopHeight, treeTopRadius, trunkTexture, treeTopTexture) {
        super(scene);

        this.trunkHeight = trunkHeight;
        this.trunkRadius = trunkRadius;
        this.trunkTexture = trunkTexture;

        this.treeTopHeight = treeTopHeight;
        this.treeTopRadius = treeTopRadius;
        this.treeTopTexture = treeTopTexture;

        this.slices = 8;

        this.initBuffers(scene);
        
    }

    initBuffers(scene) {
        this.treeTop = new MyCone(scene, this.slices, 1, 5, 10);
        this.trunk = new MyCylinder(scene, this.slices, 1, 5, 10);
    }

    updateBuffers(complexity) {
        this.treeTop.updateBuffers(complexity);
        this.trunk.updateBuffers(complexity);
    }

    display() {
        this.displayTrunk();
        this.displayTreeTop();
    }

    displayTrunk() {
        this.scene.pushMatrix();
        this.scene.scale(this.trunkRadius, this.trunkHeight, this.trunkRadius);
        this.trunkTexture.apply();
        this.trunk.display();
        this.scene.popMatrix();
    }

    displayTreeTop() {
        this.scene.pushMatrix();
        this.scene.translate(0, this.trunkHeight, 0);
        this.scene.scale(this.treeTopRadius, this.treeTopHeight, this.treeTopRadius);
        this.treeTopTexture.apply();
        this.treeTop.display();
        this.scene.popMatrix();
    }

    enableNormalViz() {
        this.trunk.enableNormalViz();
        this.treeTop.enableNormalViz();
    }

    disableNormalViz() {
        this.trunk.disableNormalViz();
        this.treeTop.disableNormalViz();
    }
}