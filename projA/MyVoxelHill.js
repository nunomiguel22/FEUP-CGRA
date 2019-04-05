/**
 * MyVoxelHill
 * @constructor
 * @param scene - Reference to MyScene object
 * @param nLevels - Number of hill levels
 */
class MyVoxelHill extends CGFobject {

	constructor(scene, nLevels) {
        super(scene);
        this.myScene = scene;
        this.levels = nLevels;
        this.initComponents();
    }
    
    initComponents() {
        this.unitCubeQuad = new MyUnitCubeQuad(this.myScene);
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

    setLevels(nLevels){
        this.levels = nLevels;
    }
}