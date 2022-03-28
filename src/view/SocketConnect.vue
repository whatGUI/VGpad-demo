<template>
  <div class="socket-connect">
    <div class="wrapper">
      <h2 class="title">连接服务器</h2>
      <div class="item">
        <div class="label">服务端IP地址</div>
        <input type="text" v-model="ipAddress" placeholder="IP地址，例如192.168.2.2" />
      </div>
      <div class="item">
        <div class="label">端口</div>
        <input type="text" v-model="port" placeholder="端口号，默认3000" />
      </div>
      <button @click="createConnection">Link Start!</button>
    </div>
  </div>
</template>

<script>
import socket from "@/websocket/index";
export default {
  name: 'SocketConnect',
  props: {},
  data() {
    return {
      ipAddress: '192.168.2.83',
      port: '3000'
    }
  },
  emits: ["socketConnect"],
  components: {},
  watch: {},
  mounted() { },
  methods: {
    async createConnection() {
      let url = this.ipAddress + ':' + this.port
      console.log(url);
      try {
        await socket.connect(url)
        socket.sendMessage('hello server')
        await socket.isControllerReady()
        this.$emit("socketConnect", true)
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>

<style scoped>
.socket-connect {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f9fafb;
}
.socket-connect * {
  box-sizing: border-box;
}
.wrapper {
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgb(0 0 0 / 30%);
  width: 45vw;
  padding: 30px 40px;
}
.wrapper button {
  cursor: pointer;
  background-color: #3498db;
  border: 2px solid #3498db;
  border-radius: 4px;
  color: #fff;
  display: block;
  font-size: 16px;
  padding: 10px;
  margin-top: 20px;
  width: 100%;
}
.title {
  margin: 0 0 20px;
}
.item {
  margin-bottom: 10px;
  padding-bottom: 20px;
}
.item input {
  border: 2px solid #f0f0f0;
  border-radius: 4px;
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 16px;
}
.item input:focus {
  outline: 0;
  border-color: #777;
}
.label {
  color: #777;
  margin-bottom: 5px;
  text-align: start;
}
@media (orientation: portrait) {
  .wrapper {
    width: 90vw;
  }
}
</style>
