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
        this.initTextures();
    }
    
    initComponents() {
        this.unitCube = new MyUnitCube(this.myScene);
    }

    initMaterials() {    
        this.cubemapMaterial = new CGFappearance(this.myScene);
        this.cubemapMaterial.setAmbient(0.7, 0.7, 0.7, 1);
        this.cubemapMaterial.setShininess(10.0);
    }
    initTextures(){
        this.dayTex = new CGFtexture(this.myScene, 'images/cubemap/daycubemap.png');
        this.nightTex = new CGFtexture(this.myScene, 'images/cubemap/nightcubemap.png');
        this.cbTex = this.nightTex;
    }
    display() {
        this.myScene.pushMatrix();
        this.myScene.translate(0, 0, 0);
        this.myScene.scale(-70, -70, -70);
        this.myScene.rotate(Math.PI,1, 0, 0);
        this.cubemapMaterial.setTexture(this.cbTex);
        this.cubemapMaterial.apply();
        this.unitCube.display();
        this.myScene.popMatrix();
    }

    swapTimeOfDay(selectedTod){
        if (selectedTod == 2)
            this.cbTex = this.nightTex;
        else this.cbTex = this.dayTex;
    }
}