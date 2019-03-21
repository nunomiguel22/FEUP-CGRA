/**
 * MyTriangle
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {

	constructor(scene) {
        super(scene);
        this.myScene = scene;
		this.initComponents();
    }
    
    initComponents() {
        this.redTriangle = new MyTriangle(this.myScene);
        this.yellowParalelogram = new MyParallelogram(this.myScene);
        this.orangeTriangle = new MyTriangle(this.myScene);
        this.greenDiamond = new MyDiamond(this.myScene);
        this.blueTriangle = new MyTriangle(this.myScene);
        this.pinkTriangle = new MyTriangle(this.myScene);
        this.purpleTriangle = new MyTriangle(this.myScene);
    }

    display() {

        //Forgot tangram needs to be centered
        this.myScene.pushMatrix();

        this.myScene.translate(-5, -3.5, 0);
        this.myScene.pushMatrix();

        this.greenDiamondTransform();
        this.greenDiamond.display();

        this.myScene.popMatrix();
        this.myScene.pushMatrix();

        this.redTriangleTransform();
        this.redTriangle.display();

        this.myScene.popMatrix();
        this.myScene.pushMatrix();

        this.yellowParalelogramTransform();
        this.yellowParalelogram.display();

        this.myScene.popMatrix();
        this.myScene.pushMatrix();

        this.orangeTriangleTransform();
        this.orangeTriangle.display();

        this.myScene.popMatrix();
        this.myScene.pushMatrix();

        this.blueTriangleTransform();
        this.blueTriangle.display();

        this.myScene.popMatrix();
        this.myScene.pushMatrix();

        this.pinkTriangleTransform();
        this.pinkTriangle.display();

        this.myScene.popMatrix();
        this.myScene.pushMatrix();

        this.purpleTriangleTransform();
        this.purpleTriangle.display();

        this.myScene.popMatrix();
        this.myScene.popMatrix();
    }

    redTriangleTransform() {
       this.myScene.rotate(-Math.PI/4, 0, 0, 1);
       this.myScene.translate(0, 2, 0);
    }

    yellowParalelogramTransform() {
        this.myScene.scale(-Math.sqrt(2),Math.sqrt(2), 0);
        this.myScene.translate(0,1,0);
        this.myScene.rotate(Math.PI/2, 0,0,1);
    }

    orangeTriangleTransform() {
        this.myScene.scale(2,2,0);
        this.myScene.rotate(3*Math.PI/4, 0, 0 , 1);
        this.myScene.translate(1/2, -1.5, 0);
    }

    greenDiamondTransform() {
        this.myScene.translate(2,6.005,0);
    }

    blueTriangleTransform() {
        this.myScene.rotate(Math.PI/2, 0, 0 , 1);
        this.myScene.scale(2,2,0);
        this.myScene.translate(1, -1.7, 0);
    }

    pinkTriangleTransform() {
        this.myScene.scale(Math.sqrt(2),Math.sqrt(2),0);
        this.myScene.translate(4.8,1.82,0);
    }

    purpleTriangleTransform() {
        this.myScene.rotate(Math.PI/4, 0, 0 , 1);
        this.myScene.translate(7,-5.35,0);
    }

}