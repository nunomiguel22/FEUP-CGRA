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
        //this.initTextures();
    }
    
    initComponents() {
        this.pyramid = new MyPyramid(this.myScene, 4, 1);
        this.quadCube = new MyUnitCubeQuad(this.myScene);
    }

    initTextures(){
      
    }

    display() {

        this.myScene.pushMatrix();
        this.myScene.scale(1.2, 1, 1.2);
        this.myScene.rotate(Math.PI/4, 0, 1, 0);
        this.pyramid.display();
        this.myScene.popMatrix();

        this.myScene.pushMatrix();
        this.myScene.translate(0, -0.5, 0);
        this.quadCube.display();
        this.myScene.popMatrix();

    }
}