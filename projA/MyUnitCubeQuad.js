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
        this.initTextures();
    }
    
    initComponents() {
        this.quad = new MyQuad(this.myScene);
    }

    initTextures(){
        this.sideTex = new CGFtexture(this.myScene, 'images/mineSide.png');
        this.topTex = new CGFtexture(this.myScene, 'images/mineTop.png');
        this.bottomTex = new CGFtexture(this.myScene, 'images/mineBottom.png');
    }


    display() {
        
        //Front
        this.myScene.pushMatrix();
        this.myScene.translate(0, 0, 0.5);
        this.myScene.quadMaterial.setTexture(this.sideTex);
        this.myScene.quadMaterial.apply();
        this.myScene.gl.texParameteri(this.myScene.gl.TEXTURE_2D, this.myScene.gl.TEXTURE_MAG_FILTER, this.myScene.gl.NEAREST);
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
        this.myScene.gl.texParameteri(this.myScene.gl.TEXTURE_2D, this.myScene.gl.TEXTURE_MAG_FILTER, this.myScene.gl.NEAREST);
        this.quad.display();
        this.myScene.popMatrix();

        //Bottom
        this.myScene.pushMatrix();
        this.myScene.translate(0, -0.5, 0);
        this.myScene.rotate(Math.PI/2, 1, 0, 0);;
        this.myScene.quadMaterial.setTexture(this.bottomTex);
        this.myScene.quadMaterial.apply();
        this.myScene.gl.texParameteri(this.myScene.gl.TEXTURE_2D, this.myScene.gl.TEXTURE_MAG_FILTER, this.myScene.gl.NEAREST);
        this.quad.display();
        this.myScene.popMatrix();

        this.myScene.updateAppliedTexture();
    }
}