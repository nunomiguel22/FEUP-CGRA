/**
 * MyHouse
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyHouse extends CGFobject {

	constructor(scene) {
        super(scene);
        this.myScene = scene;
        this.initComponents();
        this.initMaterials();
        this.initTextures();
    }
    
    initComponents() {
        this.roof = new MyPyramid(this.myScene, 4, 1);
        this.walls = new MyUnitCubeQuad(this.myScene);
        this.pillar = new MyPrism(this.myScene, 5, 5, 5);
    }

    initMaterials() {
        this.wallMaterial = new CGFappearance(this.myScene);
        this.wallMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.wallMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.wallMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.wallMaterial.setShininess(10.0);
        this.walls.setMaterial(this.wallMaterial);

        this.roofMaterial = new CGFappearance(this.myScene);
        this.roofMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.roofMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.roofMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.roofMaterial.setShininess(10.0);
        this.roofMaterial.loadTexture('images/house/roof.png');

        this.pillarMaterial = new CGFappearance(this.myScene);
        this.pillarMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.pillarMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.pillarMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.pillarMaterial.setShininess(10.0);
        this.pillarMaterial.loadTexture('images/house/pillars.png');
    }

    initTextures(){
        this.sWallsTex = new CGFtexture(this.myScene, 'images/house/sidewalls.png');
        this.fWallTex = new CGFtexture(this.myScene, 'images/house/frontwall.png');
        this.walls.setTextures(this.sWallsTex, this.sWallsTex, this.fWallTex, this.sWallsTex);
    }

    display() {
        //Roof
        this.myScene.pushMatrix();
        this.myScene.scale(1.5, 1, 1.5);
        this.myScene.rotate(Math.PI/4, 0, 1, 0);
        this.roofMaterial.apply();
        this.roof.display();
        this.myScene.popMatrix();
        
        //Walls
        this.myScene.pushMatrix();
        this.myScene.translate(0, -0.5, 0);
        this.walls.display();
        this.myScene.popMatrix();

        //Pillars
        this.pillarMaterial.apply();
        //Top right pillar
        this.myScene.pushMatrix();
        this.myScene.translate(0.8, -1, 0.8);
        this.myScene.scale(0.15, 1, 0.15);
        this.pillar.display();
        this.myScene.popMatrix();
        //Top left pillar
        this.myScene.pushMatrix();
        this.myScene.translate(-0.8, -1, 0.8);
        this.myScene.scale(0.15, 1, 0.15);
        this.pillar.display();
        this.myScene.popMatrix();
        //Back right pillar
        this.myScene.pushMatrix();
        this.myScene.translate(0.8, -1, -0.8);
        this.myScene.scale(0.15, 1, 0.15);
        this.pillar.display();
        this.myScene.popMatrix();
        //Back left pillar
        this.myScene.pushMatrix();
        this.myScene.translate(-0.8, -1, -0.8);
        this.myScene.scale(0.15, 1, 0.15);
        this.pillar.display();
        this.myScene.popMatrix();
    }

    enableNormalViz() {
        this.walls.enableNormalViz();
        this.roof.enableNormalViz();
        this.pillar.enableNormalViz();
    }

    disableNormalViz() {
        this.walls.disableNormalViz();
        this.roof.disableNormalViz();
        this.pillar.disableNormalViz();
    }
}