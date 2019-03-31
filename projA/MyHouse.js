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
        this.initTextures();
    }
    
    initComponents() {
        this.pyramid = new MyPyramid(this.myScene, 4, 1);
        this.quadCube = new MyUnitCubeQuad(this.myScene);
        this.pillar = new MyPrism(this.myScene, 5);
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