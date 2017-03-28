 /* 
                   1 = Full Tree
                   2 = Trunk
                   3 = Tree
                   4 = Grass
                   5 = Full House
                   6 = Door
                   7 = Floor
                   8 = Roof
                   9 = House
               */
 window.addEventListener('DOMContentLoaded', function() {
     var canvas = document.getElementById('canvas');
     var elements = [];
     var engine = new BABYLON.Engine(canvas, true);
     engine.enableOfflineSupport = false; // Dont require a manifest file
     var createScene = function() {
         var scene = new BABYLON.Scene(engine);
         scene.clearColor = new BABYLON.Color3.White();
         var camera = new BABYLON.ArcRotateCamera(
             "arcCam",
             BABYLON.Tools.ToRadians(90),
             BABYLON.Tools.ToRadians(90),
             20.0,
             BABYLON.Vector3.Zero(),
             scene
         );
         camera.attachControl(canvas, true);
         var light = new BABYLON.PointLight(
             "PointLight",
             new BABYLON.Vector3(0, 0, 0),
             scene
         );

         light.parent = camera;
         light.intensity = 1.5;
         BABYLON.SceneLoader.ImportMesh(
             "", "", "house-tree.babylon",
             scene,
             function(newMeshes) {
                 newMeshes.forEach(
                     function(mesh) {
                         elements.push(mesh);
                     }
                 );
             }
         );
         console.log(elements);
         scene.registerBeforeRender(function() {});
         return scene;
     }
     var scene = createScene();
     var onKeyDown = function(evt) {
         //House Left
         if (evt.keyCode == 65) {
             var cont = 1;
             elements.forEach(function(e) {
                 var matrix = BABYLON.Matrix.Translation(0, 0, 0);
                 e.setPivotMatrix(matrix);

                 if (cont === 5) {
                     e.translate(new BABYLON.Vector3(1, 0, 0), 1, BABYLON.Space.LOCAL);
                 }

                 cont++;
             });
         }

         //House Right
         if (evt.keyCode == 68) {
             var cont = 1;
             elements.forEach(function(e) {
                 var matrix = BABYLON.Matrix.Translation(0, 0, 0);
                 e.setPivotMatrix(matrix);

                 if (cont === 5) {
                     e.translate(new BABYLON.Vector3(-1, 0, 0), 1, BABYLON.Space.LOCAL);
                 }
                 cont++;
             });
         }

         //House Down
         if (evt.keyCode == 83) {
             var cont = 1;
             elements.forEach(function(e) {

                 var matrix = BABYLON.Matrix.Translation(0, 0, 0);
                 e.setPivotMatrix(matrix);

                 if (cont === 5) {
                     e.translate(new BABYLON.Vector3(0, -1, 0), 1, BABYLON.Space.LOCAL);
                 }

                 cont++;
             });
         }

         //House Up
         if (evt.keyCode == 87) {
             var cont = 1;
             elements.forEach(function(e) {
                 var matrix = BABYLON.Matrix.Translation(0, 0, 0);
                 e.setPivotMatrix(matrix);

                 if (cont === 5) {
                     e.translate(new BABYLON.Vector3(0, 1, 0), 1, BABYLON.Space.LOCAL);
                 }
                 cont++;
             });
         }

         //House Front
         if (evt.keyCode == 81) {
             var cont = 1;
             elements.forEach(function(e) {

                 var matrix = BABYLON.Matrix.Translation(0, 0, 0);
                 e.setPivotMatrix(matrix);

                 if (cont === 5) {
                     e.translate(new BABYLON.Vector3(0, 0, 1), 1, BABYLON.Space.LOCAL);
                 }

                 cont++;
             });
         }

         //House Back
         if (evt.keyCode == 69) {
             var cont = 1;
             elements.forEach(function(e) {
                 var matrix = BABYLON.Matrix.Translation(0, 0, 0);
                 e.setPivotMatrix(matrix);

                 if (cont === 5) {
                     e.translate(new BABYLON.Vector3(0, 0, -1), 1, BABYLON.Space.LOCAL);
                 }
                 cont++;
             });
         }

         //Tree Left
         if (evt.keyCode == 75) {
             var cont = 1;
             elements.forEach(function(e) {
                 var matrix = BABYLON.Matrix.Translation(0, 0, 0);
                 e.setPivotMatrix(matrix);

                 if (cont === 1) {
                     e.translate(new BABYLON.Vector3(1, 0, 0), 1, BABYLON.Space.LOCAL);
                 }

                 cont++;
             });
         }

         //Tree Right
         if (evt.keyCode == 192) {
             var cont = 1;
             elements.forEach(function(e) {
                 var matrix = BABYLON.Matrix.Translation(0, 0, 0);
                 e.setPivotMatrix(matrix);

                 if (cont === 1) {
                     e.translate(new BABYLON.Vector3(-1, 0, 0), 1, BABYLON.Space.LOCAL);
                 }
                 cont++;
             });
         }

         //Tree Down
         if (evt.keyCode == 76) {
             var cont = 1;
             elements.forEach(function(e) {

                 var matrix = BABYLON.Matrix.Translation(0, 0, 0);
                 e.setPivotMatrix(matrix);

                 if (cont === 1) {
                     e.translate(new BABYLON.Vector3(0, -1, 0), 1, BABYLON.Space.LOCAL);
                 }

                 cont++;
             });
         }

         //Tree Up
         if (evt.keyCode == 79) {
             var cont = 1;
             elements.forEach(function(e) {
                 var matrix = BABYLON.Matrix.Translation(0, 0, 0);
                 e.setPivotMatrix(matrix);

                 if (cont === 1) {
                     e.translate(new BABYLON.Vector3(0, 1, 0), 1, BABYLON.Space.LOCAL);
                 }
                 cont++;
             });
         }

         //Tree Front
         if (evt.keyCode == 73) {
             var cont = 1;
             elements.forEach(function(e) {

                 var matrix = BABYLON.Matrix.Translation(0, 0, 0);
                 e.setPivotMatrix(matrix);

                 if (cont === 1) {
                     e.translate(new BABYLON.Vector3(0, 0, 1), 1, BABYLON.Space.LOCAL);
                 }

                 cont++;
             });
         }

         //Tree Back
         if (evt.keyCode == 80) {
             var cont = 1;
             elements.forEach(function(e) {
                 var matrix = BABYLON.Matrix.Translation(0, 0, 0);
                 e.setPivotMatrix(matrix);

                 if (cont === 1) {
                     e.translate(new BABYLON.Vector3(0, 0, -1), 1, BABYLON.Space.LOCAL);
                 }
                 cont++;
             });
         }
     };
     // On key up, reset the movement
     var onKeyUp = function(evt) {};
     // Register events with the right Babylon function
     BABYLON.Tools.RegisterTopRootEvents([{
         name: "keydown",
         handler: onKeyDown
     }, {
         name: "keyup",
         handler: onKeyUp
     }]);
     engine.runRenderLoop(function() {
         scene.render();
     });
 });