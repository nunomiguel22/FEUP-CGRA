class MyBirdWing extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initComponents();
    }

    initComponents() {
        this.body = new MySquare(this.scene);
        this.tip = new MyTriangle(this.scene);
        this.angle = - Math.PI / 3.0;
    }

    displayBody() {
        this.scene.pushMatrix();
        this.body.display();
        this.scene.popMatrix();
    }

    displayTip() {
        this.scene.pushMatrix();
        this.scene.translate(0.5, 0, 0);
        this.scene.rotate(this.angle, 0, 1, 0);
        this.scene.translate(0.5, 0, 0);
        this.scene.scale(0.5, 0.5, 0.5);
        this.tip.display();
        this.scene.popMatrix();
    }

    display() {
        this.displayBody();
        this.displayTip();
    }

    enableNormalViz() {
        this.body.enableNormalViz();
        this.tip.enableNormalviz();
    }

    disableNormalViz() {
        this.body.disableNormalViz();
        this.tip.disableNormalViz();
    }

    updateTexCoords(bodyCoords, tipCoords) {
        this.body.updateTexCoords(bodyCoords);
        this.tip.updateTexCoords(tipCoords);
    }

    setAngle(angle) {
        this.angle = angle;
    }
}