// npm module that allows a file called .env to contain environment variables
require("dotenv").config();
// router for exporting routes in express
const router = require("express").Router();
const mysql = require("mysql2");
const Joi = require("@hapi/joi");

// mysql db connection using mysql2 a faster npm module 
const connection = mysql.createConnection({
  host: "localhost",
  user: process.env.DB_USER,
  database: "arcsurf_db",
  password: process.env.DB_PASSWORD
});

// runs a sql query that changes the default for group by policy to allow columns that have muiltple values to be used in GROUP BY
connection.execute("SET sql_mode=(SELECT REPLACE(@@sql_mode,?,?));", [
  "ONLY_FULL_GROUP_BY",
  ""
]);

// express endpoint for products
router.get("/products", (req, res) => {
  // checking whether a query for type and size are present in the endpoint
  if (req.query.type && req.query.size) {
    // using prepare and execute statements to protect for SQL injections
    connection.execute(
      "SELECT product_name, product_price, product_url FROM products WHERE product_type=? AND product_size=? GROUP BY product_name;",
      [req.query.type, req.query.size],
      (err, results, fields) => {
        // error handles if the database was able to query 
        if (err) {
          res.status(500).send("Error Database", err);
          return;
        }
        // send back the results from the query
        res.send(results);
      }
    );
    // type query
  } else if (req.query.type) {
    // using prepare and execute statements to protect for SQL injections
    connection.execute(
      "SELECT product_name, product_price, product_url, COUNT(DISTINCT product_size ) AS sizes FROM products WHERE product_type=? GROUP BY product_name;",
      [req.query.type],
      (err, results, fields) => {
        // error handles if the database was able to query 
        if (err) {
          res.status(500).send("Error Database", err);
          return;
        }
        // send back the results from the query
        res.send(results);
      }
    );
    // fetch all products from the db
  } else {
    // using prepare and execute statements to protect for SQL injections
    connection.execute(
      "SELECT product_name, product_price, product_url, COUNT(DISTINCT product_size ) AS sizes from products Group by product_name;",
      (err, results, fields) => {
        // error handles if the database was able to query 
        if (err) {
          res.status(500).send("Error Database", err);
          return;
        }
        // send back the results from the query
        res.send(results);
      }
    );
  }
});

// express endpoint for querying the invoice of a product
router.get("/productinvoice", (req, res) => {
  if (req.query.name) {
    // adding wildcards
    const name = "%" +req.query.name + "%"
    // preparing and executing a sql query to find the product in the table
    connection.execute("SELECT * FROM products WHERE product_name LIKE ?;", [name], (err, results, fields) => {
      if (err) {
        res.status(500).send(err)
      }
      let invoice = []
      // reformatting results to send
      for (let i = 0; i < results.length; i++) {
        let product = {}
        // setting useful data to an object product
        product.name = results[i].product_name
        product.price = parseFloat(results[i].product_price)
        product.size = results[i].product_size 
        product.quantity = results[i].product_quantity
        product.invoice = "$" + (product.price * product.quantity * 1.08).toFixed(2)
        // product is added to the invoice array
        invoice.push(product)
      }
      // sending invoice
      res.send(invoice)
    })
  }
})

// express endpoint to retreive the contact table
router.get("/contacts", (req, res) => {
  connection.execute("SELECT * FROM contacts;", (err, results, fields) => {
    // handling if an error occur querying the table
    if (err) {
      res.status(500).send(err)
    }
    // sending the results from the query back
    res.send(results);
  });
});

// express endpoint to post new contact information
router.post("/newcontact", (req, res) => {
  // preparing and executing a insert query
  connection.execute(
    "INSERT INTO contacts(firstName, lastName, subjectLine, order_id, email, form) VALUES(?,?,?,?,?,?)",
    [
      req.body.firstName,
      req.body.lastName,
      req.body.subjectLine,
      req.body.order_id,
      req.body.email,
      req.body.form
    ],
    (err, results, fields) => {
      // handles error if there is one 
      if (err) {
        res.status(500).send(err);
        return;
      }
      // sending back success to shop that the db had posted the information
      res.send("Sucess");
    }
  );
});

// express endpoint for updating a contact resource
router.put("/updatecontact/:id", (req, res) => {
  // creating a schema with Joi to validate the input 
  const schema = {
    firstName: Joi.string().min(2).required(),
    lastName: Joi.string().min(3).required(),
    subjectLine: Joi.string().min(5).required(),
    order_id: Joi.string().min(1).required(),
    email: Joi.string().min(6).required(),
    form: Joi.string().min(10).required()
  }

  // validating the schema to the req.body
  const result = Joi.validate(req.body, schema);

  // catch an error if it exists
  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }

  // preparing and executing the request to update a resource
  connection.execute(
    "UPDATE contacts SET firstName=?, lastName=?, subjectLine=?, order_id=?, email=?, form=? WHERE contact_id=?",
    [
      req.body.firstName,
      req.body.lastName,
      req.body.subjectLine,
      req.body.order_id,
      req.body.email,
      req.body.form,
      req.params.id
    ],
    (err, results, fields) => {
      // handles error if there is one 
      if (err) {
        res.status(500).send(err);
        return;
      }
      // send success to show that the query was successful
      res.send("Success")
    }
  );
});

// express endpoint to delete a resource in the contact table
router.delete("/deletecontact/:id", (req, res) => {
  // preparing and executing the request to remove a resource
  connection.execute(
    "DELETE FROM contacts where contact_id=?",
    [req.params.id],
    (err, results, field) => {
      // handles error if there is one 
      if (err) {
        res.status(500).send(err);
        return;
      }
      // sending that the resource was deleted
      res.send("Contact deleted");
    }
  );
});

// exporting the routes;
module.exports = router;
