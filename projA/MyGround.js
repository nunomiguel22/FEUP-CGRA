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
      this.myScene.groundMaterial.setAmbient(0.05, 0.1, 0.05, 1);
      this.myScene.groundMaterial.setDiffuse(0.2, 0.5, 0.2, 1);
      this.myScene.groundMaterial.setSpecular(0.04, 0.07, 0.04, 1);
      this.myScene.groundMaterial.setShininess(10);
    }
    enableNormalViz(){
        this.quad.enableNormalViz();
    }
    
    disableNormalViz(){
        this.quad.disableNormalViz();
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