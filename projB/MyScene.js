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
    //WebGL
    this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
    this.gl.clearDepth(100.0);
    this.gl.enable(this.gl.DEPTH_TEST);
    this.gl.enable(this.gl.CULL_FACE);
    this.gl.depthFunc(this.gl.LEQUAL);
    //Frame rate and time
    this.framerate = 60;
    this.setUpdatePeriod(1000 / this.framerate);
    //Initialize scene objects
    this.initComponents();
    //Objects connected to MyInterface
    this.initInterfaceObjects();
  }

  initInterfaceObjects() {
    this.birdScaleFactor = 1;
    this.birdSpeedFactor = 1;
    this.displayTex = true;
    this.displayAxis = false;
    this.displayNormals = false;
    this.scaleFactor = 1.0;
    this.ambLight = 0.7;
  }

  initComponents() {
    this.axis = new CGFaxis(this);
    this.terrain = new MyTerrain(this);
    this.house = new MyHouse(this);
    this.cubeMap = new MyCubeMap(this);
    this.bird = new MyBird(this, 0, -2, 5, -10);
    this.lightning = new MyLightning(this, 16, 20, -20);
    this.nest = new MyNest(this, 3, -5, 3.3, 3);
    //Trees
    this.LSTrees = [];
    for (let i = 0; i < 6; ++i)
      this.LSTrees[i] = new MyLSPlant(this);
    //Tree branches
    this.treeBranches = [];
    for (let i = 0; i < 5; ++i) {
      // X between 9 and 18
      let x = Math.random() * 9 + 9;
      //Y between -4.5 and 7
      let z = Math.random() * 11.5 - 4.5;
      //Angle between 0 and 2 * PI
      let angle = Math.random() * 2 * Math.PI;
      this.treeBranches.push(new MyTreeBranch(this, x, 3.6, z, angle, Math.PI / 2));
    }
  }

  initLights() {
    this.lights[0].setPosition(15, 15, 5, 1);
    this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
    this.lights[0].setSpecular(1.0, 1.0, 1.0, 1.0);
    this.lights[0].enable();
    this.lights[0].update();
  }

  initCameras() {
    this.camera = new CGFcamera(
      0.4,
      0.1,
      500,
      vec3.fromValues(20, 100, 120),
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
    this.checkKeys(t);
    this.bird.update(t);
    this.lightning.update(t);
  }

  checkKeys(t) {
    var text = "Keys pressed: ";
    var keysPressed = false;
    // Check for key codes e.g. in ​https://keycode.info/
    if (this.gui.isKeyPressed("KeyW")) {
      text += " W ";
      keysPressed = true;
      this.bird.accelerate(0.2);
    }
    if (this.gui.isKeyPressed("KeyS")) {
      text += " S ";
      keysPressed = true;
      this.bird.accelerate(-0.2);
    }
    if (this.gui.isKeyPressed("KeyA")) {
      text += " A ";
      keysPressed = true;
      this.bird.turn(Math.PI / 12);
    }
    if (this.gui.isKeyPressed("KeyD")) {
      text += " D ";
      keysPressed = true;
      this.bird.turn(-Math.PI / 12);
    }
    if (this.gui.isKeyPressed("KeyR")) {
      text += " R ";
      keysPressed = true;
      this.bird.reset();
    }
    if (this.gui.isKeyPressed("KeyL")) {
      text += " L ";
      keysPressed = true;
      this.lightning.startAnimation(t, 1000);
    }
    if (this.gui.isKeyPressed("KeyP")) {
      text += " P ";
      keysPressed = true;
      if (this.bird.state == this.bird.BirdStates.normal)
        this.bird.startDescent();
    }
    if (keysPressed) console.log(text);
  }

  checkCollision() {

    // Bird to branches on the ground
    if (this.bird.treeBranch == null) { // Check if bird is already has a branch
      for (let i = 0; i < this.treeBranches.length; ++i) {
        let xComp = Math.pow(this.bird.x - this.treeBranches[i].x, 2);
        let zComp = Math.pow(this.bird.z - this.treeBranches[i].z, 2);
        let distance = Math.sqrt(xComp + zComp);

        if (distance <= this.bird.hitRadius + this.treeBranches[i].hitRadius) {
          this.bird.addBranch(this.treeBranches[i]);
          this.treeBranches.splice(i, 1);
          break;
        }
      }
    }
    else {
      let xComp = Math.pow(this.bird.x - this.nest.x, 2);
      let zComp = Math.pow(this.bird.z - this.nest.z, 2);
      let distance = Math.sqrt(xComp + zComp);

      if (distance <= this.bird.hitRadius + this.nest.hitRadius) {
        this.nest.addBranch(this.bird.treeBranch);
        this.bird.removeBranch();
      }
    }
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
    this.setUpdatePeriod(1000 / this.framerate);
    this.lights[0].update();
    // Draw axis
    if (this.displayAxis) this.axis.display();

    //Apply default appearance
    this.setDefaultAppearance();
    this.scale(this.scaleFactor, this.scaleFactor, this.scaleFactor);

    // ---- BEGIN Primitive drawing section
    this.pushMatrix();
    this.cubeMap.display();
    this.popMatrix();

    this.pushMatrix();
    this.terrain.display();
    this.popMatrix();

    this.pushMatrix();
    this.translate(2, 6, 2);
    this.bird.setScaleFactor(this.birdScaleFactor);
    this.bird.setSpeedFactor(this.birdSpeedFactor);
    this.bird.display();
    this.popMatrix();

    this.pushMatrix();
    this.translate(15, 5.2, -7);
    this.scale(1.7, 1.7, 1.7);
    this.house.display();
    this.popMatrix();

    this.nest.display();


    this.pushMatrix();
    for (let i = 0; i < this.treeBranches.length; ++i)
      this.treeBranches[i].display();
    this.popMatrix();

    for (let i = 0; i < this.LSTrees.length; ++i) {
      this.pushMatrix();
      this.translate(-18 + i * 4, 4, 4 - i * 4);
      this.LSTrees[i].display();
      this.popMatrix();
    }

    if (this.lightning.isActive())
      this.lightning.display();

    //Display all normals
    if (this.displayNormals)
      this.enableNormalViz();
    else this.disableNormalViz();

    // ---- END Primitive drawing section
  }

  enableNormalViz() {
    this.terrain.enableNormalViz();
    this.house.enableNormalViz();
    this.bird.enableNormalViz();
    for (let i = 0; i < this.treeBranches.length; ++i)
      this.treeBranches[i].enableNormalViz();
    for (let i = 0; i < this.LSTrees.length; ++i)
      this.LSTrees[i].enableNormalViz();
    this.lightning.enableNormalViz();
  }
  disableNormalViz() {
    this.terrain.disableNormalViz();
    this.house.disableNormalViz();
    this.bird.disableNormalViz();
    for (let i = 0; i < this.treeBranches.length; ++i)
      this.treeBranches[i].disableNormalViz();
    for (let i = 0; i < this.LSTrees.length; ++i)
      this.LSTrees[i].disableNormalViz();
    this.lightning.disableNormalViz();
  }

}
