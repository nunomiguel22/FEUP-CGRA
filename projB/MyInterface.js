/**
* MyInterface
* @constructor
*/
class MyInterface extends CGFinterface {
    constructor() {
        super();
    }

    init(application) {
        // call CGFinterface init
        super.init(application);
        // init GUI. For more information on the methods, check:
        // http://workshop.chromeexperiments.com/examples/gui
        this.gui = new dat.GUI();

        var obj = this;
        var settingsFolder = this.gui.addFolder("Settings");
        settingsFolder.add(this.scene, 'framerate', 30, 144).name('Framerate');
        settingsFolder.add(this.scene, 'ambLight', 0.1, 1.0).name('Ambient Light');
        settingsFolder.add(this.scene, 'scaleFactor', 0.1, 10.0).name('Scale');
        settingsFolder.add(this.scene, 'displayTex').name('Display Textures');
        settingsFolder.add(this.scene, 'displayAxis').name('Display Axis');
        settingsFolder.add(this.scene, 'displayNormals').name("Display normals");

        var lightFolder = this.gui.addFolder('Light Position');
        lightFolder.add(this.scene.lights[0].position, '0', -50.0, 50.0).name("X Position");
        lightFolder.add(this.scene.lights[0].position, '1', -50.0, 50.0).name("Y Position");
        lightFolder.add(this.scene.lights[0].position, '2', -50.0, 50.0).name("Z Position");

        var birdFolder = this.gui.addFolder("Bird");
        birdFolder.add(this.scene, 'birdSpeedFactor', 0.1, 3.0).name('Bird Speed');
        birdFolder.add(this.scene, 'birdScaleFactor', 0.1, 3.0).name('Bird Scale');

        this.initKeys();

        return true;
    }

    initKeys() {
        // create reference from the scene to the GUI
        this.scene.gui = this;
        // disable the processKeyboard function
        this.processKeyboard = function () { };
        // create a named array to store which keys are being pressed
        this.activeKeys = {};
    }
    processKeyDown(event) {
        // called when a key is pressed down
        // mark it as active in the array
        this.activeKeys[event.code] = true;
    };
    processKeyUp(event) {
        // called when a key is released, mark it as inactive in the array
        this.activeKeys[event.code] = false;
    };
    isKeyPressed(keyCode) {
        // returns true if a key is marked as pressed, false otherwise
        return this.activeKeys[keyCode] || false;
    }
}
