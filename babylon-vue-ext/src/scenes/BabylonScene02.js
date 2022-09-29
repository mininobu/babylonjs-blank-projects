import {
  Engine,
  Scene,
  ArcRotateCamera,
  Vector3,
  MeshBuilder,
  StandardMaterial,
  Color3,
  HemisphericLight,
} from '@babylonjs/core';

const createScene = (canvas) => {
  const engine = new Engine(canvas);
  const scene = new Scene(engine);

  const camera = new ArcRotateCamera(
    'camera',
    -Math.PI / 2,
    Math.PI / 2.5,
    15,
    new Vector3(0, 0, 0)
  );
  camera.setTarget(Vector3.Zero());
  camera.attachControl(canvas, true);

  new HemisphericLight('light', Vector3.Up(), scene);

  const cylinder = MeshBuilder.CreateCylinder('cylinder', {
    diameterTop: 0,
  });

  engine.runRenderLoop(() => {
    scene.render();
  });
};

export { createScene };
