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
        this.myScene.quadMaterial = new CGFappearance(this.myScene);
        this.myScene.quadMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.myScene.quadMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.myScene.quadMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.myScene.quadMaterial.setShininess(10.0);
        this.myScene.quadMaterial.loadTexture('images/hill/mineSide.png');
        this.myScene.quadMaterial.setTextureWrap('REPEAT', 'REPEAT');
    }

    initTextures(){
        this.topTex = new CGFtexture(this.myScene, 'images/hill/mineTop.png');
        this.bottomTex = new CGFtexture(this.myScene, 'images/hill/mineBottom.png');
        this.sideTex =  new CGFtexture(this.myScene, 'images/hill/mineSide.png');
    }


    display() {
        
        //Front
        this.myScene.pushMatrix();
        this.myScene.translate(0, 0, 0.5);
        this.myScene.quadMaterial.setTexture(this.sideTex);
        this.myScene.quadMaterial.apply();
        this.quad.display();
        this.myScene.popMatrix();

        //Back
        this.myScene.pushMatrix();
        this.myScene.translate(0, 0, -0.5);
        this.myScene.rotate(Math.PI, 0, 1, 0);
        this.quad.display();
        this.myScene.popMatrix();

        //Left
        this.myScene.pushMatrix();
        this.myScene.translate(-0.5, 0, 0);
        this.myScene.rotate(-Math.PI/2, 0, 1, 0);
        this.quad.display();
        this.myScene.popMatrix();

        //Right
        this.myScene.pushMatrix();
        this.myScene.translate(0.5, 0, 0);
        this.myScene.rotate(Math.PI/2, 0, 1, 0);
        this.quad.display();
        this.myScene.popMatrix();

        //Top
        this.myScene.pushMatrix();
        this.myScene.translate(0, 0.5, 0);
        this.myScene.rotate(3*Math.PI/2, 1, 0, 0);
        this.myScene.quadMaterial.setTexture(this.topTex);
        this.myScene.quadMaterial.apply();
        this.quad.display();
        this.myScene.popMatrix();

        //Bottom
        this.myScene.pushMatrix();
        this.myScene.translate(0, -0.5, 0);
        this.myScene.rotate(Math.PI/2, 1, 0, 0);
        this.myScene.quadMaterial.setTexture(this.bottomTex);
        this.myScene.quadMaterial.apply();
        this.quad.display();
        this.myScene.popMatrix();
    }

    setTextures(side, top, bottom){
        this.topTex = top;
        this.bottomTex = bottom;
        this.sideTex = side;
    }

    setMaterial(mat){
        this.quadMaterial = mat;
    }

}