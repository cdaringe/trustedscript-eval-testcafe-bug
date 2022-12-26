fixture`Fixture`.page("http://localhost:3000");

test("test", async (t) => {
  await t.click("body");
  await t.debug();
});
