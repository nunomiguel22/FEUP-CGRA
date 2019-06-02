/**
 * MyNest
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyNest extends CGFobject {

    constructor(scene, startingLevels, x, y, z) {
        super(scene);
        this.x = x;
        this.y = y;
        this.z = z;
        this.myScene = scene;
        this.startingLevels = startingLevels;
        this.levels = 0;
        this.levelBranches = 0;
        this.hitRadius = 4;
        this.initComponents();
    }
    initComponents() {
        this.treeBranches = [];
        //Initialize nest floor
        for (let i = 0; i < 4; ++i)
            this.treeBranches.push(new MyTreeBranch(this.scene, i * 0.35, 0, 0, 0, Math.PI / 2));
        //Initialize nest levels
        for (let i = 0; i < this.startingLevels; ++i)
            this.addBranchLevel(i);
        this.leaf = new MyLeaf(this.scene);
    }
    addLeftBranch(branch, y) {
        branch.x = -0.35;
        branch.y = y;
        branch.z = 0;
        branch.yAngle = 0;
        branch.zAngle = Math.PI / 2;
        this.treeBranches.push(branch);
    }
    addRightBranch(branch, y) {
        branch.x = 1.4;
        branch.y = y;
        branch.z = 0;
        branch.yAngle = 0;
        branch.zAngle = Math.PI / 2;
        this.treeBranches.push(branch);
    }
    addTopBranch(branch, y) {
        branch.x = -0.45;
        branch.y = y;
        branch.z = 2;
        branch.yAngle = Math.PI / 2;
        branch.zAngle = Math.PI / 2;
        this.treeBranches.push(branch);
    }
    addBottomBranch(branch, y) {
        branch.x = -0.45;
        branch.y = y;
        branch.z = 0;
        branch.yAngle = Math.PI / 2;
        branch.zAngle = Math.PI / 2;
        this.treeBranches.push(branch);
    }
    addBranchLevel(level) {
        ++this.levels;
        this.addLeftBranch(new MyTreeBranch(this.scene, 0, 0, 0, 0, 0), level * 0.3);
        this.addRightBranch(new MyTreeBranch(this.scene, 0, 0, 0, 0, 0), level * 0.3);
        this.addTopBranch(new MyTreeBranch(this.scene, 0, 0, 0, 0, 0), level * 0.3);
        this.addBottomBranch(new MyTreeBranch(this.scene, 0, 0, 0, 0, 0), level * 0.3);
    }

    addBranch(branch) {
        switch (++this.levelBranches) {
            case 1: {
                this.addLeftBranch(branch, this.levels * 0.3);
                break;
            }
            case 2: {
                this.addBottomBranch(branch, this.levels * 0.3);
                break;
            }
            case 3: {
                this.addRightBranch(branch, this.levels * 0.3);
                break;
            }
            case 4: {
                this.addTopBranch(branch, this.levels * 0.3);
                ++this.levels;
                this.levelBranches = 0;
                break;
            }
        }
    }

    displayLeafs() {
        this.scene.pushMatrix();
        this.scene.translate(0.7, 0.3, 0.3);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.leaf.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.1, -0.5, 0.5);
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.leaf.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(1, -0.4, 0.2);
        this.scene.rotate(Math.PI / 8, 0, 1, 1);
        this.leaf.display();
        this.scene.popMatrix();

    }

    display() {
        this.scene.pushMatrix();
        this.scene.translate(this.x, this.y, this.z);
        this.displayLeafs();
        for (let i = 0; i < this.treeBranches.length; ++i)
            this.treeBranches[i].display();
        this.scene.popMatrix();
    }

    enableNormalViz() {
        for (let i = 0; i < this.treeBranches.length; ++i)
            this.treeBranches[i].enableNormalViz();
    }

    disableNormalViz() {
        for (let i = 0; i < this.treeBranches.length; ++i)
            this.treeBranches[i].disableNormalViz();
    }
}
