/**
 * MyTreeGroupPatch
 * @constructor
 * @param scene - Reference to MyScene object
 * @param avgDistance - Reference to MyScene object
 * @param trunkHeight - Height of tree trunk
 * @param trunkRadius - Radius of tree trunk
 * @param treeTopHeight - Height of tree top
 * @param treeTopRadius - Radius of tree top
 * @param distanceAmplitude - 
 * @param heightAmplitude - 
 * @param radiusAmplitude - 
 */

class MyTreeGroupPatch extends CGFobject {
    randomizeParameter(parameter, amplitude) {
        var delta = 2.0 * amplitude;
        return parameter - amplitude + delta * Math.random();
    }
    constructor( scene, avgDistance,
        trunkHeight, trunkRadius, 
        treeTopHeight, treeTopRadius,
        distanceAmplitude, heightAmplitude, radiusAmplitude
    ) {
        super(scene);

        this.avgDistance = avgDistance;
        this.distanceAmplitude = distanceAmplitude;

        this.trees = [];
        this.treepos = [];
        var rdm = this.randomizeParameter;

        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) { {
                var tree = new MyTree(
                   scene,
                   rdm(trunkHeight, heightAmplitude),
                   rdm(trunkRadius, radiusAmplitude),
                   rdm(treeTopHeight, heightAmplitude),
                   rdm(treeTopRadius, radiusAmplitude),
               )
                this.trees.push(tree);
                this.treepos.push(rdm(i * this.avgDistance, this.distanceAmplitude), 
                rdm(j * this.avgDistance, this.distanceAmplitude));
           }
        }
    }
}

    display() {

        for (var i = 0; i < this.trees.length; i++) {
            this.scene.pushMatrix();
            this.scene.translate(this.treepos[i * 2], 0, this.treepos[i * 2 + 1]);
            this.trees[i].display();
            this.scene.popMatrix();
            
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