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
    this.setUpdatePeriod(50);

    //Initialize scene objects
    this.axis = new CGFaxis(this);
    this.terrain = new MyTerrain(this);
    this.house = new MyHouse(this);
    this.cubeMap = new MyCubeMap(this);
    this.bird = new MyBird(this, 0, -2, 2, -10);

    //Objects connected to MyInterface
    this.displayAxis = true;
    this.displayNormals = false;
    this.scaleFactor = 1;
    this.ambLight = 0.3;
  }
  initLights() {
    this.lights[0].setPosition(15, 2, 5, 1);
    this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
    this.lights[0].enable();
    this.lights[0].update();
  }
  initCameras() {
    this.camera = new CGFcamera(
      0.4,
      0.1,
      500,
      vec3.fromValues(45, 45, 45),
      vec3.fromValues(0, 0, 0)
    );
  }
  setDefaultAppearance() {
    this.setAmbient(0.2, 0.4, 0.8, 1.0);
    this.setDiffuse(0.2, 0.4, 0.8, 1.0);
    this.setSpecular(0.2, 0.4, 0.8, 1.0);
    this.setShininess(10.0);
  }
  update(t) {
    this.checkKeys();
    this.bird.update();
  }
  checkKeys() {
    var text = "Keys pressed: ";
    var keysPressed = false;
    // Check for key codes e.g. in ​https://keycode.info/
    if (this.gui.isKeyPressed("KeyW")) {
      text += " W ";
      keysPressed = true;
      this.bird.accelarate(0.3);
    }
    if (this.gui.isKeyPressed("KeyS")) {
      text += " S ";
      keysPressed = true;
      this.bird.accelarate(-0.3);
    }
    if (this.gui.isKeyPressed("KeyA")) {
      text += " S ";
      keysPressed = true;
      this.bird.turn(Math.PI / 8);
    }
    if (this.gui.isKeyPressed("KeyD")) {
      text += " S ";
      keysPressed = true;
      this.bird.turn(-Math.PI / 8);
    }
    if (this.gui.isKeyPressed("KeyR")) {
      text += " S ";
      keysPressed = true;
      this.bird.reset();
    }
    if (keysPressed) console.log(text);
  }

  display() {
    // ---- BEGIN Background, camera and axis setup
    // Clear image and depth buffer everytime we update the scene
    this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

    this.setGlobalAmbientLight(this.ambLight, this.ambLight, this.ambLight, 1);
    // Initialize Model-View matrix as identity (no transformation
    this.updateProjectionMatrix();
    this.loadIdentity();
    // Apply transformations corresponding to the camera position relative to the origin
    this.applyViewMatrix();
    this.enableTextures(this.displayTex);
    // Draw axis
    if (this.displayAxis) this.axis.display();

    //Apply default appearance
    this.setDefaultAppearance();
    this.scale(this.scaleFactor, this.scaleFactor, this.scaleFactor);

    // ---- BEGIN Primitive drawing section

    this.pushMatrix();
    this.terrain.display();
    this.popMatrix();

    this.pushMatrix();
    this.translate(2, 6, 2);
    this.bird.display();
    this.popMatrix();

    this.pushMatrix();
    this.translate(15, 3, -2);
    this.house.display();
    this.popMatrix();

    this.pushMatrix();
    this.cubeMap.display();
    this.popMatrix();

    //All Normals
    if (this.displayNormals) {
      this.terrain.enableNormalViz();
      this.house.enableNormalViz();
      this.bird.enableNormalViz();
    } else {
      this.terrain.disableNormalViz();
      this.house.disableNormalViz();
      this.bird.disableNormalViz();
    }

    // ---- END Primitive drawing section
  }
}
