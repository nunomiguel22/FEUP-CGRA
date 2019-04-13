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
    constructor(scene, trunkHeight, trunkRadius, treeTopHeight, treeTopRadius, trunkTexture,
        treeTopTexture) {
        super(scene);
        this.myScene = scene;
        this.trunkHeight = trunkHeight;
        this.trunkRadius = trunkRadius;
        this.treeTopHeight = treeTopHeight;
        this.treeTopRadius = treeTopRadius;
        this.trunkTexture = trunkTexture;
        this.treeTopTexture = treeTopTexture;
        this.slices = 10;
        this.initComponents();
        this.initMaterials();
    }

    initComponents() {
        this.treeTop = new MyCone(this.scene, this.slices, 5, 10);
        this.trunk = new MyCylinder(this.scene, this.slices, 5, 10);
    }

    initMaterials(){
        this.trunkMaterial = new CGFappearance(this.scene);
        this.trunkMaterial.setAmbient(0.01, 0.01, 0.0, 1);
        this.trunkMaterial.setDiffuse(0.15, 0.15, 0.0, 1);
        this.trunkMaterial.setSpecular(0.005, 0.05, 0.0, 1);
        this.trunkMaterial.setShininess(10.0);

        this.treeTopMaterial = new CGFappearance(this.scene);
        this.treeTopMaterial.setAmbient(0.05, 0.1, 0.05, 1);
        this.treeTopMaterial.setDiffuse(0.3, 0.6, 0.3, 1);
        this.treeTopMaterial.setSpecular(0.1, 0.2, 0.1, 1);
        this.treeTopMaterial.setShininess(10.0);
    }

/*     initTextures(){
        this.trunkTex =  new CGFtexture(this.scene, 'images/tree/treetrunk.png');
        this.topTex =  new CGFtexture(this.scene, 'images/tree/treetop.png');
    } */

    updateBuffers(complexity) {
        this.treeTop.updateBuffers(complexity);
        this.trunk.updateBuffers(complexity);
    }

    display() {
        this.displayTrunk();
        this.displayTreeTop();
    }

    displayTrunk() {
        this.myScene.pushMatrix();
        this.myScene.scale(this.trunkRadius, this.trunkHeight, this.trunkRadius);
        this.trunkMaterial.setTexture(this.trunkTexture);
        this.trunkMaterial.apply();
        this.trunk.display();
        this.myScene.popMatrix();
    }

    displayTreeTop() {
        this.myScene.pushMatrix();
        this.myScene.translate(0, this.trunkHeight, 0);
        this.myScene.scale(this.treeTopRadius, this.treeTopHeight, this.treeTopRadius);
        this.treeTopMaterial.setTexture(this.treeTopTexture);
        this.treeTopMaterial.apply();
        this.treeTop.display();
        this.myScene.popMatrix();
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