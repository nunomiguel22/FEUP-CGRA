/**
 * MyLightning
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
        this.initMaterials();
        this.startTime = 0;
        this.previousDraw = 0;
    }

    initGrammar() {
        this.rect = new MyQuad(this.scene);

        this.grammar = {
            "F": this.rect,
            "X": this.rect
        };
    }

    initMaterials() {
        this.rayMaterial = new CGFappearance(this.scene);
        this.rayMaterial.setAmbient(0.9, 0.9, 1.0, 1.0);
        this.rayMaterial.setDiffuse(0.0, 0.0, 0.0, 1.0);
        this.rayMaterial.setSpecular(0.9, 0.9, 1.0, 1.0);
        this.rayMaterial.setShininess(100.0);
    }
    startAnimation(t, animationDurationMs) {
        if (this.startTime == 0) {
            this.depth = 0;
            this.startTime = t;
            this.axiom = "X";
            this.animationTime = animationDurationMs;
            this.iterate();
        }
    }

    update(t) {
        if (this.startTime != 0) {
            var currentTime = t - this.startTime;
            if (currentTime >= this.animationTime) {
                this.startTime = 0;
                this.depth = this.axiom.length;
            }
            else this.depth = this.axiom.length / (this.animationTime / currentTime);
        }
    }

    display() {
        this.scene.pushMatrix();
        this.scene.scale(this.scale, this.scale, this.scale);

        // percorre a cadeia de caracteres
        for (let i = 0; i < this.depth; ++i) {

            // verifica se sao caracteres especiais
            switch (this.axiom[i]) {
                case "+":
                    // roda a esquerda
                    this.scene.rotate(this.angle, 0, 0, 1);
                    break;

                case "-":
                    // roda a direita
                    this.scene.rotate(-this.angle, 0, 0, 1);
                    break;

                case "\\":
                    // rotação em sentido positivo sobre o eixo dos XX
                    this.scene.rotate(this.angle, 1, 0, 0);
                    break;

                case "/":
                    // rotação em sentido negativo sobre o eixo dos XX;
                    this.scene.rotate(-this.angle, 1, 0, 0);
                    break;

                case "^":
                    // rotação em sentido positivo sobre o eixo dos YY
                    this.scene.rotate(this.angle, 0, 1, 0);
                    break;

                case "&":
                    // rotação em sentido negativo sobre o eixo dos YY;
                    this.scene.rotate(-this.angle, 0, 1, 0);
                    break;


                case "[":
                    // push
                    this.scene.pushMatrix();
                    break;

                case "]":
                    // pop
                    this.scene.popMatrix();
                    break;

                // processa primitiva definida na gramatica, se existir
                default:
                    var primitive = this.grammar[this.axiom[i]];

                    if (primitive) {
                        this.scene.pushMatrix();
                        this.scene.scale(0.4, 1.0, 3.0); //Scale Quad to rectangle
                        this.rayMaterial.apply();
                        primitive.display();
                        this.scene.popMatrix();
                        this.scene.translate(0, 1, 0);
                    }
                    break;
            }
        }
        this.scene.popMatrix();
    }

    enableNormalViz() { this.rect.enableNormalViz(); }
    disableNormalViz() { this.rect.disableNormalViz(); }
    isActive() { return (this.startTime != 0) }
}
