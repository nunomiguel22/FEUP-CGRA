/**
 * MyVoxelHill
 * @constructor
 * @param scene - Reference to MyScene object
 * @param nLevels - Number of hill levels
 */
class MyVoxelHill extends CGFobject {

	constructor(scene, levels) {
        super(scene);
        this.myScene = scene;
        this.levels = levels;
        this.initComponents();
        this.initMaterials();
        this.initTextures();
    }
    
    initComponents() {
        this.unitCubeQuad = new MyUnitCubeQuad(this.myScene);
    }

    initMaterials(){
        this.hillMaterial = new CGFappearance(this.myScene);
        this.hillMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.hillMaterial.setDiffuse(0.8, 0.8, 0.8, 1);
        this.hillMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.hillMaterial.setShininess(10.0);
        this.unitCubeQuad.setMaterial(this.hillMaterial);
    }

    initTextures() {
        this.sideTex = new CGFtexture(this.myScene, 'images/hill/mineSide.png');
        this.topTex = new CGFtexture(this.myScene, 'images/hill/mineTop.png');
        this.bottomTex = new CGFtexture(this.myScene, 'images/hill/mineBottom.png');
        this.unitCubeQuad.setTextures(this.topTex, this.bottomTex, this.sideTex);
    }

    enableNormalViz(){
        this.unitCubeQuad.enableNormalViz();
    }

    disableNormalViz(){
        this.unitCubeQuad.disableNormalViz();
    }

    drawLevel(level){
        
        var size = level * 2 + 1;

        for (var i = 0; i < size; ++i){
            //Front Row
            this.myScene.pushMatrix();
            this.myScene.translate(- i + level,0, level);
            this.unitCubeQuad.display();
            this.myScene.popMatrix();

            //Back Row
            this.myScene.pushMatrix();
            this.myScene.translate(-i + level,0, -level);
            this.unitCubeQuad.display();
            this.myScene.popMatrix();
            
            if (i < size - 1){ //Corner cubes already done
                //Left Column
                this.myScene.pushMatrix();
                this.myScene.translate(-level,0, -i + level - 1);
                this.unitCubeQuad.display();
                this.myScene.popMatrix();

                //Right Column
                this.myScene.pushMatrix();
                this.myScene.translate(level,0, -i + level - 1);
                this.unitCubeQuad.display();
                this.myScene.popMatrix();
            }
        }
    }

    display() {
        this.unitCubeQuad.display();
        
        for (var i = 1; i < this.levels; ++i){
            this.myScene.pushMatrix();
            this.myScene.translate(0, -i, 0);
            this.drawLevel(i);
            this.myScene.popMatrix();
        }
    }

    setLevels(levels){
        this.levels = levels;
    }

}