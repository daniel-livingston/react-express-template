const request = require("supertest");
const { app } = require("../../server/app");

test("default route responds correctly", async () => {
	await request(app).get("/").expect("Content-Type", /html/).expect(200);
});
