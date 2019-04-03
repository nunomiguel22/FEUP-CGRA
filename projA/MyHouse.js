/**
 * MyVoxelHill
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
        this.pyramid = new MyPyramid(this.myScene, 4, 1);
        this.quadCube = new MyUnitCubeQuad(this.myScene);
        this.pillar = new MyPrism(this.myScene, 5);
    }

    initMaterials() {
        this.myScene.roofMaterial = new CGFappearance(this.myScene);
        this.myScene.roofMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.myScene.roofMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.myScene.roofMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.myScene.roofMaterial.setShininess(10.0);
        this.myScene.roofMaterial.loadTexture('images/house/walls.png');
        this.myScene.roofMaterial.setTextureWrap('REPEAT', 'REPEAT');
    }

    initTextures(){
        this.wallsTex = new CGFtexture(this.myScene, 'images/house/walls.png');
        this.quadCube.setTextures(this.wallsTex, this.wallsTex, this.wallsTex);
    }

    display() {
       
        //Roof
        this.myScene.pushMatrix();
        this.myScene.scale(1.5, 1, 1.5);
        this.myScene.rotate(Math.PI/4, 0, 1, 0);
        this.myScene.roofMaterial.apply();
        this.pyramid.display();
        this.myScene.popMatrix();

        //Walls
        this.myScene.pushMatrix();
        this.myScene.translate(0, -0.5, 0);
        this.quadCube.display();
        this.myScene.popMatrix();

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
}