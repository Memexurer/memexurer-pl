<template>
  <p v-if="this.modPlayer.isPlaying">{{ this.modPlayer.module.name }}</p>
  <p v-else>Stopped</p>
  <input
    type="range"
    min="0"
    max="2"
    step="0.01"
    v-model="this.modPlayer.masterVolume"
  />
</template>

<script>
/*
scriptracker.js?3ab5:449 Uncaught DOMException: Failed to execute 'disconnect' on 'AudioNode': the given destination is not connected.
    at ScripTracker.stop (webpack-internal:///./node_modules/ScripTracker/src/scriptracker.js:449:23)
    at ScripTracker.processRowEnd (webpack-internal:///./node_modules/ScripTracker/src/scriptracker.js:310:8)
    at ScripTracker.fillBuffer (webpack-internal:///./node_modules/ScripTracker/src/scriptracker.js:146:10)
    */
//todo: audio visualizer
const ScripTracker = require("ScripTracker");

let modPlayer;
let playlistIndex = 9999;

function loadTrack(playlist) {
  if (playlistIndex > playlist.length)
    playlistIndex = Math.floor(Math.random() * playlist.length);
  console.log(`Loading track ${playlist[playlistIndex]}`);
  modPlayer.loadModule(playlist[playlistIndex++]);
}

export default {
  name: "XMPlayer",
  props: {
    playlist: Array,
  },
  mounted() {
    modPlayer = this.scripTracker;
    modPlayer.setMasterVolume(0.25);

    modPlayer.on(ScripTracker.Events.songEnded, () => loadTrack(this.playlist));
    modPlayer.on(ScripTracker.Events.playerReady, () => {
      console.log("Track loaded");
      modPlayer.play();
    });

    loadTrack(this.playlist);

    /* eslint-disable no-unused-vars */
    /* window.addEventListener("click", (event) => {
      if (modPlayer.module == null) return;

      if (modPlayer.isPlaying) modPlayer.stop();
      else {
        modPlayer.audioContext.resume();
        modPlayer.play();
      }
    }); */

    window.addEventListener("keyup", (event) => {
      if (event.key === "ArrowRight") modPlayer.nextOrder();
    });
  },
  data(){
    return {
      modPlayer: this.scripTracker
    }
  }
};
</script>
