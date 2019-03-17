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

        this.myScene.customMaterialValues = {
            'Ambient': '#ff0000',
            'Diffuse': '#ff0000',
            'Specular': '#ff0000',
            'Shininess': 10
        }
        this.myScene.updateCustomMaterial();
        this.myScene.customMaterial.apply();

        this.redTriangle.display();

        this.myScene.popMatrix();
        this.myScene.pushMatrix(); 

        //YELLOW PARALELOGRAM

        this.yellowParalelogramTransform();

        this.myScene.customMaterialValues = {
            'Ambient': '#ffff00',
            'Diffuse': '#ffff00',
            'Specular': '#ffff00',
            'Shininess': 10
        }
        this.myScene.updateCustomMaterial();
        this.myScene.customMaterial.apply();

        this.yellowParalelogram.display();

        this.myScene.popMatrix();
        this.myScene.pushMatrix();

        //ORANGE TRIANGLE

        this.orangeTriangleTransform();

        this.myScene.customMaterialValues = {
            'Ambient': '#ff8000',
            'Diffuse': '#ff8000',
            'Specular': '#ff8000',
            'Shininess': 10
        }
        this.myScene.updateCustomMaterial();
        this.myScene.customMaterial.apply();

        this.orangeTriangle.display();

        this.myScene.popMatrix();
        this.myScene.pushMatrix();

        //GREEN DIAMONG

        this.greenDiamondTransform();

        this.myScene.customMaterialValues = {
            'Ambient': '#00ff00',
            'Diffuse': '#00ff00',
            'Specular': '#00ff00',
            'Shininess': 10
        }
        this.myScene.updateCustomMaterial();
        this.myScene.customMaterial.apply();

        this.greenDiamond.display();

        this.myScene.popMatrix();
        this.myScene.pushMatrix();

        //BLUE TRIANGLE

        this.blueTriangleTransform();

        this.myScene.customMaterialValues = {
            'Ambient': '#0000ff',
            'Diffuse': '#0000ff',
            'Specular': '#0000ff',
            'Shininess': 10
        }
        this.myScene.updateCustomMaterial();
        this.myScene.customMaterial.apply();

        this.blueTriangle.display();

        this.myScene.popMatrix();
        this.myScene.pushMatrix();

        //PINK TRIANGLE

        this.pinkTriangleTransform();

        this.myScene.customMaterialValues = {
            'Ambient': '#ff80ff',
            'Diffuse': '#ff80ff',
            'Specular': '#ff80ff',
            'Shininess': 10
        }
        this.myScene.updateCustomMaterial();
        this.myScene.customMaterial.apply();

        this.pinkTriangle.display();

        this.myScene.popMatrix();
        this.myScene.pushMatrix();

        //PURPLE TRIANGLE

        this.purpleTriangleTransform();

        this.myScene.customMaterialValues = {
            'Ambient': '#cc33ff',
            'Diffuse': '#cc33ff',
            'Specular': '#cc33ff',
            'Shininess': 10
        }
        this.myScene.updateCustomMaterial();
        this.myScene.customMaterial.apply();

        this.purpleTriangle.display(); 

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