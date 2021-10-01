const http = require("http");
const { PORT, DEFAULT_HEADERS } = require("./config.js");
const Goods = require('./modules/goods.js');

const booksJSON = require('./db/book_database.json');
const tShirtsJSON = require('./db/t-shirt_database.json');
const trinketsJSON = require('./db/trinket_db.json');

const books = new Goods(booksJSON);
const trinkets = new Goods(tShirtsJSON);
const tShirts = new Goods(trinketsJSON);

const server = http.createServer( (req, res) => {
  if (req.url === "/books" && req.method === "GET") {
    res.writeHead(200, DEFAULT_HEADERS);
    res.write(books.getStringifiedData());
    res.end();
  } else if (req.url === "/t-shirts" && req.method === "GET"){
    res.writeHead(200, DEFAULT_HEADERS);
    res.write(trinkets.getStringifiedData());
    res.end();
  } else if (req.url === "/trinkets" && req.method === "GET") {
    res.writeHead(200, DEFAULT_HEADERS);
    res.write(tShirts.getStringifiedData());
    res.end();
  }

  else {
    res.writeHead(404, DEFAULT_HEADERS);
    res.end(JSON.stringify("Choose the right route"));
  }
})

server.listen(PORT, () => {
  console.log(`server started on port: ${PORT}`)
})
