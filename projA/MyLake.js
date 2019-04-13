/**
 * MyLake
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyLake extends CGFobject {

	constructor(scene, numberOfRocks, radius) {
        super(scene);
        this.myScene = scene;
        this.numberOfRocks = numberOfRocks;
        this.radius = radius;
        this.initComponents();
        this.initMaterials();
        this.initTextures();
    }
    
    initComponents() {
        this.rocks = new MyUnitCubeQuad(this.scene);
        this.water = new MyCircle(this.myScene, this.radius, 40);
    }

    initMaterials() {
        this.waterMaterial = new CGFappearance(this.myScene);
        this.waterMaterial.setAmbient(0, 0, 0, 0);
        this.waterMaterial.setDiffuse(0.1, 0.1, 0.3, 1);
        this.waterMaterial.setSpecular(0.6, 0.6, 1, 1);
        this.waterMaterial.setShininess(10.0);
        this.waterMaterial.loadTexture('images/lake/water.png');
    }

    initTextures(){
        this.rockTex = new CGFtexture(this.scene, 'images/campfire/rocks.png');
        this.rocks.setTextures(this.rockTex, this.rockTex, this.rockTex);
    }

    display() {
        this.myScene.pushMatrix();
        this.waterMaterial.apply();
        this.water.display();
        this.myScene.popMatrix();

        //Rocks around water
        var alpha = 2*Math.PI/this.numberOfRocks;
        for (var i = 0; i < this.numberOfRocks; ++i){
            this.myScene.pushMatrix();
            this.myScene.translate((this.radius * Math.cos(alpha * i)), 0.1, (this.radius * Math.sin(alpha * i)));
            this.myScene.scale(0.4, 0.4, 0.4);
            this.rocks.display();
            this.myScene.popMatrix();
        }
    }

    enableNormalViz() {
        this.rocks.enableNormalViz();
        this.water.enableNormalViz();
    }

    disableNormalViz() {
        this.rocks.disableNormalViz();
        this.water.disableNormalViz();
    }
}