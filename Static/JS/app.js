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
         scene.registerBeforeRender(function() {});
         return scene;
     }

     var scene = createScene();

     var onKeyDown = function(evt) {
         //Wireframe
         if (evt.keyCode == 20) {
             elements.forEach(function(e) {
                 e.wireframe = true;
             });
         }

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
         if (evt.keyCode == 74) {
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
         if (evt.keyCode == 76) {
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
         if (evt.keyCode == 75) {
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
         if (evt.keyCode == 73) {
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
         if (evt.keyCode == 85) {
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
         if (evt.keyCode == 79) {
             var cont = 1;
             elements.forEach(function(e) {
                 var matrix = BABYLON.Matrix.Translation(0, 0, 0);
                 e.setPivotMatrix(matrix);

                 if (cont === 1) {
                     e.translate(new BABYLON.Vector3(0, 0, -1), 1, BABYLON.Space.LOCAL);
                 }
                 cont++;
             });

             mesh.rotate(BABYLON.Axis.X, 1.0, BABYLON.Space.LOCAL);
         }

         //House Rotate
         if (evt.keyCode == 84) {
             var cont = 1;
             elements.forEach(function(e) {
                 var matrix = BABYLON.Matrix.Translation(0, 0, 0);
                 e.setPivotMatrix(matrix);

                 if (cont === 5) {
                     e.rotate(BABYLON.Axis.X, 1.0, BABYLON.Space.LOCAL);
                 }
                 cont++;
             });
         }

         //House Rotate
         if (evt.keyCode == 71) {
             var cont = 1;
             elements.forEach(function(e) {
                 var matrix = BABYLON.Matrix.Translation(0, 0, 0);
                 e.setPivotMatrix(matrix);

                 if (cont === 5) {
                     e.rotate(BABYLON.Axis.X, -1.0, BABYLON.Space.LOCAL);
                 }
                 cont++;
             });
         }

         //House Rotate
         if (evt.keyCode == 82) {
             var cont = 1;
             elements.forEach(function(e) {
                 var matrix = BABYLON.Matrix.Translation(0, 0, 0);
                 e.setPivotMatrix(matrix);

                 if (cont === 5) {
                     e.rotate(BABYLON.Axis.Y, 1.0, BABYLON.Space.LOCAL);
                 }
                 cont++;
             });
         }

         //House Rotate
         if (evt.keyCode == 89) {
             var cont = 1;
             elements.forEach(function(e) {
                 var matrix = BABYLON.Matrix.Translation(0, 0, 0);
                 e.setPivotMatrix(matrix);

                 if (cont === 5) {
                     e.rotate(BABYLON.Axis.Y, -1.0, BABYLON.Space.LOCAL);
                 }
                 cont++;
             });
         }

         //House Rotate
         if (evt.keyCode == 72) {
             var cont = 1;
             elements.forEach(function(e) {
                 var matrix = BABYLON.Matrix.Translation(0, 0, 0);
                 e.setPivotMatrix(matrix);

                 if (cont === 5) {
                     e.rotate(BABYLON.Axis.Z, 1.0, BABYLON.Space.LOCAL);
                 }
                 cont++;
             });
         }

         //House Rotate
         if (evt.keyCode == 70) {
             var cont = 1;
             elements.forEach(function(e) {
                 var matrix = BABYLON.Matrix.Translation(0, 0, 0);
                 e.setPivotMatrix(matrix);

                 if (cont === 5) {
                     e.rotate(BABYLON.Axis.Z, -1.0, BABYLON.Space.LOCAL);
                 }
                 cont++;
             });
         }

         //Tree Rotate
         if (evt.keyCode == 186) {
             var cont = 1;
             elements.forEach(function(e) {
                 var matrix = BABYLON.Matrix.Translation(0, 0, 0);
                 e.setPivotMatrix(matrix);

                 if (cont === 1) {
                     e.rotate(BABYLON.Axis.X, 1.0, BABYLON.Space.LOCAL);
                 }
                 cont++;
             });
         }

         //Tree Rotate
         if (evt.keyCode == 222) {
             var cont = 1;
             elements.forEach(function(e) {
                 var matrix = BABYLON.Matrix.Translation(0, 0, 0);
                 e.setPivotMatrix(matrix);

                 if (cont === 1) {
                     e.rotate(BABYLON.Axis.X, -1.0, BABYLON.Space.LOCAL);
                 }
                 cont++;
             });
         }

         //Tree Rotate
         if (evt.keyCode == 80) {
             var cont = 1;
             elements.forEach(function(e) {
                 var matrix = BABYLON.Matrix.Translation(0, 0, 0);
                 e.setPivotMatrix(matrix);

                 if (cont === 1) {
                     e.rotate(BABYLON.Axis.Y, 1.0, BABYLON.Space.LOCAL);
                 }
                 cont++;
             });
         }

         //Tree Rotate
         if (evt.keyCode == 187) {
             var cont = 1;
             elements.forEach(function(e) {
                 var matrix = BABYLON.Matrix.Translation(0, 0, 0);
                 e.setPivotMatrix(matrix);

                 if (cont === 1) {
                     e.rotate(BABYLON.Axis.Y, -1.0, BABYLON.Space.LOCAL);
                 }
                 cont++;
             });
         }

         //Tree Rotate
         if (evt.keyCode == 191) {
             var cont = 1;
             elements.forEach(function(e) {
                 var matrix = BABYLON.Matrix.Translation(0, 0, 0);
                 e.setPivotMatrix(matrix);

                 if (cont === 1) {
                     e.rotate(BABYLON.Axis.Z, 1.0, BABYLON.Space.LOCAL);
                 }
                 cont++;
             });
         }

         //Tree Rotate
         if (evt.keyCode == 192) {
             var cont = 1;
             elements.forEach(function(e) {
                 var matrix = BABYLON.Matrix.Translation(0, 0, 0);
                 e.setPivotMatrix(matrix);

                 if (cont === 1) {
                     e.rotate(BABYLON.Axis.Z, -1.0, BABYLON.Space.LOCAL);
                 }
                 cont++;
             });
         }

         //House Scale
         if (evt.keyCode == 49) {
             var cont = 1;
             elements.forEach(function(e) {
                 var matrix = BABYLON.Matrix.Translation(0, 0, 0);
                 e.setPivotMatrix(matrix);

                 if (cont === 5) {
                     e.scaling.x = e.scaling.x * 1.1;
                 }
                 cont++;
             });
         }

         //House Scale
         if (evt.keyCode == 50) {
             var cont = 1;
             elements.forEach(function(e) {
                 var matrix = BABYLON.Matrix.Translation(0, 0, 0);
                 e.setPivotMatrix(matrix);

                 if (cont === 5) {
                     e.scaling.x = e.scaling.x * 0.9;
                 }
                 cont++;
             });
         }

         //House Scale
         if (evt.keyCode == 51) {
             var cont = 1;
             elements.forEach(function(e) {
                 var matrix = BABYLON.Matrix.Translation(0, 0, 0);
                 e.setPivotMatrix(matrix);

                 if (cont === 5) {
                     e.scaling.y = e.scaling.y * 1.1;
                 }
                 cont++;
             });
         }

         //House Scale
         if (evt.keyCode == 52) {
             var cont = 1;
             elements.forEach(function(e) {
                 var matrix = BABYLON.Matrix.Translation(0, 0, 0);
                 e.setPivotMatrix(matrix);

                 if (cont === 5) {
                     e.scaling.y = e.scaling.y * 0.9;
                 }
                 cont++;
             });
         }

         //House Scale
         if (evt.keyCode == 53) {
             var cont = 1;
             elements.forEach(function(e) {
                 var matrix = BABYLON.Matrix.Translation(0, 0, 0);
                 e.setPivotMatrix(matrix);

                 if (cont === 5) {
                     e.scaling.z = e.scaling.z * 1.1;
                 }
                 cont++;
             });
         }

         //House Scale
         if (evt.keyCode == 54) {
             var cont = 1;
             elements.forEach(function(e) {
                 var matrix = BABYLON.Matrix.Translation(0, 0, 0);
                 e.setPivotMatrix(matrix);

                 if (cont === 5) {
                     e.scaling.z = e.scaling.z * 0.9;
                 }
                 cont++;
             });
         }

         //Tree Scale
         if (evt.keyCode == 55) {
             var cont = 1;
             elements.forEach(function(e) {
                 var matrix = BABYLON.Matrix.Translation(0, 0, 0);
                 e.setPivotMatrix(matrix);

                 if (cont === 1) {
                     e.scaling.x = e.scaling.x * 1.1;
                 }
                 cont++;
             });
         }

         //Tree Scale
         if (evt.keyCode == 56) {
             var cont = 1;
             elements.forEach(function(e) {
                 var matrix = BABYLON.Matrix.Translation(0, 0, 0);
                 e.setPivotMatrix(matrix);

                 if (cont === 1) {
                     e.scaling.x = e.scaling.x * 0.9;
                 }
                 cont++;
             });
         }

         //Tree Scale
         if (evt.keyCode == 57) {
             var cont = 1;
             elements.forEach(function(e) {
                 var matrix = BABYLON.Matrix.Translation(0, 0, 0);
                 e.setPivotMatrix(matrix);

                 if (cont === 1) {
                     e.scaling.y = e.scaling.y * 1.1;
                 }
                 cont++;
             });
         }

         //Tree Scale
         if (evt.keyCode == 48) {
             var cont = 1;
             elements.forEach(function(e) {
                 var matrix = BABYLON.Matrix.Translation(0, 0, 0);
                 e.setPivotMatrix(matrix);

                 if (cont === 1) {
                     e.scaling.y = e.scaling.y * 0.9;
                 }
                 cont++;
             });
         }

         //Tree Scale
         if (evt.keyCode == 219) {
             var cont = 1;
             elements.forEach(function(e) {
                 var matrix = BABYLON.Matrix.Translation(0, 0, 0);
                 e.setPivotMatrix(matrix);

                 if (cont === 1) {
                     e.scaling.z = e.scaling.z * 1.1;
                 }
                 cont++;
             });
         }

         //Tree Scale
         if (evt.keyCode == 221) {
             var cont = 1;
             elements.forEach(function(e) {
                 var matrix = BABYLON.Matrix.Translation(0, 0, 0);
                 e.setPivotMatrix(matrix);

                 if (cont === 1) {
                     e.scaling.z = e.scaling.z * 0.9;
                 }
                 cont++;
             });
         }

         console.log(evt.keyCode);
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