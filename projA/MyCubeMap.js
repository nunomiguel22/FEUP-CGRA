/**
 * MyCubeMap
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyCubeMap extends CGFobject {

	constructor(scene) {
        super(scene);
        this.myScene = scene;
        this.initComponents();
        this.initMaterials();
    }
    
    initComponents() {
        this.unitCube = new MyUnitCube(this.myScene);
    }

    initMaterials() {
        
        this.myScene.cubemapMaterial = new CGFappearance(this.myScene);
        this.myScene.cubemapMaterial.loadTexture('images/cubemap/tempcb.png');
        this.myScene.cubemapMaterial.setAmbient(1, 1, 1, 1);
        this.myScene.cubemapMaterial.setDiffuse(1, 1, 1, 1);
        this.myScene.cubemapMaterial.setSpecular(1, 1, 1, 1);
        this.myScene.cubemapMaterial.setShininess(10.0);
    }
    display() {
        this.myScene.pushMatrix();
        this.myScene.translate(0, 20, 0);
        this.myScene.scale(50, 50, 50);
        
        this.myScene.scale(-1, -1, -1);
        this.myScene.rotate(Math.PI,1, 0, 0);
        this.myScene.cubemapMaterial.apply();
        this.unitCube.display();
        this.myScene.popMatrix();
    }
}