//From https://github.com/EvanHahn/ScriptInclude
include = function () { function f() { var a = this.readyState; (!a || /ded|te/.test(a)) && (c-- , !c && e && d()) } var a = arguments, b = document, c = a.length, d = a[c - 1], e = d.call; e && c--; for (var g, h = 0; c > h; h++)g = b.createElement("script"), g.src = arguments[h], g.async = !0, g.onload = g.onerror = g.onreadystatechange = f, (b.head || b.getElementsByTagName("head")[0]).appendChild(g) };
serialInclude = function (a) { var b = console, c = serialInclude.l; if (a.length > 0) c.splice(0, 0, a); else b.log("Done!"); if (c.length > 0) { if (c[0].length > 1) { var d = c[0].splice(0, 1); b.log("Loading " + d + "..."); include(d, function () { serialInclude([]); }); } else { var e = c[0][0]; c.splice(0, 1); e.call(); }; } else b.log("Finished."); }; serialInclude.l = new Array();

serialInclude([
    '../lib/CGF.js',
    'basic_objects/Plane.js',
    'basic_objects/MyPrism.js',
    'basic_objects/MyPyramid.js',
    'basic_objects/MyQuad.js',
    'basic_objects/MyUnitCubeQuad.js',
    'basic_objects/MyUnitCube.js',
    'basic_objects/MySphere.js',
    'basic_objects/MyCone.js',
    'basic_objects/MyTriangle.js',
    'basic_objects/MyCylinder.js',

    'complex_objects/MyBird.js',
    'complex_objects/MyBirdWing.js',
    'complex_objects/MyTerrain.js',
    'complex_objects/MyHouse.js',
    'complex_objects/MyCubeMap.js',
    'complex_objects/MyTreeBranch.js',
    'complex_objects/MyNest.js',
    'complex_objects/MyLeaf.js',
    'complex_objects/MyLSystem.js',
    'complex_objects/MyLSPlant.js',
    'complex_objects/MyLightning.js',

    'MyScene.js',
    'MyInterface.js',

    main = function () {
        var app = new CGFapplication(document.body);
        var myScene = new MyScene();
        var myInterface = new MyInterface();

        app.init();

        app.setScene(myScene);
        app.setInterface(myInterface);

        myInterface.setActiveCamera(myScene.camera);

        app.run();
    }

]);

function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}
