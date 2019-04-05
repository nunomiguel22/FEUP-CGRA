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
        this.myScene.cubemapMaterial = new CGFappearance(this.myScene);
        this.myScene.cubemapMaterial.loadTexture('images/cubemap/tempcb.png');
        this.myScene.cubemapMaterial.setAmbient(1, 1, 1, 1);
        this.myScene.cubemapMaterial.setDiffuse(1, 1, 1, 1);
        this.myScene.cubemapMaterial.setSpecular(1, 1, 1, 1);
        this.myScene.cubemapMaterial.setShininess(10.0);
    }
    initTextures(){
        this.dayTex = new CGFtexture(this.myScene, 'images/cubemap/tempcb.png');
        this.nightTex = new CGFtexture(this.myScene, 'images/cubemap/nightcubemap.png');
        this.cbTex = this.nightTex;
    }
    display() {
        this.myScene.pushMatrix();
        this.myScene.translate(0, 0, 0);
        this.myScene.scale(50, 50, 50);
        
        this.myScene.scale(-1, -1, -1);
        this.myScene.rotate(Math.PI,1, 0, 0);
        this.myScene.cubemapMaterial.setTexture(this.cbTex);
        this.myScene.cubemapMaterial.apply();
        this.unitCube.display();
        this.myScene.popMatrix();
    }

    setTexture(cubemapTex){
        this.cbTex = cubemapTex;
    }

    setMaterial(cbmat){
        this.myScene.cubemapMaterial = cbmat;
    }

    swapTimeOfDay(selectedTod){
        if (selectedTod == 2)
            this.cbTex = this.nightTex;
        else this.cbTex = this.dayTex;
    }
}