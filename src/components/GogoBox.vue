<template>
  <HeaderBar />
  <div id="app">
    <h3>강아지 돌아간다 슈슝</h3>
  
    <canvas id="canvas" width="600" height="600"></canvas>
</div>



</template>

<script>
import HeaderBar from './HeaderBar.vue';
import { onMounted } from 'vue';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as THREE from 'three';

export default {
  components : {HeaderBar},
  setup() {
    onMounted(() => {
      // THREE.js 초기화 코드를 여기에 넣으세요.
      let renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#canvas'),
        antialias: true
      });
      renderer.outputEncoding = THREE.sRGBEncoding;

      let scene = new THREE.Scene();
      scene.background = new THREE.Color('white');

      let camera = new THREE.PerspectiveCamera(30, 1);
      camera.position.set(0, 0, 7);

      let light = new THREE.DirectionalLight(0xffff00, 10);
      scene.add(light);

      let loader = new GLTFLoader();
      loader.load('http://127.0.0.1:5500/src/components/shiba/scene.gltf', (gltf) => {
        scene.add(gltf.scene);

        function animate() {
          requestAnimationFrame(animate);
          gltf.scene.rotation.y -= 0.01;
          // gltf.scene.rotation.x -= 0.1;
          renderer.render(scene, camera);
        }
        animate();
      });
    });
  }
};
</script>


<style>

</style>