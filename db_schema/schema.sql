DROP DATABASE IF EXISTS arcsurf_db;
CREATE DATABASE arcsurf_db;
USE arcsurf_db;
CREATE TABLE customers(
  customer_id INT AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(50) NOT NULL,
  middle_initial CHAR(1),
  last_name VARCHAR(50) NOT NULL,
  email_address VARCHAR(255) NOT NULL,
  login_name VARCHAR(50) NOT NULL,
  login_password VARCHAR(20) NOT NULL,
  phone_number VARCHAR(13) NOT NULL,
  address_line_1 VARCHAR(100),
  address_line_2 VARCHAR(100),
  town_city VARCHAR(50),
  country VARCHAR(50),
  credit_card_number VARCHAR(16),
  PRIMARY KEY(customer_id)
);
CREATE TABLE shipments(
  shipment_id INT AUTO_INCREMENT NOT NULL,
  shipment_status VARCHAR(50) NOT NULL,
  shipment_date DATE NOT NULL,
  PRIMARY KEY(shipment_id)
);
CREATE TABLE invoices(
  invoice_id INT AUTO_INCREMENT NOT NULL,
  invoice_amount DECIMAL(13, 4) NOT NULL,
  invoice_discount DECIMAL(13, 4) NOT NULL,
  payment_date DATE NOT NULL,
  credit_card_number VARCHAR(16) NOT NULL,
  PRIMARY KEY(invoice_id)
);
CREATE TABLE products(
  product_id INT AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(100) NOT NULL,
  product_price DECIMAL(13, 4) NOT NULL,
  product_color VARCHAR(50) NOT NULL,
  product_size VARCHAR(3) NOT NULL,
  product_description MEDIUMTEXT NOT NULL,
  product_quantity INT NOT NULL,
  product_type VARCHAR(50) NOT NULL,
  product_url VARCHAR(255) NOT NULL,
  PRIMARY KEY(product_id)
);
CREATE TABLE orders(
  order_id INT AUTO_INCREMENT NOT NULL,
  order_status VARCHAR(20) NOT NULL,
  shipment_id INT NOT NULL,
  customer_id INT NOT NULL,
  invoice_id INT NOT NULL,
  order_notes VARCHAR(255),
  PRIMARY KEY(order_id),
  FOREIGN KEY (shipment_id) REFERENCES shipments(shipment_id),
  FOREIGN KEY (customer_id) REFERENCES customers(customer_id),
  FOREIGN KEY (invoice_id) REFERENCES invoices(invoice_id)
);
CREATE TABLE order_items(
  order_item_id INT AUTO_INCREMENT NOT NULL,
  product_id INT NOT NULL,
  order_id INT NOT NULL,
  order_item_status VARCHAR(50),
  order_item_quantity INT NOT NULL,
  order_item_price INT NOT NULL,
  PRIMARY KEY (order_item_id),
  FOREIGN KEY (product_id) REFERENCES products(product_id),
  FOREIGN KEY (order_id) REFERENCES orders(order_id)
);
CREATE TABLE contacts(
  contact_id INT AUTO_INCREMENT NOT NULL,
  firstName VARCHAR(50) NOT NULL,
  lastName VARCHAR(50) NOT NULL,
  subjectLine VARCHAR(50) NOT NULL,
  order_id INT NOT NULL,
  email VARCHAR(50),
  form VARCHAR(255),
  PRIMARY KEY (contact_id),
  FOREIGN KEY (order_id) REFERENCES orders(order_id)
);