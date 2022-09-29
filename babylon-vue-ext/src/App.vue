<script setup></script>

<template>
  <div>
    <nav>
      <router-link to="/BabylonScene01">BabylonScene01</router-link> |
      <router-link to="/BabylonScene02">BabylonScene02</router-link> |
      <router-link to="/BabylonScene03">BabylonScene03</router-link> |
      <router-link to="/BabylonScene04">BabylonScene04</router-link>
    </nav>
    <main class="main">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
/* @import './assets/css/destyle.css'; */
</style>
