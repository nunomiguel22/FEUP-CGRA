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
        this.grammar = {
            "F": new MyBranch(this.scene),
            "X": new MyLeaf(this.scene)
        };
    }
}
