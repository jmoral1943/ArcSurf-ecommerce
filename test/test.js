const expect = require("chai").expect;
const request = require("request");

it("Get request Homepage", done => {
  request("http://localhost:4000/", (error, response, body) => {
    expect(response.statusCode).to.equal(200);
    done();
  });
});

describe("Server API routes", () => {
  it("Get request Products", done => {
    request("http://localhost:4000/api/products", (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(JSON.parse(response.body)).to.be.an('array')
      done();
    });
  });

  it("Get request Products Query", done => {
    request("http://localhost:4000/api/products?type=surfboard", (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(JSON.parse(response.body)).to.be.an('array')
      done();
    });
  });

  it("Get request Contacts", done => {
    request("http://localhost:4000/api/contacts", (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it("Endpoints that haven't been created", done => {
    request("http://localhost:4000/adfsdf", (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});
