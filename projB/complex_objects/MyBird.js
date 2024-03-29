/**
 * MyBird
 * @constructor
 * @param scene - Reference to MyScene object
 * @param angle - y axis rotation in radians
 * @param x - float with x coordinate
 * @param y - float with y coordinate
 * @param z - float with z coordinate
 */
class MyBird extends CGFobject {

    constructor(scene, angle, x, y, z) {
        super(scene);
        this.originalX = x;
        this.originalY = y;
        this.originalZ = z;
        this.speedFactor = 1;
        this.scaleFactor = 1;
        this.BirdStates = {
            normal: 0,
            ascending: 1,
            descending: 2,
        }
        this.reset();
        this.initComponents();
        this.initMaterials();
        this.angle = angle;
        this.wobbleRate = 2 * Math.PI / scene.framerate;
        this.wobbleCoeficient = 0;
        this.previousTick = 0;
        this.hitRadius = 2;
        this.treeBranch = null;
    }

    initComponents() {
        this.cube = new MyUnitCubeQuad(this.scene);
        this.sphere = new MySphere(this.scene, 0.5, 36, 18);
        this.cone = new MyCone(this.scene, 4, 3, 5);
        this.quad = new MyQuad(this.scene);
        this.leftWing = new MyBirdWing(this.scene);
        this.rightWing = new MyBirdWing(this.scene);
        this.rightWing.invertNormals();
    }

    initMaterials() {
        this.headMaterial = new CGFappearance(this.scene);
        this.headMaterial.setAmbient(0, 0, 0, 1);
        this.headMaterial.setDiffuse(0.6, 0.5, 0.5, 1);
        this.headMaterial.setSpecular(0.1, 0.05, 0.05, 1);
        this.headMaterial.setShininess(10.0);

        this.noseMaterial = new CGFappearance(this.scene);
        this.noseMaterial.setAmbient(0, 0, 0, 1);
        this.noseMaterial.setDiffuse(0.7, 0.7, 0.0, 1);
        this.noseMaterial.setSpecular(0.2, 0.2, 0.0, 1);
        this.noseMaterial.setShininess(10.0);

        this.eyeMaterial = new CGFappearance(this.scene);
        this.eyeMaterial.setAmbient(0, 0, 0, 1);
        this.eyeMaterial.setDiffuse(0.0, 0.2, 0.7, 1);
        this.eyeMaterial.setSpecular(0.0, 0.1, 0.3, 1);
        this.eyeMaterial.setShininess(10.0);

        this.bodyMaterial = new CGFappearance(this.scene);
        this.bodyMaterial.setAmbient(0, 0, 0, 1);
        this.bodyMaterial.setDiffuse(0.7, 0.6, 0.6, 1);
        this.bodyMaterial.setSpecular(0.2, 0.1, 0.1, 1);
        this.bodyMaterial.setShininess(10.0);

        this.wingMaterial = new CGFappearance(this.scene);
        this.wingMaterial.setAmbient(0, 0, 0, 1);
        this.wingMaterial.setDiffuse(0.7, 0.6, 0.6, 1);
        this.wingMaterial.setSpecular(0.3, 0.1, 0.1, 1);
        this.wingMaterial.setShininess(10.0);
    }

    display() {

        this.scene.pushMatrix();
        this.scene.translate(this.x, this.y, this.z);
        this.scene.scale(this.scaleFactor, this.scaleFactor, this.scaleFactor);
        this.scene.rotate(this.angle, 0, 1, 0);
        this.displayHead();
        this.displayLeftEye();
        this.displayRightEye();
        this.displayBody();
        this.displayNose();
        this.displayLeftWing();
        this.displayRightWing();
        this.displayTreeBranch();
        this.scene.popMatrix();
    }

    displayHead() {
        this.headMaterial.apply();
        this.scene.pushMatrix();
        this.sphere.display();
        this.scene.popMatrix();
    }

    displayNose() {
        this.noseMaterial.apply();
        this.scene.pushMatrix();
        this.scene.translate(0, 0, 0.4);
        this.scene.scale(0.2, 0.2, 0.3);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.cone.display();
        this.scene.popMatrix();
    }

    displayRightEye() {
        this.cube.setMaterial(this.eyeMaterial);
        this.scene.pushMatrix();
        this.scene.translate(0.2, 0.3, 0.34);
        this.scene.scale(0.1, 0.1, 0.1);
        this.cube.display();
        this.scene.popMatrix();
    }

    displayLeftEye() {
        this.cube.setMaterial(this.eyeMaterial);
        this.scene.pushMatrix();
        this.scene.translate(-0.2, 0.3, 0.34);
        this.scene.scale(0.1, 0.1, 0.1);
        this.cube.display();
        this.scene.popMatrix();
    }

    displayBody() {
        this.cube.setMaterial(this.bodyMaterial);
        this.scene.pushMatrix();
        this.scene.translate(0, -0.5, -0.7);
        this.scene.scale(1, 0.7, 1);
        this.cube.display();
        this.scene.popMatrix();
    }

    displayLeftWing() {
        this.wingMaterial.apply();
        this.scene.pushMatrix();
        this.scene.translate(0.4, -0.4, -1.05);
        this.scene.scale(0.75, 0.75, 0.75);
        this.scene.rotate(Math.PI / 2.0, 1, 0, 0);
        this.scene.rotate(Math.cos(this.wingFlapFactor) * this.wingAmplitude + this.wingAddedAngle, 0, 1, 0);
        this.leftWing.display();
        this.scene.popMatrix();
    }

    displayRightWing() {
        this.wingMaterial.apply();
        this.scene.pushMatrix();
        this.scene.translate(-0.4, -0.4, -1.05);
        this.scene.scale(-0.75, 0.75, 0.75);
        this.scene.rotate(Math.PI / 2.0, 1, 0, 0);
        this.scene.rotate(Math.cos(this.wingFlapFactor) * this.wingAmplitude + this.wingAddedAngle, 0, 1, 0);
        this.rightWing.display();
        this.scene.popMatrix();
    }

    displayTreeBranch() {
        if (this.treeBranch != null)
            this.treeBranch.display()
    }

    enableNormalViz() {
        this.cube.enableNormalViz();
        this.cone.enableNormalViz();
        this.sphere.enableNormalViz();
        this.leftWing.enableNormalViz();
        this.rightWing.enableNormalViz();
    }

    disableNormalViz() {
        this.cube.disableNormalViz();
        this.cone.disableNormalViz();
        this.sphere.disableNormalViz();
        this.leftWing.disableNormalViz();
        this.rightWing.disableNormalViz();
    }
    addBranch(branch) {
        this.treeBranch = branch;
        this.treeBranch.x = 0;
        this.treeBranch.y = -1;
        this.treeBranch.z = -2;
        this.treeBranch.yAngle = 0;
    }
    removeBranch() { this.treeBranch = null; }

    startDescent() { this.state = this.BirdStates.descending; }

    update(t) {
        if (t - this.previousTick >= 17) { //Around 60 times a second
            this.x += this.speed * Math.sin(this.angle);
            this.z += this.speed * Math.cos(this.angle);

            switch (this.state) {
                case this.BirdStates.ascending: {
                    if (this.y >= 5)
                        this.state = this.BirdStates.normal;
                    else this.y += 0.2;
                    break;
                };
                case this.BirdStates.descending: {
                    if (this.y <= -2) {
                        this.state = this.BirdStates.ascending;
                        this.y += 0.2;
                        this.scene.checkCollision();
                    }
                    else this.y -= 0.2;
                    break;
                }
                case this.BirdStates.normal: {
                    this.wobbleCoeficient += this.wobbleRate;
                    this.wobbleCoeficient %= 2 * Math.PI;
                    this.y += 0.05 * Math.sin(this.wobbleCoeficient);
                    break;
                }
            }

            this.wingFlapFactor += (this.speed + 0.5) * this.wingFlapMultiplier;
            this.wingFlapFactor %= 2 * Math.PI;
            this.leftWing.setAngle(this.wingFlapFactor);
            this.rightWing.setAngle(this.wingFlapFactor);
            this.previousTick = t;
        }
    }
    setSpeedFactor(speedFactor) { this.speedFactor = speedFactor; }
    setScaleFactor(scaleFactor) { this.scaleFactor = scaleFactor; }

    turn(v) { this.angle += v * this.speedFactor; }
    accelerate(v) {
        var accel = v * this.speedFactor;
        this.speed += accel;
        this.speed = clamp(this.speed, -Math.abs(accel), Math.abs(accel));
    }

    reset() {
        this.x = this.originalX;
        this.y = this.originalY;
        this.z = this.originalZ;
        this.treeBranch = null;
        this.state = this.BirdStates.normal;
        this.speed = 0;
        this.angle = 0;
        this.wingAddedAngle = 0;
        this.wingAmplitude = Math.PI * 7 / 48;
        this.wingFlapFactor = 0;
        this.wingFlapMultiplier = Math.PI / 6;
    }
}
