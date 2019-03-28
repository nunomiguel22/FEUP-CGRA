/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCubeQuad extends CGFobject {

	constructor(scene) {
        super(scene);
        this.myScene = scene;
        this.initComponents();
    }
    
    initComponents() {
        this.quad = new MyQuad(this.myScene);
    }


    display() {
        
        //Front
        this.myScene.pushMatrix();
        this.myScene.translate(0, 0, 0.5);
        this.quad.display();
        this.myScene.popMatrix();

        //Back
        this.myScene.pushMatrix();
        this.myScene.translate(0, 0, -0.5);
        this.myScene.rotate(Math.PI, 0, 1, 0);
        this.quad.display();
        this.myScene.popMatrix();

        //Left
        this.myScene.pushMatrix();
        this.myScene.translate(-0.5, 0, 0);
        this.myScene.rotate(-Math.PI/2, 0, 1, 0);
        this.quad.display();
        this.myScene.popMatrix();

        //Right
        this.myScene.pushMatrix();
        this.myScene.translate(0.5, 0, 0);
        this.myScene.rotate(Math.PI/2, 0, 1, 0);
        this.quad.display();
        this.myScene.popMatrix();

        //Top
        this.myScene.pushMatrix();
        this.myScene.translate(0, 0.5, 0);
        this.myScene.rotate(3*Math.PI/2, 1, 0, 0);
        this.quad.display();
        this.myScene.popMatrix();

        //Bottom
        this.myScene.pushMatrix();
        this.myScene.translate(0, -0.5, 0);
        this.myScene.rotate(Math.PI/2, 1, 0, 0);;
        this.quad.display();
        this.myScene.popMatrix();
    }
}