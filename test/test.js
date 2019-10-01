const expect = require("chai").expect;
const request = require("request");

describe("Server API routes", () => {
  it("Get request Products", done => {
    request("http://localhost:4000/api/products", (error, response, body) => {
      expect(response.statusCode).to.equal(200);
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
