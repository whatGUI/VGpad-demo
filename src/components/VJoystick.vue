<template>
  <div class="v-joystick">
    <div id="zone_joystick" ref="zone_joystick"></div>
  </div>
</template>

<script>
import nipplejs from 'nipplejs';
import socket from "@/websocket/index";

export default {
  name: 'VJoystick',
  props: {
    type: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      manager: {}
    }
  },
  methods: {
    createJoystick() {
      this.manager = nipplejs.create({
        zone: this.$refs.zone_joystick,
        mode: "static",
        position: { left: "50%", top: "50%" },
        color: "red",
        dynamicPage: true
      })

      this.manager.on("move", (event, data) => {
        let { x, y } = data.vector
        socket.joystickMove(this.type, x, y)
      }).on("end", () => {
        socket.joystickMove(this.type, 0, 0)
      })
    }
  },
  mounted() {
    this.createJoystick()
  },
  beforeUnmounted() {
    this.manager.destroy()
  }
}
</script>

<style scoped>
.v-joystick {
  position: relative;
}
#zone_joystick {
  width: 100px;
  height: 100px;
  position: relative;
}
</style>
