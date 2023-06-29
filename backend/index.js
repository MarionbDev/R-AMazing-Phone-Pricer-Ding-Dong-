require("dotenv").config();
const uniqid = require("uniqid");
const socketIO = require("socket.io");

const app = require("./src/app");

const port = parseInt(process.env.APP_PORT ?? "5000", 10);

const server = app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    // eslint-disable-next-line no-restricted-syntax
    console.log(`Server is listening on ${port}`);
  }
});

const io = socketIO(server, {
  cors: {
    origin: process.env.FRONTEND_URL?.split(",") ?? "http://localhost:3000",
  },
});

const messages = [
  {
    id: uniqid(),
    author: "serveur",
    text: "Bienvenue sur le chat Ding Dong",
  },
];

io.on("connect", (socket) => {
  console.log("user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  socket.emit("initialMessageList", messages);

  socket.on("messageFromClient", (messageWithTextAndAuthor) => {
    const newMessage = { id: uniqid(), ...messageWithTextAndAuthor };
    messages.push(newMessage);
    console.log("Messages: ", messages);
    io.emit("updateMessageList", messages);
  });
});
