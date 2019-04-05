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
        
       //General
        this.gui.add(this.scene, 'ambLight', 0.1, 1.0).name('Ambient Light');
        this.gui.add(this.scene, 'scaleFactor', 0.1, 10.0).name('Scale');
        this.gui.add(this.scene, 'displayTex').name('Display Textures');
        this.gui.add(this.scene, 'selectedTod', this.scene.mainLightIds).name('Time of day');

         //Lights
        var f1 = this.gui.addFolder('Test Light ');
        f1.add(this.scene.lights[0], 'enabled').name("Enabled");
        f1.add(this.scene.lights[0].position, '0', -5.0, 5.0).name("X Position");
        f1.add(this.scene.lights[0].position, '1', -5.0, 5.0).name("Y Position");
        f1.add(this.scene.lights[0].position, '2', -5.0, 5.0).name("Z Position");
        f1.add(this.scene, 'l0intensity', 0.1, 1.0).name('Intensity');

        //Checkbox element in GUI
        this.gui.add(this.scene, 'displayAxis').name('Display Axis');
        this.gui.add(this.scene, 'displayVX').name('Display Hills');
        this.gui.add(this.scene, 'displayHouse').name('Display House');

        return true;
    }
}