import { io } from "socket.io-client";
let socket;

export default {
  connect() {
    return new Promise((resolve, reject) => {
      socket = io({
        transports: ["websocket"],
        reconnection: false,
        timeout: 3000,
      });
      socket.on("connect", () => {
        resolve();
      });
      socket.on("connect_error", (error) => {
        reject(error);
      });
    });
  },
  isControllerReady() {
    return new Promise((resolve, reject) => {
      if (socket.connected === false) {
        reject("websocket connection failed");
      }
      socket.on("controller ready", (isReady) => {
        if (isReady === true) {
          resolve(true);
        } else {
          reject("controller not ready");
        }
      });
    });
  },
  sendMessage(message) {
    socket.send("From " + socket.id + ":" + message);
    console.log("send finish");
  },
  buttonPress(buttonType, isPressed) {
    socket.emit("button press", buttonType, isPressed);
  },
  joystickMove(type, x, y) {
    socket.emit("joystick move", type, x, y);
  },
};
