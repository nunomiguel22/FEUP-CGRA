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
        this.gui.add(this.scene, 'displayAxis').name('Display Axis');
        this.gui.add(this.scene, 'displayNormals').name("Display normals");
        var hillFolder = this.gui.addFolder('Voxel Hill');
        hillFolder.add(this.scene, 'smallHillLevel', 1, 8).name('Small Hill Size');
        hillFolder.add(this.scene, 'largeHillLevel', 1, 8).name('Large Hill Size');

        return true;
    }
}