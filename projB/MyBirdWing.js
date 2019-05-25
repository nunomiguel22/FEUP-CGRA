class MyBirdWing extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initComponents();
    }

    initComponents() {
        this.body = new MySquare(this.scene);
        this.tip = new MyTriangle(this.scene);
        this.startAngle = - Math.PI / 6;
        this.amplitude = Math.PI / 6;
        this.angle = 0;
    }

    displayBody() {
        this.scene.pushMatrix();
        this.scene.translate(0.5, 0.5, 0);
        this.body.display();
        this.scene.popMatrix();
    }

    displayTip() {
        this.scene.pushMatrix();
        this.scene.translate(1, 0.5, 0);
        this.scene.rotate(this.angle + this.startAngle, 0, 1, 0);
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
        this.tip.enableNormalViz();
    }

    disableNormalViz() {
        this.body.disableNormalViz();
        this.tip.disableNormalViz();
    }

    updateTexCoords(bodyCoords, tipCoords) {
        this.body.updateTexCoords(bodyCoords);
        this.tip.updateTexCoords(tipCoords);
    }

    setAngle(factor) {
        this.angle = this.amplitude * Math.cos(factor);
    }
}
