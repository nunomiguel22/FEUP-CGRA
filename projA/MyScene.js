/**
* MyScene
* @constructor
*/
class MyScene extends CGFscene {
    constructor() {
        super();
    }
    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();

        //Background color
        this.displayTex = true;
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);
        this.enableTextures(this.displayTex);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.ground = new MyGround(this, 50);
        this.cubemap = new MyCubeMap(this);
        this.voxelhill = new MyVoxelHill(this, 3);
        this.house = new MyHouse(this);
        this.treeRow1 = new MyTreeRowPatch(this, 4, 4, 0.5, 3, 2, 2, 1.5, 0.2);
        this.treeRow2 = new MyTreeRowPatch(this, 4, 4, 0.5, 3, 2, 2, 1.5, 0.2);
        this.treeRow3 = new MyTreeRowPatch(this, 4, 4, 0.5, 3, 2, 2, 1.5, 0.2);
        this.treeGroup = new MyTreeGroupPatch(this, 6, 4, 0.5, 3, 2, 2.5, 1.5, 0.2);

        //Objects connected to MyInterface
        this.displayAxis = false;
        this.displayNormals = false;
        this.scaleFactor = 1;
        this.ambLight = 0.25;
        this.l0intensity = 1;
        this.mainLight = [this.lights[2], this.lights[3]];
        this.mainLightIds = { 'Night': 2, 'Day': 3};
    }
    initLights() {
        this.selectedTod = 2;
        this.setGlobalAmbientLight(this.ambLight, this.ambLight, this.ambLight, 1);

        //Test
        this.lights[0].setPosition(2, 5, 3, 1);
        this.lights[0].setDiffuse(this.l0intensity + 0.2, this.l0intensity, this.l0intensity, 1.0);
        this.lights[0].setSpecular(this.l0intensity, this.l0intensity, this.l0intensity, 1.0);
        this.lights[0].setConstantAttenuation(0.1);
        this.lights[0].update();
        //House Lantern
        this.lights[1].setPosition(0, 3, 2, 1);
        this.lights[1].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[1].setSpecular(0.7, 0.7, 0.7, 1.0);
        this.lights[1].setConstantAttenuation(1);
        this.lights[1].enable();
        this.lights[1].setVisible(false);
        this.lights[1].update();
        //Night Light
        this.lights[2].setPosition(0, 10, 0, 1);
        this.lights[2].setDiffuse(0.1, 0.1, 0.4, 1.0);
        this.lights[2].setSpecular(0.1, 0.1, 0.4, 1.0);
        this.lights[2].setConstantAttenuation(0.7);
        this.lights[2].setVisible(false);
        this.lights[2].update();
        //Day Light
        this.lights[3].setPosition(0, 10, 0, 1);
        this.lights[3].setDiffuse(0.7, 0.4, 0.4, 1.0);
        this.lights[3].setSpecular(0.7, 0.4, 0.4, 1.0);
        this.lights[3].setConstantAttenuation(0.1);
        this.lights[3].setVisible(false);
        this.lights[3].update();

        this.lights[this.selectedTod].enable();
    }

    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(35, 35, 35), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    updateLights(){
        for (var i = 0; i < this.lights.length; ++i)
            this.lights[i].update();
    }

    display() {
        // ---- BEGIN Background, camera and axis setup

        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

        // Lights: 1 - Lantern, 2 - Night, 3 - Day 
        this.lights[2].disable();
        this.lights[3].disable();
        this.lights[this.selectedTod].enable();
        this.updateLights();
        this.setGlobalAmbientLight(this.ambLight, this.ambLight, this.ambLight, 1);

        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();

        this.enableTextures(this.displayTex);

        // Draw axis
        if (this.displayAxis)
            this.axis.display();

        //Apply default appearance
        this.setDefaultAppearance();
        this.scale(this.scaleFactor, this.scaleFactor, this.scaleFactor);
        // ---- BEGIN Primitive drawing section

        //Cubemap
        this.cubemap.swapTimeOfDay(this.selectedTod);
        this.cubemap.display();
        
        //Trees
        this.pushMatrix();
        this.translate(-15, 0, 20);
        this.treeRow1.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(-20, 0, 15);
        this.rotate(Math.PI/2, 0, 1, 0);
        this.treeRow2.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(-10, 0, -20);
        this.treeRow3.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(10, 0, -10);
        this.treeGroup.display();
        this.popMatrix();
        
        //Ground
        this.ground.display();

        //Voxell Hills
        this.pushMatrix();
        this.voxelhill.setLevels(3);
        this.translate(10, 2.5, 10);
        this.voxelhill.display();
        this.popMatrix();

        this.pushMatrix();
        this.voxelhill.setLevels(6);
        this.translate(-10, 5.5, -10);
        this.voxelhill.display();
        this.popMatrix();
        
        //House
        this.pushMatrix();
        this.translate(0, 3, 0);
        this.scale(3, 3, 3);
        this.house.display();
        this.popMatrix();

        //All Normals
        if (this.displayNormals){
            this.ground.enableNormalViz();
            this.house.enableNormalViz();
            this.treeGroup.enableNormalViz();
            this.treeRow1.enableNormalViz();
            this.treeRow2.enableNormalViz();
            this.treeRow3.enableNormalViz();
            this.voxelhill.enableNormalViz();
        }
        else {
            this.ground.disableNormalViz();
            this.house.disableNormalViz();
            this.treeGroup.disableNormalViz();
            this.treeRow1.disableNormalViz();
            this.treeRow2.disableNormalViz();
            this.treeRow3.disableNormalViz();
            this.voxelhill.disableNormalViz();
        }
        // ---- END Primitive drawing section
    }
}