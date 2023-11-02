const jsonServer = require("json-server");
const cors = require("cors");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const route = require("./routes.json");
const middlewares = jsonServer.defaults();
const bodyParser = require("body-parser");

// Load your JSON data
// const db = require("./db.json");
server.use(bodyParser.json());
server.use(cors());

// server.post("/songs-array", (req, res) => {
//   const { songs } = req.body;
//   console.log(songs);
//   if (Array.isArray(songs)) {
//     // Assuming db.songs is your JSON data's songs array
//     songs.forEach((song) => {
//       // You don't need to manually push data into db.songs here
//       // JSON Server handles data modifications internally
//     });
//     res.json({ message: "Songs added successfully" });
//   } else {
//     res.status(500).json({ error: "Invalid request format" });
//   }
// });

server.use(middlewares);
server.use(router);
server.use(jsonServer.rewriter(route));

server.listen(3001, () => {
  console.log("JSON Server is running on port 3001");
});
