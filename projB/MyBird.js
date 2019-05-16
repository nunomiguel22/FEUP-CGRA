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
        this.leftWing = new MyBirdWing(this.scene);
        this.rightWing = new MyBirdWing(this.scene);
    }

    display() {
        this.displayHead();
        this.displayLeftEye();
        this.displayRightEye();
        this.displayBody();
        this.displayNose();
        this.displayLeftWing();
        this.displayRightWing();
    }

    displayHead() {
        this.sphere.display();
    }

    displayNose() {
        this.scene.pushMatrix();
        this.scene.translate(0, 0, 0.4);
        this.scene.scale(0.2, 0.2, 0.3);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.cone.display();
        this.scene.popMatrix();
    }

    displayRightEye() {
        this.scene.pushMatrix();
        this.scene.translate(0.2, 0.3, 0.34);
        this.scene.scale(0.1, 0.1, 0.1);
        this.cube.display();
        this.scene.popMatrix();
    }

    displayLeftEye() {
        this.scene.pushMatrix();
        this.scene.translate(-0.2, 0.3, 0.34);
        this.scene.scale(0.1, 0.1, 0.1);
        this.cube.display();
        this.scene.popMatrix();
    }

    displayBody() {
        this.scene.pushMatrix();
        this.scene.translate(0, -0.5, -0.7);
        this.scene.scale(1, 0.7, 1);
        this.cube.display();
        this.scene.popMatrix();
    }

    displayLeftWing() {
        this.scene.pushMatrix();
        this.scene.translate(0.85, -0.5, -0.7);
        this.scene.scale(0.75, 0.75, 0.75);
        this.scene.rotate(Math.PI / 2.0, 1, 0, 0);
        this.leftWing.display();
        this.scene.popMatrix();
    }

    displayRightWing() {
        this.scene.pushMatrix();
        this.scene.scale(-1, 1, 1);
        this.scene.translate(0.85, -0.5, -0.7);
        this.scene.scale(0.75, 0.75, 0.75);
        this.scene.rotate(Math.PI / 2.0, 1, 0, 0);
        this.rightWing.display();
        this.scene.popMatrix();
    }

    enableNormalViz() {

    }

    disableNormalViz() {

    }
}