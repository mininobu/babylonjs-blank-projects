var createScene = function() {
    // シーンの作成
    var scene = new BABYLON.Scene(engine);

    // あなたのコード

    // モデルのロード
    BABYLON.SceneLoader.ImportMeshAsync("","https://assets.babylonjs.com/meshes/","box.babylon");

    // シーンにカメラを追加し、それを canvas にアタッチ
    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI /2, Math.PI / 2.5, 15, new BABYLON.Vector3(0, 0, 0));
    camera.attachControl(canvas, true);

    // シーンにライト（光源）を追加
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));

    return scene;
};




// canvas 要素を取得
const canvas = document.getElementById("renderCanvas"); 

// BABYLON 3D エンジンを作成
const engine = new BABYLON.Engine(canvas, true); 

// createScene を呼ぶ
const scene = createScene(); 

// シーンを継続的にレンダリングするためにレンダーループに登録する
engine.runRenderLoop(function () {
        scene.render();
});

// ブラウザーのリサイズイベントを監視する
window.addEventListener("resize", function () {
        engine.resize();
});