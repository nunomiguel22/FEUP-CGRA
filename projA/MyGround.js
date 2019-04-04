/**
 * MyGround
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyGround extends CGFobject {

	constructor(scene, size) {
        super(scene);
        this.myScene = scene;
        this.size = size;
        this.initComponents();
        this.initMaterials();
    }
    
    initComponents() {
        this.quad = new MyQuad(this.myScene);
    }

    initMaterials(){
      this.myScene.groundMaterial = new CGFappearance(this.myScene);
      this.myScene.groundMaterial.loadTexture('images/ground/grass.png');
      this.myScene.groundMaterial.setTextureWrap('REPEAT', 'REPEAT');
      this.myScene.groundMaterial.setAmbient(0.1, 0.2, 0.1, 1);
      this.myScene.groundMaterial.setDiffuse(0.6, 0.7, 0.6, 1);
      this.myScene.groundMaterial.setSpecular(0.04, 0.7, 0.04, 1);
      this.myScene.groundMaterial.setShininess(10);
    }
    
    display() {
        this.myScene.pushMatrix();
        this.myScene.scale(this.size, 1, this.size);
        this.myScene.rotate(3*Math.PI/2, 1, 0, 0);
        this.myScene.groundMaterial.apply();
        this.quad.display();
        this.myScene.popMatrix();
    }
}