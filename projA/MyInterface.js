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
        
        //Checkbox element in GUI
        this.gui.add(this.scene, 'displayAxis').name('Display Axis');
        this.gui.add(this.scene, 'displayCB').name('Display Cubemap');
        this.gui.add(this.scene, 'displayVX').name('Display Hill');
        this.gui.add(this.scene, 'displayHouse').name('Display House');

        //Scale
        this.gui.add(this.scene, 'scaleFactor', 0.1, 10.0).name('Scale');

        return true;
    }
}