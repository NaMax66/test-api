const http = require("http");
const { PORT } = require("./config.js")

const testJSON = {
  "name": "web-app-architecture-pattern",
}

const server = http.createServer(async (req, res) => {
  if (req.url === "/api" && req.method === "GET") {

    res.writeHead(200, {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    });

    res.write(testJSON);

    res.end();
  }
  else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route not found" }));
  }
})

server.listen(PORT, () => {
  console.log(`server started on port: ${PORT}`)
})
