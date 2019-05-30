/**
 * MyLSLightning
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyLightning extends MyLSystem {
    constructor(scene) {
        super(scene);
        this.init();
        this.generate(
            "X",
            {
                "F": ["FF"],
                "X": ["F[-X][X]F[-X]+FX"],
            },
            25.0,
            3,
            0.5
        );
    }
    initGrammar() {
        this.rect = new MyLightningRay(this.scene, 0.3, 1.5);

        this.grammar = {
            "F": this.rect,
            "X": this.rect
        };
    }
    enableNormalViz() { this.rect.enableNormalViz(); }
    disableNormalViz() { this.rect.disableNormalViz(); }
}
