/**
 * MyLake
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyLake extends CGFobject {

	constructor(scene, numberOfRocks) {
        super(scene);
        this.myScene = scene;
        this.numberOfRocks = numberOfRocks;
        this.initComponents();
        this.initMaterials();
        this.initTextures();
    }
    
    initComponents() {
        this.rocks = new MyUnitCubeQuad(this.scene);
        this.water = new MyCircle(this.myScene, 3, 40);
    }

    initMaterials() {
        this.waterMaterial = new CGFappearance(this.myScene);
        this.waterMaterial.setAmbient(0, 0, 0, 1);
        this.waterMaterial.setDiffuse(0.1, 0.1, 0.3, 1);
        this.waterMaterial.setSpecular(0.6, 0.6, 1, 1);
        this.waterMaterial.setShininess(10.0);
        this.waterMaterial.loadTexture('images/lake/water.png');
    }

    initTextures(){
        this.coords = [];
        var alpha = 2*Math.PI/40;
        for(var i = 0; i < 40; i++){
            this.coords.push(Math.cos(alpha*i), -Math.sin(alpha*i));
        }
        this.coords.push(0.5, 0.5);
        this.water.updateTexCoords(this.coords);

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
            this.myScene.translate((3 * Math.cos(alpha * i)), 0.1, (3 * Math.sin(alpha * i)));
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