import { Engine } from "babylonjs";
import { createScene } from "./top_scene.js";

var canvas = document.getElementById("renderCanvas");
var engine = new Engine(canvas, true);

var scene = createScene(canvas,engine);

engine.runRenderLoop(() => {
    scene.render();
});