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
        this.ground = new MyGround(this, 40);
        this.cubemap = new MyCubeMap(this);
        this.voxelhill = new MyVoxelHill(this, 3);
        this.house = new MyHouse(this);

        this.tempMaterial = new CGFappearance(this);
        this.tempMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.tempMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.tempMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.tempMaterial.setShininess(10.0);
        this.tempMaterial.loadTexture('images/house/roof.png');
        this.testTree = new MyTree(this, 4, 0.5, 2, 2, this.tempMaterial, this.tempMaterial); 

        //Objects connected to MyInterface
        this.displayAxis = true;
        this.displayCB = true;
        this.displayVX = true;
        this.displayHouse = true;
        this.scaleFactor = 0.35;
        this.ambLight = 0.6;
        this.l0intensity = 1;
    }
    initLights() {
        this.setGlobalAmbientLight(this.ambLight, this.ambLight, this.ambLight, 1);

        //Test
        this.lights[0].setPosition(2, 5, 3, 1);
        this.lights[0].setDiffuse(this.l0intensity + 0.2, this.l0intensity, this.l0intensity, 1.0);
        this.lights[0].setSpecular(this.l0intensity, this.l0intensity, this.l0intensity, 1.0);
        this.lights[0].setConstantAttenuation(0.1);
        //this.lights[0].enable();
        //this.lights[0].setVisible(true);
        this.lights[0].update();

        //House Lantern
        this.lights[1].setPosition(0, 1.2, 0.8, 1);
        this.lights[1].setDiffuse(0.7, 0.7, 0.7, 1.0);
        this.lights[1].setSpecular(0.7, 0.7, 0.7, 1.0);
        this.lights[1].setConstantAttenuation(0.7);
        this.lights[1].enable();
        this.lights[1].setVisible(false);
        this.lights[1].update();

        //Night Light
        this.lights[2].setPosition(0, 10, 0, 1);
        this.lights[2].setDiffuse(0.1, 0.1, 0.3, 1.0);
        this.lights[2].setSpecular(0.1, 0.1, 0.3, 1.0);
        this.lights[2].setConstantAttenuation(0.7);
        this.lights[2].enable();
        this.lights[2].setVisible(false);
        this.lights[2].update();

        //Day Light
        this.lights[3].setPosition(0, 10, 0, 1);
        this.lights[3].setDiffuse(0.7, 0.4, 0.4, 1.0);
        this.lights[3].setSpecular(0.7, 0.4, 0.4, 1.0);
        this.lights[3].setConstantAttenuation(0.1);
        //this.lights[3].enable();
        this.lights[3].setVisible(false);
        this.lights[3].update();
    }

    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(15, 15, 15), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    display() {
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();

        // Lights
        this.lights[0].setDiffuse(this.l0intensity + 0.2, this.l0intensity, this.l0intensity, 1.0);
        this.lights[0].setSpecular(this.l0intensity, this.l0intensity, this.l0intensity, 1.0);
        this.lights[0].update();
        this.lights[1].update();
        this.lights[2].update();
        this.lights[3].update();
        this.setGlobalAmbientLight(this.ambLight, this.ambLight, this.ambLight, 1);

        this.scale(this.scaleFactor, this.scaleFactor, this.scaleFactor);
        this.enableTextures(this.displayTex);

        // Draw axis
        if (this.displayAxis)
            this.axis.display();

        //Apply default appearance
        this.setDefaultAppearance();

        // ---- BEGIN Primitive drawing section

        //Cubemap
        if (this.displayCB)
            this.cubemap.display();

        this.ground.display();

        this.pushMatrix();
        this.translate(5, 0, -5);
        this.testTree.display();
        this.popMatrix();

        //Voxell Hill
        if (this.displayVX){
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
        }

        //House
        if (this.displayHouse){
            this.pushMatrix();
            this.translate(0, 3, 0);
            this.scale(3, 3, 3);
            this.house.display();
            this.popMatrix();
        }
        // ---- END Primitive drawing section
    }
}