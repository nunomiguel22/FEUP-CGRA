class MyTreeGroupPatch extends CGFobject {
    randomizeParameter(parameter, amplitude) {
        var delta = 2.0 * amplitude;
        return parameter - amplitude + delta * Math.random();
    }
    constructor( scene, avgDistance,
        trunkHeight, trunkRadius, trunkTexture,
        treeTopHeight, treeTopRadius, treeTopTexture,
        distanceAmplitude, heightAmplitude, radiusAmplitude
    ) {
        super(scene);

        this.avgDistance = avgDistance;
        this.distanceAmplitude = distanceAmplitude;

        this.trees = [];
        var rdm = this.randomizeParameter;

        for (var i = 0; i < 9; i++) {
            var tree = new MyTree(
                scene,
                rdm(trunkHeight, heightAmplitude),
                rdm(trunkRadius, radiusAmplitude),
                rdm(treeTopHeight, heightAmplitude),
                rdm(treeTopRadius, radiusAmplitude),
                trunkTexture,
                treeTopTexture
            )
            this.trees.push(tree);
        }
    }

    display() {
        var rdm = this.randomizeParameter;
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                this.scene.push();
                this.scene.translate(
                    rdm(i * this.avgDistance, this.distanceAmplitude),
                    0,
                    rdm(j * this.avgDistance, this.distanceAmplitude)
                );
                this.trees[i + 3*j].display();
                this.scene.pop();
            }
        }
    }

    enableNormalViz() {
        for (var i = 0; i < 9; i++)
            this.trees[i].enableNormalViz();
    }

    disableNormalViz() {
        for (var i = 0; i < 9; i++)
            this.trees[i].disableNormalViz();
    }

}