/**
 * MyLSPlant
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyLSPlant extends MyLSystem {
    constructor(scene) {
        super(scene);
        this.init();
        this.generate(
            "X",
            {
                "F": ["FF"],
                "X": ["F[-X][X]F[-X]+X",
                    "F[-X][x]+X",
                    "F[+X]-X",
                    "F[/X][X]F[\\X]+X",
                    "F[\X][X]/X",
                    "F[/X]\X",
                    "F[^X][X]F[&X]^X",
                    "F[^X]&X",
                    "F[&X]^X",
                ],
            },
            60.0,
            2,
            1
        );
    }
    initGrammar() {
        this.branch = new MyBranch(this.scene);
        this.leaf = new MyLeaf(this.scene);

        this.grammar = {
            "F": this.branch,
            "X": this.leaf
        };
    }
    enableNormalViz() {
        this.branch.enableNormalViz();
        this.leaf.enableNormalViz();
    }
    disableNormalViz() {
        this.branch.disableNormalViz();
        this.leaf.disableNormalViz();
    }
}
