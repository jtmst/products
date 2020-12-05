const request = require("supertest")("http://localhost:1337/products");
const expect = require("chai").expect;

describe("GET /products", function () {
    it("should return all products, limited to 5 per page", async function () {
        const response = await request.get("/");
        expect(response.status).to.eql(200);
        expect(response.body.length).to.eql(5);
    });
});

describe("GET /products/:product_id", function () {
    it("should return a single product by id, with features", async function () {
        const response = await request.get("/2");
        expect(response.status).to.eql(200);
        expect(response.body.length).to.eql(1);
    });
});

describe("GET /products/:product_id/styles", function () {
    it("should return styles with sku and photos", async function () {
        const response = await request.get("/2/styles");
        expect(response.status).to.eql(200);
        expect(response.body.length).to.eql(1);
    });
});

describe("GET /products/:product_id/related", function () {
    it("should return an array of continued the values of related projects", async function () {
        const response = await request.get("/2/related");
        expect(response.status).to.eql(200);
        expect(response.body.length).to.eql(4);
    });
});



