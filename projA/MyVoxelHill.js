/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyVoxelHill extends CGFobject {

	constructor(scene, nLevels) {
        super(scene);
        this.myScene = scene;
        this.levels = nLevels;
        this.initComponents();
        //this.initTextures();
    }
    
    initComponents() {
        this.UnitCubeQuad = new MyUnitCubeQuad(this.myScene);
    }

    initTextures(){
      
    }

    drawLevel(level){
        
        var size = level * 2 + 1;

        for (var i = 0; i < size; ++i){
            this.myScene.pushMatrix();
            this.myScene.translate(- i + level,0, level);
            this.UnitCubeQuad.display();
            this.myScene.popMatrix();

            this.myScene.pushMatrix();
            this.myScene.translate(-i + level,0, -level);
            this.UnitCubeQuad.display();
            this.myScene.popMatrix();

            this.myScene.pushMatrix();
            this.myScene.translate(-level,0, -i + level);
            this.UnitCubeQuad.display();
            this.myScene.popMatrix();

            this.myScene.pushMatrix();
            this.myScene.translate(level,0, -i + level);
            this.UnitCubeQuad.display();
            this.myScene.popMatrix();
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