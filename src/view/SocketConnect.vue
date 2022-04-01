<template>
  <div class="socket-connect">
    <div class="wrapper">
      <!-- <h2 class="title">连接服务器</h2>
      <div class="item">
        <div class="label">服务端IP地址</div>
        <input type="text" v-model="ipAddress" placeholder="IP地址，例如192.168.2.2" />
      </div>
      <div class="item">
        <div class="label">端口</div>
        <input type="text" v-model="port" placeholder="端口号，默认5233" />
      </div> -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="150"
        height="150"
        fill="#3eaf7c"
        class="bi bi-controller"
        viewBox="0 0 16 16"
      >
        <path
          d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1v-1z"
        />
        <path
          d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729c.14.09.266.19.373.297.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466.206.875.34 1.78.364 2.606.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527-1.627 0-2.496.723-3.224 1.527-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.34 2.34 0 0 1 .433-.335.504.504 0 0 1-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a13.748 13.748 0 0 0-.748 2.295 12.351 12.351 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.354 12.354 0 0 0-.339-2.406 13.753 13.753 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27-1.036 0-2.063.091-2.913.27z"
        />
      </svg>
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
      ipAddress: '',
      port: '',
    }
  },
  emits: ["socketConnect"],
  components: {},
  watch: {},
  mounted() {
    // this.getUrlParams();
  },
  methods: {
    async createConnection() {
      try {
        await socket.connect()
        socket.sendMessage('hello server')
        let isReady = await socket.isControllerReady()
        if (isReady) {
          this.$emit("socketConnect", true)
          document.body.requestFullscreen()
          screen.orientation.lock('landscape')
        }
      } catch (error) {
        console.log(error);
      }
    },
    // getUrlParams() {
    //   const params = new Proxy(new URLSearchParams(window.location.search), {
    //     get: (searchParams, prop) => searchParams.get(prop),
    //   });
    //   this.ipAddress = params.ip
    //   this.port = params.port
    // },
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
  background-color: #3eaf7c;
  border: 2px solid #3eaf7c;
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
@media (orientation: portrait), (max-width: 500px) {
  .wrapper {
    width: 90vw;
  }
}
</style>
