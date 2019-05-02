class MyBranch extends CGFobject {
	constructor(scene) {
        super(scene);
        this.cilinder = new MyCylinder(scene,3,3,4);
        this.initMaterials();
    } 

    initMaterials(){
        this.branchMaterial = new CGFappearance(this.scene);
        this.branchMaterial.setAmbient(0.55, 0.16, 0.07, 1);
        this.branchMaterial.setShininess(10.0);
    }


    display(){


        this.scene.pushMatrix();
        this.scene.scale(0.5, 2, 0.5);
        this.branchMaterial.apply();
        this.cilinder.display();
        this.scene.popMatrix();


    }





}