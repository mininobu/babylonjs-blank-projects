import { Scene, SceneLoader, ArcRotateCamera, HemisphericLight, Vector3 } from "babylonjs";

export function createScene(canvas,engine) {
    // シーンの作成
    var scene = new Scene(engine);

    // モデルのロード
    SceneLoader.ImportMeshAsync("","https://assets.babylonjs.com/meshes/","box.babylon");

    // シーンにカメラを追加し、それを canvas にアタッチ
    const camera = new ArcRotateCamera("camera", -Math.PI /2, Math.PI / 2.5, 15, new Vector3(0, 0, 0));
    camera.attachControl(canvas, true);

    // シーンにライト（光源）を追加
    const light = new HemisphericLight("light", new Vector3(1, 1, 0));

    return scene;
}