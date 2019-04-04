/**
 * MyTree
 */
class MyTree extends CGFobject {
    constructor(scene, trunkHeight, trunkRadius, treeTopHeight, treeTopRadius) {
        super(scene);

        this.trunkHeight = trunkHeight;
        this.trunkRadius = trunkRadius;
        this.treeTopHeight = treeTopHeight;
        this.treeTopRadius = treeTopRadius;
        this.slices = 8;
        this.initBuffers(scene);
        this.initMaterials();
        this.initTextures();
    }

    initBuffers(scene) {
        this.treeTop = new MyCone(scene, this.slices, 1, 5, 10);
        this.trunk = new MyCylinder(scene, this.slices, 1, 5, 10);
    }

    initMaterials(){
        this.scene.treeDefaultMat = new CGFappearance(this.scene);
        this.scene.treeDefaultMat.setAmbient(0.1, 0.1, 0.1, 1);
        this.scene.treeDefaultMat.setDiffuse(0.9, 0.9, 0.9, 1);
        this.scene.treeDefaultMat.setSpecular(0.1, 0.1, 0.1, 1);
        this.scene.treeDefaultMat.setShininess(10.0);
    }

    initTextures(){
        this.trunkTex =  new CGFtexture(this.scene, 'images/house/roof.png');
        this.topTex =  new CGFtexture(this.scene, 'images/ground/grass.png');
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
        this.scene.treeDefaultMat.setTexture(this.trunkTex);
        this.scene.treeDefaultMat.apply();
        this.trunk.display();
        this.scene.popMatrix();
    }

    displayTreeTop() {
        this.scene.pushMatrix();
        this.scene.translate(0, this.trunkHeight, 0);
        this.scene.scale(this.treeTopRadius, this.treeTopHeight, this.treeTopRadius);
        this.scene.treeDefaultMat.setTexture(this.topTex);
        this.scene.treeDefaultMat.apply();
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