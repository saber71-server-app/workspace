import { io } from "socket.io-client";

const socket = io("ws://localhost:3000");
socket.on("connect", () => {
  console.log("connected");
  socket.emit("hello", "world", (ack) => {
    console.log("ack", ack);
  });
  socket.emit(
    "online",
    { name: "t1", ip: "localhost", port: 300, weight: 1 },
    console.log,
  );
});
