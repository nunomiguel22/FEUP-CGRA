/**
 * MyHouse
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyBird extends CGFobject {

    constructor(scene, angle, x, y, z) {
        super(scene);
        this.speed = 0;
        this.angle = angle;
        this.originalX = x;
        this.originalY = y;
        this.originalZ = z;
        this.x = x;
        this.y = y;
        this.z = z;
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
<<<<<<< HEAD
        this.displayHead();
        this.displayLeftEye();
        this.displayRightEye();
        this.displayBody();
        this.displayNose();
        this.displayLeftWing();
        this.displayRightWing();
    }

    displayHead() {
=======

        this.scene.pushMatrix();
        this.scene.translate(this.x, this.y, this.z);
        this.scene.rotate(this.angle, 0, 1, 0);

        /** Head **/
        this.scene.pushMatrix();
>>>>>>> 99bb1c23bf87b73d5f1c9a723d0420aa5983a78a
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
<<<<<<< HEAD
    }
=======

        this.scene.popMatrix();
>>>>>>> 99bb1c23bf87b73d5f1c9a723d0420aa5983a78a

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
        this.cube.enableNormalViz();
        this.cone.enableNormalViz();
        this.sphere.enableNormalViz();
    }

    disableNormalViz() {
        this.cube.disableNormalViz();
        this.cone.disableNormalViz();
        this.sphere.disableNormalViz();
    }
    update() {
        this.x += this.speed * Math.sin(this.angle);
        this.z += this.speed * Math.cos(this.angle);
    }
    turn(v) {
        this.angle += v;

    }
    accelarate(v) {
        this.speed += v;
    }
    reset() {
        this.x = this.originalX;
        this.y = this.originalY;
        this.z = this.originalZ;
        this.speed = 0;
        this.angle = 0;
    }

}