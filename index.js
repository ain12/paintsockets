const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
//Recibir del cliente
io.on("connection", (socket) => {
  socket.on("drawLine", (msg) => {
    io.emit("drawLine", msg);
  });
  socket.on("drawDot", (msg) => {
    io.emit("drawDot", msg);
  });
  socket.on("drawArc", (msg) => {
    io.emit("drawArc", msg);
  });
});

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
