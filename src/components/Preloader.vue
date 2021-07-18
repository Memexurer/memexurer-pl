<template>
  <transition name="fade">
    <div class="load-wrapper" v-if="show">
      <div class="load-center">
        <h1>LOADINK</h1>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Preloader",
  data() {
    return {
      show: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.show = false;
    }, 700);
  },
};
</script>

<style scoped>
.load-wrapper {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgb(17, 19, 18);
  color: red;
}

.load-center {
  position: absolute;
  width: 100px;
  height: 100px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.fade-leave-active {
  transition: opacity 1s;
  animation-name: sexi;
  animation-duration: 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

@keyframes sexi {
  from {
    transform: rotateX(0);
  }
  to {
    transform: rotateX(90deg);
  }
}
</style>
