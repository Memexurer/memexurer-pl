<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <AudioVisualizer />
  <div class="player-div">
    <div class="player">
      <XMPlayer :playlist="playlist" />
    </div>
  </div>
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <Preloader />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Preloader from "./components/Preloader.vue";
import XMPlayer from "./components/XMPlayer.vue";
import AudioVisualizer from "./components/AudioVisualizer.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Preloader,
    XMPlayer,
    AudioVisualizer,
  },
  data() {
    return {
      playlist: [
        "https://api.modarchive.org/downloads.php?moduleid=149252#unreeeal_superhero_3.xm",
        "https://api.modarchive.org/downloads.php?moduleid=67120#skogen14.mod",
        "https://api.modarchive.org/downloads.php?moduleid=143784#reloaded_keygen_1.xm",
        "https://api.modarchive.org/downloads.php?moduleid=60395#2ND_PM.S3M",
        "https://api.modarchive.org/downloads.php?moduleid=57925#space_debris.mod",
        "https://api.modarchive.org/downloads.php?moduleid=35280#DEADLOCK.XM",
        "https://api.modarchive.org/downloads.php?moduleid=40475#ELYSIUM.MOD",
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

body {
  margin: 0;
}

.player-div {
  background-color: #333;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100%;
}

.player-div .player {
  float: left;
}
</style>
