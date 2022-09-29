<template>
  <canvas class="scene" ref="bjsCanvas" />
</template>

<script>
import { ref, onMounted } from '@vue/runtime-core';
import { createScene } from '../scenes/BabylonScene03';

export default {
  name: 'BabylonScene',
  setup() {
    const bjsCanvas = ref(null);

    onMounted(async () => {
      if (bjsCanvas.value) {
        await createScene(bjsCanvas.value);
      }
    });

    return {
      bjsCanvas,
    };
  },
};
</script>

<style scoped>
.scene {
  width: 100%;
  height: 100%;
  touch-action: none;
}
</style>
