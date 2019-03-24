/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {

	constructor(scene) {
        super(scene);
        this.myScene = scene;
        this.initComponents();
        this.initMaterials();
    }
    
    initComponents() {
        this.redTriangle = new MyTriangle(this.myScene);
        this.yellowParalelogram = new MyParallelogram(this.myScene);
        
        this.orangeTriangle = new MyTriangle(this.myScene);
        this.orangeCoords = [
			0.25, 0.25,
			0.25, 0.75,
			0.5, 0.5,
			0.25, 0.25,
			0.25, 0.75,
			0.5, 0.5
		];
        this.orangeTriangle.updateTexCoords(this.orangeCoords);

        this.greenDiamond = new MyDiamond(this.myScene);
        
        this.blueTriangle = new MyTriangle(this.myScene);
        this.blueCoords = [
			0, 0,
			0, 0.5,
			0.25, 0.25,
			0, 0,
			0, 0.5,
			0.25, 0.25
		];
        this.blueTriangle.updateTexCoords(this.blueCoords);
        
        this.pinkTriangle = new MyTriangle(this.myScene);
        this.pinkCoords = [
            1, 0,
            1, 1,
            0.5, 0.5,
            1, 0,
            1, 1,
            0.5, 0.5
		];
        this.pinkTriangle.updateTexCoords(this.pinkCoords);
        
        this.purpleTriangle = new MyTriangle(this.myScene);
      /*   this.purpleCoords = [
            1, 0,
            1, 1,
            0.5, 0.5,
            1, 0,
            1, 1,
            0.5, 0.5
		];
        this.purpleTriangle.updateTexCoords(this.purpleCoords); */
    }

    initMaterials() {
        this.myScene.redMaterial = new CGFappearance(this.myScene);
        this.myScene.yellowMaterial = new CGFappearance(this.myScene);
        this.myScene.orangeMaterial = new CGFappearance(this.myScene);
        this.myScene.diamondMaterial = new CGFappearance(this.myScene);
        this.myScene.blueMaterial = new CGFappearance(this.myScene);
        this.myScene.pinkMaterial = new CGFappearance(this.myScene);
        this.myScene.purpleMaterial = new CGFappearance(this.myScene);

        this.myScene.redMaterial.loadTexture('images/tangram.png');
        this.myScene.redMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.myScene.redMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.myScene.redMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.myScene.redMaterial.setShininess(10.0);

        this.myScene.yellowMaterial.loadTexture('images/tangram.png');
        this.myScene.yellowMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.myScene.yellowMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.myScene.yellowMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.myScene.yellowMaterial.setShininess(10.0); 

        this.myScene.orangeMaterial.loadTexture('images/tangram.png');
        this.myScene.orangeMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.myScene.orangeMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.myScene.orangeMaterial.setSpecular(1, 0.6, 0, 1);
        this.myScene.orangeMaterial.setShininess(10.0);

        this.myScene.blueMaterial.loadTexture('images/tangram.png');
        this.myScene.blueMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.myScene.blueMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.myScene.blueMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.myScene.blueMaterial.setShininess(10.0);

        this.myScene.pinkMaterial.loadTexture('images/tangram.png');
        this.myScene.pinkMaterial.setAmbient(1, 0.5, 1,1);
        this.myScene.pinkMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.myScene.pinkMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.myScene.pinkMaterial.setShininess(10.0);
        
        this.myScene.purpleMaterial.loadTexture('images/tangram.png');
        this.myScene.purpleMaterial.setAmbient(0.7, 0.3, 1, 1);
        this.myScene.purpleMaterial.setDiffuse(0.7, 0.3, 1, 0.1);
        this.myScene.purpleMaterial.setSpecular(0.7, 0.3, 1, 1);
        this.myScene.purpleMaterial.setShininess(10.0);

        this.myScene.diamondMaterial.loadTexture('images/tangram.png');
        this.myScene.diamondMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.myScene.diamondMaterial.setDiffuse(0.9, 0.9, 0.9, 0.5);
        this.myScene.diamondMaterial.setSpecular(0.1, 0.1, 0.1, 0.1);
        this.myScene.diamondMaterial.setShininess(10.0);
    }


    enableNormalViz() {
        this.redTriangle.enableNormalViz();
        this.yellowParalelogram.enableNormalViz();
        this.orangeTriangle.enableNormalViz();
        this.greenDiamond.enableNormalViz();
        this.blueTriangle.enableNormalViz();
        this.pinkTriangle.enableNormalViz();
        this.purpleTriangle.enableNormalViz();
    }

    disableNormalViz() {
        this.redTriangle.disableNormalViz();
        this.yellowParalelogram.disableNormalViz();
        this.orangeTriangle.disableNormalViz();
        this.greenDiamond.disableNormalViz();
        this.blueTriangle.disableNormalViz();
        this.pinkTriangle.disableNormalViz();
        this.purpleTriangle.disableNormalViz();
    }

    display() {
        this.myScene.pushMatrix();

        //RED TRIANGLE

        this.redTriangleTransform();
        this.myScene.redMaterial.apply();
        this.redTriangle.display();

        this.myScene.popMatrix();
        this.myScene.pushMatrix(); 

        //YELLOW PARALELOGRAM

        this.yellowParalelogramTransform();
        this.myScene.yellowMaterial.apply();
        this.yellowParalelogram.display();

        this.myScene.popMatrix();
        this.myScene.pushMatrix();

        //ORANGE TRIANGLE

        this.orangeTriangleTransform(); 
        this.myScene.orangeMaterial.apply();
        this.orangeTriangle.display();

        this.myScene.popMatrix();
        this.myScene.pushMatrix();

        //GREEN DIAMONG

        this.greenDiamondTransform();
        this.myScene.diamondMaterial.apply();
        this.greenDiamond.display();

        this.myScene.popMatrix();
        this.myScene.pushMatrix();

        //BLUE TRIANGLE

        this.blueTriangleTransform();
        this.myScene.blueMaterial.apply();
        this.blueTriangle.display();

        this.myScene.popMatrix();
        this.myScene.pushMatrix();

        //PINK TRIANGLE

        this.pinkTriangleTransform();
        this.myScene.pinkMaterial.apply();
        this.pinkTriangle.display();

        this.myScene.popMatrix();
        this.myScene.pushMatrix();

        //PURPLE TRIANGLE

        this.purpleTriangleTransform();
        this.myScene.purpleMaterial.apply();
        this.purpleTriangle.display(); 

        this.myScene.popMatrix();
    }

    redTriangleTransform() {
       this.myScene.rotate(-Math.PI/4, 0, 0, 1);
       this.myScene.translate(0, 2, 0);
    }

    yellowParalelogramTransform() {
        this.myScene.scale(-Math.sqrt(2),Math.sqrt(2), 1);
        this.myScene.translate(0,1,0);
        this.myScene.rotate(Math.PI/2, 0,0,1);
    }

    orangeTriangleTransform() {
        this.myScene.scale(2,2,1);
        this.myScene.rotate(3*Math.PI/4, 0, 0 , 1);
        this.myScene.translate(1/2, -1.5, 0);
    }

    greenDiamondTransform() {
        this.myScene.translate(2,6.005,0);
    }

    blueTriangleTransform() {
        this.myScene.rotate(Math.PI/2, 0, 0 , 1);
        this.myScene.scale(2,2,1);
        this.myScene.translate(1, -1.7, 0);
    }

    pinkTriangleTransform() {
        this.myScene.scale(Math.sqrt(2),Math.sqrt(2),1);
        this.myScene.translate(4.8,1.82,0);
    }

    purpleTriangleTransform() {
        this.myScene.rotate(Math.PI/4, 0, 0 , 1);
        this.myScene.translate(7,-5.35,0);
    }
}