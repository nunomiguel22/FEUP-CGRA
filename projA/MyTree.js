/**
 * MyTree
 * @constructor
 * @param scene - Reference to MyScene object
 * @param trunkHeight - Height of tree trunk
 * @param trunkRadius - Radius of tree trunk
 * @param treeTopHeight - Height of tree top
 * @param treeTopRadius - Radius of tree top
 */

class MyTree extends CGFobject {
    constructor(scene, trunkHeight, trunkRadius, treeTopHeight, treeTopRadius) {
        super(scene);

        this.trunkHeight = trunkHeight;
        this.trunkRadius = trunkRadius;
        this.treeTopHeight = treeTopHeight;
        this.treeTopRadius = treeTopRadius;
        this.slices = 8;
        this.initComponents();
        this.initMaterials();
        this.initTextures();
    }

    initComponents() {
        this.treeTop = new MyCone(this.scene, this.slices, 5, 5, 10);
        this.trunk = new MyCylinder(this.scene, this.slices, 5, 5, 10);
    }

    initMaterials(){
        this.treeMaterial = new CGFappearance(this.scene);
        this.treeMaterial.setAmbient(0, 0, 0, 1);
        this.treeMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.treeMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.treeMaterial.setShininess(10.0);
    }

    initTextures(){
        this.trunkTex =  new CGFtexture(this.scene, 'images/tree/treetrunk.png');
        this.topTex =  new CGFtexture(this.scene, 'images/tree/treetop.png');
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
        this.treeMaterial.setTexture(this.trunkTex);
        this.treeMaterial.apply();
        this.trunk.display();
        this.scene.popMatrix();
    }

    displayTreeTop() {
        this.scene.pushMatrix();
        this.scene.translate(0, this.trunkHeight, 0);
        this.scene.scale(this.treeTopRadius, this.treeTopHeight, this.treeTopRadius);
        this.treeMaterial.setTexture(this.topTex);
        this.treeMaterial.apply();
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

    setTextures(treeTrunk, treeTop){
        this.topTex = treeTop;
        this.trunkTex = treeTrunk;
    }
}