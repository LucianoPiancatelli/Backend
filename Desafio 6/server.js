import express, { json, urlencoded } from "express";
import { Server as IOServer } from "socket.io";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

import { engine } from "express-handlebars";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const products = [];
const message = [];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.render("form");
});

app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    defaultLayout: join(__dirname, "public/views/layouts/main.hbs"),
    layoutsDir: join(__dirname, "public/views/layouts"),
    partialsDir: join(__dirname, "public/views/partials"),
  })
);

app.set("view engine", "hbs");

app.set("views", join(__dirname, "public/views"));
app.use(express.static("public"));

const expressServer = app.listen(PORT, (error) => {
  if (error) {
    console.log(`erro al escuchar el puerto ${PORT}, error: ${error}`);
  } else {
    console.log(`escuchando puerto ${PORT}`);
  }
});

const io = new IOServer(expressServer);

io.on("connection", (socket) => {

  console.log(`New connection, socket ID: ${socket.id}`);
  
  socket.emit("server:product", products);
 
  socket.on("product:info", (productInfo) => {
   
    products.push(productInfo);

    io.emit("server:product", products);
  });
 
  socket.emit("server:message", message);
 
  socket.on("chat:messageInfo", (messageInfo) => {
   
    message.push(messageInfo);
  
    io.emit("server:message", message);
  });
});
