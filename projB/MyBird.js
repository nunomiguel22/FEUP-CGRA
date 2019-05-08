/**
 * MyHouse
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyBird extends CGFobject {

	constructor(scene) {
        super(scene);
        this.initComponents();
    }
    
    initComponents() {
        this.cube = new MyUnitCubeQuad(this.scene);
        this.sphere = new MySphere(this.scene, 1, 18, 9);
    }


    display() {

        this.scene.pushMatrix();
        this.sphere.display();
        //this.cube.display();
        this.scene.popMatrix();


    }

    enableNormalViz() {

    }

    disableNormalViz() {

    }
}