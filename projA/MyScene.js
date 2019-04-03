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
        this.ground = new MyGround(this, 35);
        this.cubemap = new MyCubeMap(this);
        this.voxelhill = new MyVoxelHill(this, 3);
        this.house = new MyHouse(this);

        //Objects connected to MyInterface
        this.displayAxis = true;
        this.displayCB = true;
        this.displayVX = true;
        this.displayHouse = true;
        this.scaleFactor = 0.35;
        this.ambLight = 0.6;
    }
    initLights() {
        this.setGlobalAmbientLight(this.ambLight, this.ambLight, this.ambLight, 1);

        this.lights[0].setPosition(2, 5, 3, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].setSpecular(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].setVisible(true);
        this.lights[0].update();
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
        this.lights[0].update();
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
        
        //Voxell Hill
        if (this.displayVX){
            this.pushMatrix();
            this.translate(10, 2.5, 10);
            this.voxelhill.display();
            this.popMatrix();

            this.pushMatrix();
            this.translate(-10, 2.5, -10);
            this.voxelhill.display();
            this.popMatrix();
        }

        //House
        if (this.displayHouse){
            this.pushMatrix();
            this.translate(0, 2, 0);
            this.scale(2, 2, 2);
            this.house.display();
            this.popMatrix();
        }
        // ---- END Primitive drawing section
    }
}