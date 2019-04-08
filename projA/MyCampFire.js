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
        this.rock = new MyUnitCubeQuad(this.scene);
        this.circle = new MyCircle(this.scene, this.radius, 40);
        this.quad = new MyQuad(this.scene);
    }

    initMaterials(){
        this.scene.ashMaterial = new CGFappearance(this.scene);
        this.scene.ashMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.scene.ashMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.scene.ashMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.scene.ashMaterial.setShininess(10.0);
        this.scene.ashMaterial.loadTexture('images/campfire/ash.png');

        this.scene.firePart = new CGFappearance(this.scene);
        this.scene.firePart.setAmbient(3, 3, 3, 1);
        this.scene.firePart.setDiffuse(3, 3, 3, 1);
        this.scene.firePart.setSpecular(3, 3, 3, 1);
        this.scene.firePart.setShininess(10.0);
        this.scene.firePart.loadTexture('images/campfire/fireparticle.png');
    }
    
    initTextures(){
        this.rockTex = new CGFtexture(this.scene, 'images/campfire/rocks.png');
        this.rock.setTextures(this.rockTex, this.rockTex, this.rockTex, 
            this.rockTex, this.rockTex, this.rockTex);
    }

    display() {
        this.scene.ashMaterial.apply();
        this.circle.display();
        var alpha = 2*Math.PI/this.numberOfRocks;
        for (var i = 0; i < this.numberOfRocks; ++i){
            this.scene.pushMatrix();
            this.scene.translate((this.radius * Math.cos(alpha * i)), 0, (this.radius * Math.sin(alpha * i)));
            this.scene.scale(0.2, 0.2, 0.2);
            this.rock.display();
            this.scene.popMatrix();
        }

        this.scene.firePart.apply();
        alpha = 2*Math.PI/this.numberOfFirePart;
        this.scene.pushMatrix();
        this.scene.translate(-1, 0, 0);
        for (var i = 0; i < this.numberOfFirePart; ++i){
            this.scene.pushMatrix();
            this.scene.translate(Math.cos(alpha * i * 1.5), i * 0.6, Math.sin(alpha * i * 1.5));
            this.scene.scale(0.1, 0.1, 1);
            this.quad.display();
            this.scene.popMatrix();
        }
        this.scene.popMatrix();
    }

    enableNormalViz() {
        this.rock.enableNormalViz();
        this.circle.enableNormalViz();
        this.quad.enableNormalViz();
    }

    disableNormalViz() {
        this.rock.disableNormalViz();
        this.circle.disableNormalViz();
        this.quad.disableNormalViz();
    }

}