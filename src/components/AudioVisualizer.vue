<template>
  <canvas id="canvas" />
</template>

<script>
/* eslint-disable no-unused-vars */
export default {
  name: "Preloader",
  mounted() {
    var context = this.scripTracker.audioContext;
    var analyser = context.createAnalyser();

    var canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    /**
     * @type {CanvasRenderingContext2D}
     */
    var ctx = canvas.getContext("2d");

    this.scripTracker.audioScriptNode.connect(analyser);
    analyser.connect(context.destination);

    analyser.fftSize = 256;

    var bufferLength = analyser.frequencyBinCount;
    console.log(bufferLength);

    var dataArray = new Uint8Array(bufferLength);

    var WIDTH = canvas.width;
    var HEIGHT = canvas.height;

    var barWidth = (WIDTH / bufferLength) * 1.5;
    var barHeight;
    var x = 0;

    ctx.shadowBlur = 10;
    ctx.shadowColor = "black";

    function renderFrame() {
      requestAnimationFrame(renderFrame);

      analyser.getByteFrequencyData(dataArray);

      var peak_frequency = Math.max.apply( null, dataArray );
      
      ctx.strokeStyle = "white";
      const a = (2 * Math.PI) / 6;
      const r = peak_frequency;

      ctx.beginPath();
      for (var z = 0; z < barHeight; z++) {
        ctx.lineTo(
          barHeight + r * Math.cos(a * z),
          barWidth + r * Math.sin(a * z)
        );
      }
      ctx.closePath();
      ctx.stroke();
    }

    renderFrame();
  },
};
</script>

<style scoped>
canvas {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgb(17, 19, 18);
}
</style>
