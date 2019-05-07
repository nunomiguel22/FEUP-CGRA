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
        this.initMaterials();
        this.initTextures();
    }
    
    initComponents() {
        this.quad = new MyQuad(this.myScene);
    }

    initMaterials(){
        //Default Material
        this.quadMaterial = new CGFappearance(this.myScene);
        this.quadMaterial.loadTexture('images/default.png');
    }
    initTextures(){
        this.topTex = new CGFtexture(this.myScene, 'images/default.png');
        this.bottomTex = new CGFtexture(this.myScene, 'images/default.png');
        this.frontTex = new CGFtexture(this.myScene, 'images/default.png');
        this.backTex = new CGFtexture(this.myScene, 'images/default.png');
        this.leftTex = new CGFtexture(this.myScene, 'images/default.png');
        this.rightTex = new CGFtexture(this.myScene, 'images/default.png'); 
    }

    display() {
        //Top
        this.myScene.pushMatrix();
        this.myScene.translate(0, 0.5, 0);
        this.myScene.rotate(3*Math.PI/2, 1, 0, 0);
        this.quadMaterial.setTexture(this.topTex);
        this.quadMaterial.apply();
        this.quad.display();
        this.myScene.popMatrix();
        //Bottom
        this.myScene.pushMatrix();
        this.myScene.translate(0, -0.5, 0);
        this.myScene.rotate(Math.PI/2, 1, 0, 0);
        this.quadMaterial.setTexture(this.bottomTex);
        this.quadMaterial.apply();
        this.quad.display();
        this.myScene.popMatrix();
        //Front
        this.myScene.pushMatrix();
        this.myScene.translate(0, 0, 0.5);
        this.quadMaterial.setTexture(this.frontTex);
        this.quadMaterial.apply();
        this.quad.display();
        this.myScene.popMatrix();
        //Back
        this.myScene.pushMatrix();
        this.myScene.translate(0, 0, -0.5);
        this.myScene.rotate(Math.PI, 0, 1, 0);
        this.quadMaterial.setTexture(this.backTex);
        this.quadMaterial.apply();
        this.quad.display();
        this.myScene.popMatrix();
        //Left
        this.myScene.pushMatrix();
        this.myScene.translate(-0.5, 0, 0);
        this.myScene.rotate(-Math.PI/2, 0, 1, 0);
        this.quadMaterial.setTexture(this.leftTex);
        this.quadMaterial.apply();
        this.quad.display();
        this.myScene.popMatrix();
        //Right
        this.myScene.pushMatrix();
        this.myScene.translate(0.5, 0, 0);
        this.myScene.rotate(Math.PI/2, 0, 1, 0);
        this.quadMaterial.setTexture(this.rightTex);
        this.quadMaterial.apply();
        this.quad.display();
        this.myScene.popMatrix();

    }

    setTextures(top, bottom, front, back, left, right){
        this.topTex = top;
        this.bottomTex = bottom;
        this.frontTex = front;
        //Repeat sides if texture not given
        this.backTex = (back == null) ? front : back;
        this.leftTex = (left == null) ? this.backTex : left;
        this.rightTex = (right == null) ? this.leftTex : right;
    }
    
    setMaterial(newMaterial){
        this.quadMaterial = newMaterial;
    }

    enableNormalViz() {
        this.quad.enableNormalViz();
    }

    disableNormalViz() {
        this.quad.disableNormalViz();
    }

}