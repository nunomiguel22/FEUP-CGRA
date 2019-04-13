/**
 * MyCampFire
 * @constructor
 * @param scene - Reference to MyScene object
 */

class MyCampFire extends CGFobject {
    constructor(scene, radius, numberOfRocks, numberOfFirePart) {
        super(scene);
        this.radius = radius;
        this.numberOfRocks= numberOfRocks;
        this.numberOfFirePart = numberOfFirePart;
        this.initComponents();
        this.initMaterials();
        this.initTextures();
    }

    initComponents(){
        this.rocks = new MyUnitCubeQuad(this.scene);
        this.ash = new MyCircle(this.scene, this.radius, 40);
        this.firePart = new MyQuad(this.scene);
    }

    initMaterials(){
        this.ashMaterial = new CGFappearance(this.scene);
        this.ashMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.ashMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.ashMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.ashMaterial.setShininess(10.0);
        this.ashMaterial.loadTexture('images/campfire/ash.png');

        this.firePartMaterial = new CGFappearance(this.scene);
        this.firePartMaterial.setAmbient(3, 3, 3, 1);
        this.firePartMaterial.setDiffuse(3, 3, 3, 1);
        this.firePartMaterial.setSpecular(3, 3, 3, 1);
        this.firePartMaterial.setShininess(10.0);
        this.firePartMaterial.loadTexture('images/campfire/fireparticle.png');
    }
    
    initTextures(){
        this.rockTex = new CGFtexture(this.scene, 'images/campfire/rocks.png');
        this.rocks.setTextures(this.rockTex, this.rockTex, this.rockTex);
    }

    display() {
        this.ashMaterial.apply();
        this.ash.display();
        var alpha = 2*Math.PI/this.numberOfRocks;
        for (var i = 0; i < this.numberOfRocks; ++i){
            this.scene.pushMatrix();
            this.scene.translate((this.radius * Math.cos(alpha * i)), 0, (this.radius * Math.sin(alpha * i)));
            this.scene.scale(0.2, 0.2, 0.2);
            this.rocks.display();
            this.scene.popMatrix();
        }

        this.firePartMaterial.apply();
        alpha = 2*Math.PI/this.numberOfFirePart;
        this.scene.pushMatrix();
        this.scene.translate(-1, 0, 0);
        for (var i = 0; i < this.numberOfFirePart; ++i){
            this.scene.pushMatrix();
            this.scene.translate(Math.cos(alpha * i * 1.5), i * 0.6, Math.sin(alpha * i * 1.5));
            this.scene.scale(0.1, 0.1, 1);
            this.firePart.display();
            this.scene.popMatrix();
        }
        this.scene.popMatrix();
    }

    enableNormalViz() {
        this.rocks.enableNormalViz();
        this.firePart.enableNormalViz();
        this.ash.enableNormalViz();
    }

    disableNormalViz() {
        this.rocks.disableNormalViz();
        this.firePart.disableNormalViz();
        this.ash.disableNormalViz();
    }

}