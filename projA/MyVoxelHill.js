/**
 * MyVoxelHill
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyVoxelHill extends CGFobject {

	constructor(scene, nLevels) {
        super(scene);
        this.myScene = scene;
        this.levels = nLevels;
        this.initComponents();
        this.initMaterials();
    }
    
    initComponents() {
        this.UnitCubeQuad = new MyUnitCubeQuad(this.myScene);
    }

    initMaterials(){
      

    }

    drawLevel(level){
        
        var size = level * 2 + 1;

        for (var i = 0; i < size; ++i){
            //Front Row
            this.myScene.pushMatrix();
            this.myScene.translate(- i + level,0, level);
            this.UnitCubeQuad.display();
            this.myScene.popMatrix();

            //Back Row
            this.myScene.pushMatrix();
            this.myScene.translate(-i + level,0, -level);
            this.UnitCubeQuad.display();
            this.myScene.popMatrix();
            
            if (i < size - 1){ //Corner cubes already done
                //Left Column
                this.myScene.pushMatrix();
                this.myScene.translate(-level,0, -i + level - 1);
                this.UnitCubeQuad.display();
                this.myScene.popMatrix();

                //Right Column
                this.myScene.pushMatrix();
                this.myScene.translate(level,0, -i + level - 1);
                this.UnitCubeQuad.display();
                this.myScene.popMatrix();
            }
        }
    }


    display() {

        this.UnitCubeQuad.display();

        for (var i = 1; i < this.levels; ++i){
            this.myScene.pushMatrix();
            this.myScene.translate(0, -i, 0);
            this.drawLevel(i);
            this.myScene.popMatrix();
        }
    }
}