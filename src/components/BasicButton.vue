<template>
  <div
    class="basic-button"
    @touchstart="pressStart"
    @touchend="pressEnd"
  >
    <slot></slot>
    <div
      class="back"
      :class="{ pressed: buttonPressed, square: this.shape === 'square' ? true : false }"
      :style="{ 'background-color': color }"
    ></div>
  </div>
</template>

<script>
import socket from "@/websocket/index";

export default {
  name: 'BasicButton',
  props: {
    shape: {
      type: String,
      default: 'circle'
    },
    color: {
      type: String,
      default: '#42b984'
    },
    type: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      buttonPressed: false,
    }
  },
  computed: {

  },
  components: {},
  watch: {},
  mounted() { },
  methods: {
    pressStart() {
      this.buttonPressed = true
      socket.buttonPress(this.type, this.buttonPressed)
    },
    pressEnd() {
      this.buttonPressed = false
      socket.buttonPress(this.type, this.buttonPressed)
    }
  }
}
</script>

<style scoped>
.basic-button {
  width: 50px;
  height: 50px;
  color: #696969;
  line-height: 50px;
  user-select: none;
  font-size: 25px;
  position: relative;
  border-radius: 50%;
  /* overflow: hidden; */
}
.back {
  width: 100%;
  height: 100%;
  position: absolute;
  transition: opacity 0.05s ease-out, transform 0.05s ease-out;
  opacity: 0.5;
  left: 0;
  top: 0;
  z-index: -1;
  border-radius: 50%;
}
.pressed {
  opacity: 1;
  transform: scale(1.2);
}
.square {
  border-radius: 25%;
}
</style>
