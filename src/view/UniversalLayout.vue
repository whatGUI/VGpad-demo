<template>
  <div class="controller">
    <div class="top-buttons">
      <ShoulderButtons class="shoulder-buttons" />
      <div class="start-back-wrapper">
        <BasicButton class="button-start" type="START">start</BasicButton>
        <BasicButton class="button-back" type="BACK">back</BasicButton>
      </div>
    </div>

    <DPad class="d-pad" />
    <VJoystick class="right-axis" type="RIGHT_AXIS" />
    <VJoystick class="left-axis" type="LEFT_AXIS" />
    <ABXY class="abxy" />
  </div>
</template>

<script>
import ShoulderButtons from "@/components/ShoulderButtons.vue"
import BasicButton from "@/components/BasicButton.vue"
import DPad from "@/components/DPad.vue"
import VJoystick from "@/components/VJoystick.vue"
import ABXY from "@/components/ABXY.vue"

export default {
  name: 'UniversalLayout',
  props: {},
  data() {
    return {

    }
  },
  components: { ShoulderButtons, BasicButton, DPad, VJoystick, ABXY },
  watch: {},
  mounted() { },
  methods: {}
}
</script>

<style scoped>
.controller {
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 30px 1fr 1fr;
  gap: 1vh;
  align-items: center;
  overflow: hidden;
  background-color: #dee1e6;
}
.top-buttons {
  grid-column: 1/3;
  grid-row: 1;
  z-index: 2;
}
.start-back-wrapper {
  position: fixed;
  bottom: 0;
  left: 50%;
  display: flex;
  transform: translateX(-50%);
}
.button-start,
.button-back {
  height: 8vh;
  line-height: 8vh;
  font-size: 4vh;
  margin: 0 1vh;
}
.d-pad {
  grid-column: 1;
  grid-row: 2;
  position: relative;
  left: 55%;
  top: 0%;
  z-index: 2;
}
.abxy {
  grid-column: 2;
  grid-row: 3;
  position: relative;
  left: 45%;
  bottom: 25%;
  transform: scale(1.5);
  z-index: 2;
}
.left-axis {
  width: 100px;
  grid-column: 1;
  grid-row: 3;
  position: relative;
  left: 24%;
  bottom: 25%;
  transform: scale(1.5);
  z-index: 2;
}
.right-axis {
  width: 100px;
  grid-column: 2;
  grid-row: 2;
  position: relative;
  left: 10%;
  top: 0%;
  z-index: 2;
}
</style>
