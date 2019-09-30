require("dotenv").config();
const router = require("express").Router();
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: process.env.DB_USER,
  database: "arcsurf_db",
  password: process.env.DB_PASSWORD
});

connection.execute("SET sql_mode=(SELECT REPLACE(@@sql_mode,?,?));", [
  "ONLY_FULL_GROUP_BY",
  ""
]);

router.get("/products", (req, res) => {
  if (req.query.type && req.query.size) {
    connection.execute('SELECT product_name, product_price, product_url FROM products WHERE product_type=? AND product_size=? GROUP BY product_name;', [req.query.type, req.query.size], (err, results, fields) => {
      if (err) {
        res.status(500).send("Error Database", error);
        return;
      }
      res.send(results);
    })
  } else if (req.query.type) {
    connection.execute('SELECT product_name, product_price, product_url, COUNT(DISTINCT product_size ) AS sizes FROM products WHERE product_type=? GROUP BY product_name;', [req.query.type], (err, results, fields) => {
      if (err) {
        res.status(500).send("Error Database", error);
        return;
      }
      res.send(results);
    })
  } else {
    connection.execute(
      "SELECT product_name, product_price, product_url, COUNT(DISTINCT product_size ) AS sizes from products Group by product_name;",
      (err, results, fields) => {
        if (err) {
          res.status(500).send("Error Database", error);
          return;
        }
        res.send(results);
      }
    );
  }
});

module.exports = router;
