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
        this.sphere = new MySphere(this.scene, 0.5, 36, 18);
        this.cone = new MyCone(this.scene, 4, 3, 5);
        this.quad = new MyQuad(this.scene);
    }

    display() {
        /* 
                this.scene.pushMatrix();
                this.cube.display();
                this.scene.popMatrix();
         */
        /** Head **/
        this.scene.pushMatrix();
        this.sphere.display();
        this.scene.popMatrix();
        /** Nose **/
        this.scene.pushMatrix();
        this.scene.translate(0, 0, 0.4);
        this.scene.scale(0.2, 0.2, 0.3);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.cone.display();
        this.scene.popMatrix();
        /** Right Eye **/
        this.scene.pushMatrix();
        this.scene.translate(0.2, 0.3, 0.34);
        this.scene.scale(0.1, 0.1, 0.1);
        this.cube.display();
        this.scene.popMatrix();
        /** Left Eye **/
        this.scene.pushMatrix();
        this.scene.translate(-0.2, 0.3, 0.34);
        this.scene.scale(0.1, 0.1, 0.1);
        this.cube.display();
        this.scene.popMatrix();
        /**  Body  **/
        this.scene.pushMatrix();
        this.scene.translate(0, -0.5, -0.7);
        this.scene.scale(1, 0.7, 1);
        this.cube.display();
        this.scene.popMatrix();
        /**  Left Wing Square **/
        /* this.scene.pushMatrix();
         this.scene.translate(2, 2, 2);
         this.quad.display();
         this.scene.popMatrix();*/

    }

    enableNormalViz() {

    }

    disableNormalViz() {

    }
}